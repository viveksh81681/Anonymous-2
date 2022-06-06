import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  BackHandler,
  ScrollView,
  I18nManager,
  TextInput,
  Modal,
  AsyncStorage,
} from 'react-native';
import {
  Content,
  Container,
  Right,
  Input,
  Item,
  Header,
  Left,
  Body,
  Title,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {Images, Fonts, Metrics, Colors} from '../../Themes/';
import {get_remote_data} from '../function/export_fn';
import constants from '../function/Constant';
import {Arabic, English} from '../../Language';
import RazorpayCheckout from "react-native-razorpay";
//import { CachedImage } from "react-native-cached-image";

export default class CheckOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStep: 1,
      selectedLots: 0,
      paymentMethod: [
        {
          id: 0,
          paymentMethodImage: Images.discover,
          paymentMethodTitle: 'Card, Upi, Net Banking',
          isOpen: false,
        },
        /**
                {
                    id: 1,
                    paymentMethodImage: Images.visaCard,
                    paymentMethodTitle: "Visa",
                    isOpen: false
                },
                {
                    id: 2,
                    paymentMethodImage: Images.payPal,
                    paymentMethodTitle: "Paypal",
                    isOpen: false
                },
                {
                    id: 3,
                    paymentMethodImage: Images.masterCard,
                    paymentMethodTitle: "Master Card",
                    isOpen: false
                }
                 **/
      ],
      shop_id: '',
      gst_number: '',
      user_id: '',
      products_data: [],
      location_Data: {},
      balance: 0,
      total_amount: 0,
    };
  }

  componentWillMount() {
    var that = this;
    this._get_Data_location();
    this.get_navagation_data();
    this.getWalletBalance();
    BackHandler.addEventListener('hardwareBackPress', function() {
      //that.props.navigation.navigate("ECommerceMyBag");
      return true;
    });
  }

  getWalletBalance = async () => {
    let data = {amount: 0}
    console.warn(data);
    let responseData = await get_remote_data(constants.api_url + 'App_protected/getUserBalance', JSON.stringify(data));
    console.log(responseData);
    //this.setState({balance: responseData.data});
    let localAr = this.state.paymentMethod;
    localAr.push({
      id: 1,
      paymentMethodImage: Images.masterCard,
      paymentMethodTitle: 'Wallet: ₹'+responseData.data,
      isOpen: false,
    });
    this.setState({paymentMethod: localAr, balance: responseData.data});
  }

  _get_Data_location = async () => {
    let locaiton = await AsyncStorage.getItem('location_Data');
    locaiton = JSON.parse(locaiton);
    console.warn(locaiton);
    this.setState({location_Data: locaiton});
  };

  get_navagation_data = async () => {
    const navagation_data = this.props.navigation.state.params.shop_data;
    console.warn(navagation_data);
    this.setState({
      shop_id: navagation_data.shop_id,
      gst_number: navagation_data.gst_number,
      user_id: navagation_data.user_id,
      products_data: navagation_data.products_data,
      total_amount: navagation_data.total_amount,
    });
  };

  placeOrderNow = async (paymentMode, razorpay_payment_id) => {
    let order_tp = await AsyncStorage.getItem('or_type');
    let data = {
      shop_id: this.state.shop_id,
      paymentMode: paymentMode,
      payment_id: razorpay_payment_id,
      order_tp: order_tp,
      gst_number: this.state.gst_number,
      user_id: this.state.user_id,
      products_data: this.state.products_data,
      location_Data: this.state.location_Data,
      billing_add: this.state.location_Data.address,
      billing_city: this.state.location_Data.city,
      billing_state: this.state.location_Data.state,
      latitude: this.state.location_Data.latitude,
      longitude: this.state.location_Data.longitude,
    };

    console.warn(data);

    let responseData = await get_remote_data(
        constants.api_url + 'App_protected/place_order',
        JSON.stringify(data),
    );
    console.warn(responseData);
    if (responseData.status === 200) {
      this.props.navigation.navigate('Thanks');
    } else {
      alert(responseData.message);
    }
  }

  place_order = async () => {
    if (this.state.selectedLots === 1){
      if (this.state.total_amount <= this.state.balance){
        let data = {amount: this.state.total_amount, orderId: 'or', minus: 'true'}
        console.warn(data);
        let responseData = await get_remote_data(constants.api_url + 'App_protected/updateBalance', JSON.stringify(data));
        console.warn(responseData);
        if (responseData.status === 300) {
          alert(responseData.message);
        } else {
          this.placeOrderNow('wallet', responseData.orderId);
        }
      }else{
        alert('Insufficient balance in your wallet');
      }
    }else{
      let data = {amount: this.state.total_amount}
      console.warn(data);
      let responseData = await get_remote_data(constants.api_url + 'App_protected/razorPayCreateOrder', JSON.stringify(data));
      console.warn(responseData);
      if (responseData.status === 300) {
        alert(responseData.message);
      } else {
        let options = {
          description: 'Add money to wallet',
          image: 'https://desidiet.oarlock.co/app-assets/images/logo/logo.png',
          currency: 'INR',
          key: constants.RazorPayKey,
          amount: String(this.state.total_amount),
          name: 'OyeGattu',
          order_id: responseData.data.id,//Replace this with an order_id created using Orders API.
          prefill: responseData.prefill,
          theme: {color: Colors.branding_color}
        }
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          this.placeOrderNow('online', data.razorpay_payment_id);
          console.log(data);
          //alert('Amount updated successfully');
          //alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          console.log(error);
          alert(`Error: ${error.code} | ${error.description}`);
        });
      }
    }
  };

  onCheckBoxPress(id, isOpen) {
    console.log('==PAYMENT_METHOD11==');
    console.log(this.state.paymentMethod);

    this.setState({
      selectedLots: id,
    });

    var temp = [];

    temp = this.state.paymentMethod.slice(); //copy array

    for (var i = 0; i < temp.length; i++) {
      if (id == i) {
        console.log('==PAYMENT_ID==');
        console.log(id);
        if (temp[i].isOpen == false) {
          temp[i].isOpen = true;
        } else {
          temp[i].isOpen = false;
        }
      } else {
        temp[i].isOpen = false;
      }
    }

    console.log('==PAYMENT_METHOD==');
    console.log(this.state.paymentMethod);

    this.setState({paymentMethod: temp});
  }

  onItemClick() {
    this.props.navigation.navigate('Cart');
  }

  render() {
    let lang = null;
    if (I18nManager.isRTL === true) {
      lang = Arabic;
    } else {
      lang = English;
    }

    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Colors.branding_color, true);
      StatusBar.setTranslucent(false);
    }

    return (
      <Container style={styles.container}>
        <Header
          androidStatusBarColor={Colors.branding_color}
          style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={this.onItemClick.bind(this)}>
              <FontAwesome
                name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
                size={35}
                color="white"
                style={{paddingRight: 20}}
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>{lang.checkout}</Text>
          </Body>
          <Right style={styles.right} />
        </Header>

        <View>
          <View
            style={{
              width: Metrics.WIDTH * 0.9,
              alignSelf: 'center',
              height: Metrics.HEIGHT * 0.6,
            }}>
            <Content style={{marginTop: Metrics.HEIGHT * 0.05}}>
              <View style={styles.viewPaymentBg}>
                {this.state.paymentMethod.map((item, index) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        style={
                          this.state.selectedLots == item.id
                            ? [
                                styles.rowPaymentMethod,
                                {backgroundColor: '#f3f3f3'},
                              ]
                            : [
                                styles.rowPaymentMethod,
                                {backgroundColor: Colors.transparent},
                              ]
                        }
                        onPress={() =>
                          this.onCheckBoxPress(item.id, item.isOpen)
                        }>
                        <View
                          style={[
                            styles.rowPaymentDetail,
                            {justifyContent: 'space-between'},
                          ]}>
                          <View style={styles.rowPaymentDetail}>
                            <Image
                              source={item.paymentMethodImage}
                              style={styles.paymentMethodImage}
                            />
                            <Text
                              style={[
                                styles.fieldInfoTxt,
                                {marginLeft: Metrics.WIDTH * 0.04},
                              ]}>
                              {item.paymentMethodTitle}
                            </Text>
                          </View>
                          {this.state.selectedLots == item.id ? (
                            <MaterialIcons
                              name="check"
                              size={25}
                              color={'#ffc700'}
                            />
                          ) : null}
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </Content>
          </View>
        </View>

        <View style={styles.footerBg}>
          <TouchableOpacity
            style={styles.footerTxtBg}
            onPress={() => this.place_order()}>
            <Text style={styles.footerTxt}>Pay Now ₹ {this.state.total_amount}</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
