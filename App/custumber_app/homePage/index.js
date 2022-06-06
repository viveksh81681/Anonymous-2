import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container, Content, Header, Left, Right, Text} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors, Images} from '../../Themes';
// Screen Styles
import styles from '../../Style/styles';
import {get_remote_data, get_remote_data_get_req} from "../function/export_fn";
import constants from "../function/Constant";
import Swiper from "react-native-swiper";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: [],
      login_count: 0,
      isChecked: false,
      mobile: '',
      balance: 0,

      page: 'Home',
      location_name: 'Not Selected',

      service: [],
      banners: [],
      service_name: '',
      service_id: '',
      service_product_size: null,
      service_product_unit: ''
    };
  }

  componentDidMount() {
    this._get_Data_location();
    this.getWalletBalance();
    this.getAllCatlog();
    StatusBar.setTranslucent(false);
    setTimeout(function () {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(Colors.branding_color, true);
      }
    }, 3000);
  }



  getWalletBalance = async () => {
    let data = {amount: this.state.amount}
    console.warn(data);
    let responseData = await get_remote_data(constants.api_url + 'App_protected/getUserBalance', JSON.stringify(data));
    console.log(responseData);
    this.setState({balance: responseData.data, amount: '', history: responseData.history});
  }

  getAllCatlog = async () => {
    console.warn(constants.api_url + 'App_protected/get_all_homePageData');

    //console.warn(data);
    let responseData = await get_remote_data_get_req(constants.api_url + 'App_protected/get_all_homePageData');
    console.warn(responseData);
    if (responseData.status === 300) {
      alert(responseData.message);
    } else {
      this.setState({service: responseData.service, banners: responseData.banners});
      //this.setState({service_id: responseData.data[0].id, service_name: responseData.data[0].service_name, quantity_data: responseData.data[0].unit_data});
    }
  };

  _get_Data_location = async () => {
    let locaiton = await AsyncStorage.getItem('location_Data');
    locaiton = JSON.parse(locaiton);
    //console.warn(locaiton);
    if (locaiton){
      //alert(JSON.stringify(locaiton));
      this.setState({location_name: locaiton.location_name});
    }
  };


  open_drower() {
    this.props.navigation.openDrawer();
  }

  navagate_to_page(page_name) {
    if (this.state.location_name === "Not Selected") {
      this.props.navigation.navigate('Search_place')
    } else {
      this.navagation_now();
      this.props.navigation.navigate(page_name)
    }
  }

  navagation_now(id, name){
    if (this.state.location_name === "Not Selected") {
      this.props.navigation.navigate('Search_place')
    } else {
      this.props.navigation.navigate('Products', {
        serviceId: id,
        serviceName: name,
        balance: this.state.balance,
      })
    }
  };

  render() {
    let location = '';
    if (this.state.location_name === "Not Selected") {
      location = 'Select Location';
    }else{
      location = this.state.location_name;
    }

    StatusBar.setBarStyle('light-content', true);

    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(false);
    }

    return (
      <Container style={styles.screenBg}>
        <Header style={[styles.header_style2]}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.open_drower()}>
              <FontAwesome name="bars" size={22} color={Colors.snow} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.walletButton}
                onPress={()=> this.props.navigation.navigate('Wallet')}>
            <FontAwesome name="money" size={17} color={Colors.branding_color2} />
            <FontAwesome
              name="inr"
              size={12}
              color={Colors.branding_color2}
              style={{marginLeft: 5}}
            />
            <Text
              style={{
                marginLeft: 5,
                color: Colors.branding_color2,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              {this.state.balance}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 15}}
                            onPress={()=> this.props.navigation.navigate('SearchPage')}>
            <FontAwesome name="search" size={17} color={Colors.snow} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 15}}>
            <FontAwesome name="bell-o" size={17} color={Colors.snow} />
          </TouchableOpacity>
        </Header>
        <Text style={styles.brandName}>OyeGattu</Text>
        <View style={[styles.container, {paddingTop: 10}]}>
          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.fullWidthView}>
              <TouchableOpacity style={styles.selectLocationButton}
                                onPress={() => this.props.navigation.navigate('Search_place')}>
                <Text style={styles.selectLocationText}>{location}</Text>
                <FontAwesome
                  name="chevron-down"
                  size={17}
                  color={Colors.branding_color2}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>

              <View style={styles.slidesec}>
                {this.state.banners.length > 0 &&
                <Swiper
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={2.5}
                    activeDot={<View style={styles.activeDot}/>}
                    dot={<View style={styles.dot}/>}
                >
                  {this.state.banners && this.state.banners.map((item, index) => {
                    return (
                        <View style={styles.slide} key={index}>
                          <Image source={{uri: item.image}} style={styles.sliderImage}/>
                          <View style={styles.contentStyle}>
                            {
                              /**
                               * <Text style={styles.headertext}>{item.shop_name}</Text>
                               */
                            }
                          </View>
                        </View>
                    );
                  })}
                </Swiper>
                }
              </View>
              {/**
                this.state.banners.length > 0 && this.state.banners.map((item, index) => {
                console.warn(item);
                return(
                    <Image
                        source={{uri: item.image}}
                        style={styles.bannerSize}
                        resizeMode="contain"
                    />
                )
              })
              **/}
              <View style={styles.catSectionMain}>
                <Left>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      color: Colors.branding_color2,
                    }}>
                    Categories
                  </Text>
                </Left>
                <Right>
                  <View>
                    <Text style={{fontSize: 14, color: Colors.color_one}}>
                      Select One
                    </Text>
                  </View>
                </Right>
              </View>
              <View style={styles.catSectionMainWrap}>
                {this.state.service && this.state.service.map((item, index) => {
                  return(
                      <TouchableOpacity style={styles.catBox}
                                        onPress={() => this.navagation_now(item.id, item.service_name)}>
                        <Image
                            source={{uri: item.image}}
                            style={styles.catIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.catHead}>{item.service_name}</Text>
                        <Text style={styles.catCount}>View Products</Text>
                      </TouchableOpacity>
                  )
                })}
              </View>

              {/*<View style={styles.catSectionMain}>
                <Left>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      color: Colors.branding_color2,
                    }}>
                    New Arrivals
                  </Text>
                </Left>
                <Right>
                  <TouchableOpacity>
                    <Text style={{fontSize: 14, color: Colors.color_one}}>
                      SEE ALL
                    </Text>
                  </TouchableOpacity>
                </Right>
              </View>*/}

              {/*<ScrollView
                style={styles.catSectionMain}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.catBoxProduct}>
                  <Image
                    source={Images.productImage}
                    style={styles.catImageProduct}
                    resizeMode="contain"
                  />
                  <Text style={styles.catHeadProduct}>Vegetables</Text>
                  <Text style={styles.catSubProduct}>
                    Organic Green Bell orange
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <FontAwesome name="star" size={17} color={Colors.golden} />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star-o"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                  </View>
                  <View style={styles.catPricingRow}>
                    <Text style={styles.catPriceDiscounted}>₹ 20.12</Text>
                    <Text style={styles.catPrice}>₹ 25.12</Text>
                  </View>
                </View>
                <View style={styles.catBoxProduct}>
                  <Image
                    source={Images.productImage}
                    style={styles.catImageProduct}
                    resizeMode="contain"
                  />
                  <Text style={styles.catHeadProduct}>Vegetables</Text>
                  <Text style={styles.catSubProduct}>
                    Organic Green Bell orange
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <FontAwesome name="star" size={17} color={Colors.golden} />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star-o"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                  </View>
                  <View style={styles.catPricingRow}>
                    <Text style={styles.catPriceDiscounted}>₹ 20.12</Text>
                    <Text style={styles.catPrice}>₹ 25.12</Text>
                  </View>
                </View>
                <View style={styles.catBoxProduct}>
                  <Image
                    source={Images.productImage}
                    style={styles.catImageProduct}
                    resizeMode="contain"
                  />
                  <Text style={styles.catHeadProduct}>Vegetables</Text>
                  <Text style={styles.catSubProduct}>
                    Organic Green Bell orange
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <FontAwesome name="star" size={17} color={Colors.golden} />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                    <FontAwesome
                      name="star-o"
                      size={17}
                      color={Colors.golden}
                      style={{marginLeft: 4}}
                    />
                  </View>
                  <View style={styles.catPricingRow}>
                    <Text style={styles.catPriceDiscounted}>₹ 20.12</Text>
                    <Text style={styles.catPrice}>₹ 25.12</Text>
                  </View>
                </View>
              </ScrollView>*/}
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}
