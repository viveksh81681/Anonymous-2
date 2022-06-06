import React, {Component} from 'react';
import {AsyncStorage, Dimensions, I18nManager, Image, Platform, StatusBar, Text, View} from 'react-native';
import {Button, Container, Content, Header, Input, Item, Left, Right,} from 'native-base';
import {Colors, Images} from '../../Themes/';
import styles from './styles';
import RazorpayCheckout from 'react-native-razorpay';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import {Arabic, English} from "../../Language";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import constants from "../function/Constant";
import {get_remote_data} from "../function/export_fn";
import RNRestart from "react-native-restart";

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_fifteen.png';
const headerBG = 'https://latintrends.com/wp-content/uploads/2015/03/times-to-drink-water.jpg?w=640';
const headerBG2 = 'http://clipart-library.com/images/8izrjG7AT.jpg';
const cardBgImage = 'http://clipart-library.com/images/8izrjG7AT.jpg';
const cardBgImageTwo = 'http://clipart-library.com/images/8izrjG7AT.jpg';

const {width, height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.06;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0,
            amount: 0,
            latitude: 22.564518,
            longitude: 72.928871,
            city: '',
            state: '',
            address: '',
            location_name: '',
            history: [{
                "amount": "100",
                "createType": "online",
                "id": "11",
                "orderId": null,
                "type": "cr",
                "userId": "6"
            }]
        };
    }

    async componentDidMount() {
        this.getWalletBalance();
        //this.place_state_update(this.props.navigation.state.params)
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.navigation.state.params !== this.props.navigation.state.params) {
            // this.place_state_update(this.props.navigation.state.params)
        }
    }

    add_address() {
        if (!this.state.location_name) {
            return false;
        }
        if (!this.state.address) {
            return false;
        }
        console.warn(this.state);
        let data = {
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            city: this.state.city,
            state: this.state.state,
            address: this.state.address,
            location_name: this.state.location_name,
        };
        AsyncStorage.setItem('location_Data', JSON.stringify(data));
        this.props.navigation.navigate('Home_page', {
            place_detail: data,
        });
    }

    getWalletBalance = async () => {
        let data = {amount: this.state.amount}
        console.warn(data);
        let responseData = await get_remote_data(constants.api_url + 'App_protected/getUserBalance', JSON.stringify(data));
        console.log(responseData);
        this.setState({balance: responseData.data, amount: '', history: responseData.history});
    }

    onSuccessAddAmount = async (orderId) => {
        let data = {amount: this.state.amount, orderId: orderId, minus: 'false'};
        console.warn(data);
        let responseData = await get_remote_data(constants.api_url + 'App_protected/updateBalance', JSON.stringify(data));
        if (responseData.status === 300) {
            alert(responseData.message);
        } else {
            RNRestart.Restart();
        }
        //await this.getWalletBalance();
    }

    addAmountGetaway = async () => {
        //RAZORPAY_KEY_ID=rzp_test_IroZAj911e0Ghs
        //RAZORPAY_SECRET=w0mdef399ZUSl44G6IkLW5hv
        let data = {amount: this.state.amount}
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
                key: constants.RazorPayKey, //'rzp_test_IroZAj911e0Ghs',
                amount: String(this.state.amount),
                name: 'OyeGattu',
                order_id: responseData.data.id,//Replace this with an order_id created using Orders API.
                prefill: responseData.prefill,
                theme: {color: Colors.branding_color}
            }
            RazorpayCheckout.open(options).then((data) => {
                // handle success
                this.onSuccessAddAmount(data.razorpay_payment_id);
                console.log(data);
                alert('Amount updated successfully');
                //alert(`Success: ${data.razorpay_payment_id}`);
            }).catch((error) => {
                // handle failure
                console.log(error);
                alert(`Error: ${error.code} | ${error.description}`);
            });
        }
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
            <Container style={{backgroundColor: Colors.snow}}>

                <Header style={styles.header_style}>
                    <Left style={styles.header_view}>
                        <Button transparent
                                onPress={() => this.props.navigation.goBack()}>
                            <Image source={Images.back_white}/>
                            <Text style={styles.header_title}>Wallet Balance</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content>
                    <View style={styles.form_two}>

                        <View style={styles.walletButton}>
                            <Text
                                style={{
                                    marginLeft: 5,
                                    color: Colors.snow,
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                }}>
                                Your Balance
                            </Text>
                            <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center',}}>
                                <FontAwesome
                                    name="inr"
                                    size={30}
                                    color={Colors.snow}
                                    style={{marginLeft: 5}}
                                />
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        color: Colors.snow,
                                        fontSize: 30,
                                        fontWeight: 'bold',
                                    }}>
                                    {this.state.balance}
                                </Text>
                            </View>
                        </View>

                    </View>


                    <View style={styles.companies}>

                        <Text style={styles.dsc_text}>
                            Add amount to wallet
                        </Text>
                        <Item underline style={styles.itememail}>
                            <Input
                                value={this.state.amount}
                                placeholder={'Amount'}
                                placeholderTextColor={Colors.hintblue}
                                keyboardType={'email-address'}
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                style={{width: '100%', paddingLeft: 0}}
                                onChangeText={(amount) => this.setState({amount})}
                            />
                        </Item>

                        <Button full dark
                                style={{backgroundColor: Colors.branding_color, marginTop: 16, marginBottom: 16}}
                                onPress={() => this.addAmountGetaway()}>
                            <Text style={{color: Colors.snow}}>
                                Add
                            </Text>
                        </Button>

                        <Text style={[styles.head_text, {marginBottom: 20}]}>Wallet transactions</Text>

                        <DataTable
                            data={this.state.history} // list of objects
                            colNames={['amount', 'type', 'createType', 'date']} //List of Strings
                            colSettings={[
                                {name: 'amount', type: COL_TYPES.STRING},
                                {name: 'type', type: COL_TYPES.STRING},
                                {name: 'createType', type: COL_TYPES.STRING},
                                {name: 'date', type: COL_TYPES.STRING},

                            ]}//List of Objects
                            noOfPages={2} //number
                        />
                    </View>
                </Content>
                {/*<Foot pass_style={styles.foot_style}/>*/}
            </Container>
        );
    }
}
