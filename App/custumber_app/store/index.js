import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  I18nManager,
  ScrollView,
  ListView,
  Easing,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';

import {
  Container,
  Header,
  Button,
  Body,
  Footer,
  View,
  H3,
  Content,
  Right,
  Left,
  List,
  ListItem,
  Text,
} from 'native-base';
import CheckBox from 'react-native-check-box';
import Foot from '../include/Footer';
import Stars from 'react-native-stars';
import {Images, Colors, Metrics} from '../../Themes/';

import styles from './styles';

const headerBG = 'https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/adc3928a5217adbc990ac62df935b5e8.jpg';

/**
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
 **/
//ScrollableTabView = require('react-native-scrollable-tab-view');
import {Fonts} from '../../Themes';
import {Arabic, English} from '../../Language';
import {get_remote_data} from '../function/export_fn';
import constants from '../function/Constant';

export default class Store extends Component {
  constructor(props) {
    super(props);

    const {navigation} = this.props;

    this.state = {
      left: false,
      body: true,
      right: false,
      isChecked: false,
      shop_id: 1,
      gst_number: '',
      shop_name: '',
      description: '',
      service_id: '',
      service_product_size: '',
      service_product_unit: '',
      isLoading: true,
      about_data: [],
      reviews: [],
      products: [],
      product_added: 0,
    };
  }

  componentDidMount() {
    this.get_navagation_data();
    //this.shop_detail();
  }

  get_navagation_data = async () => {
    const navagation_data = this.props.navigation.state.params.shop_data;

    console.warn(navagation_data);

    this.setState(
      {
        service_id: navagation_data.service_id,

        /*gst_number: navagation_data.gst_number,
        user_id: navagation_data.user_id,
        service_product_size: navagation_data.service_product_size,
        service_product_unit: navagation_data.service_product_unit,
        shop_name: navagation_data.shop_name,
        description: navagation_data.description,*/
      },
      () => {
        this.shop_detail();
      },
    );
  };

  shop_detail = async () => {
    console.warn(constants.api_url + 'App_protected/getsingleshop_post');

    let data = new FormData();
    data.append('id', this.state.shop_id);
    data.append('user_id', this.state.user_id);
    data.append('service_id', this.state.service_id);
    //data.append("size", this.state.service_product_size);
    //data.append("unit", this.state.service_product_unit);

    let responseData = await get_remote_data(
      constants.api_url + 'App_protected/getsingleshop_post',
      data,
    );
    console.warn(responseData);
    if (responseData.status === 200) {
      this.setState({
        reviews: responseData.data.review,
        products: responseData.data.products,
      });
    } else {
      alert(responseData.message);
    }
  };

  cart_action(item, action) {
    let id = item.id;
    //console.warn(id);

    let state_product = this.state.products;
    let products = [];
    let product_added = 0;
    for (let i = 0; i < state_product.length; i++) {
      let state_product_id = state_product[i].id;
      if (id === state_product_id) {
        let local_array = state_product[i];
        let count_cart = state_product[i].cart ? state_product[i].cart : 0;
        if (action === 'minus') {
          if (count_cart > 0) {
            count_cart = count_cart - 1;
          }
        } else {
          count_cart = count_cart + 1;
        }

        if (count_cart !== 0) {
          product_added = product_added + 1;
        }

        local_array.cart = count_cart;
        console.warn(local_array);
        products.push(local_array);
      } else {
        console.warn(state_product_id);
        products.push(state_product[i]);
      }
    }
    this.setState({products: products});
    this.setState({product_added: product_added});
  }

  view_cart() {
    let item = this.state;
    this.props.navigation.navigate('Cart', {
      shop_data: {
        shop_id: item.shop_id,
        gst_number: item.gst_number,
        user_id: item.user_id,
        products_data: this.state.products,
      },
    });
  }

  _renderRowService() {
    let lang = null;
    if (I18nManager.isRTL === true) {
      lang = Arabic;
    } else {
      lang = English;
    }
    if (this.state.body) {
      return (
        <View>
          {this.state.products &&
            this.state.products.map((item, index) => {
              let price = item.price;
              let discount = item.discount;
              let discount_amount = item.discount_amount;
              let tax_type = item.tax_type;
              let tax_amount = item.tax_amount;
              if (tax_type === 'exclude') {
                console.warn('price ' + price);
                console.warn('tax amount ' + tax_amount);
                let tax_price = (price * tax_amount) / 100;
                console.warn('tax price ' + tax_price);
                price = parseInt(tax_price) + parseInt(price);
                console.warn('final price ' + price);
              }

              if (discount === 'yes') {
                let discount_price = (price * discount_amount) / 100;
                let final_amount = price - discount_price;
                return (
                  <View style={styles.rowMain1}>
                    <View>
                      <View style={styles.sale_label}>
                        <Text style={styles.sale_text}>
                          {lang.sale} {discount_amount}%
                        </Text>
                      </View>
                      <Image
                        source={{uri: item.image}}
                        style={styles.cardBgImage}
                      />
                    </View>
                    <View style={styles.cardDetailBg}>
                      <Text numberOfLines={1} style={styles.titleTxt}>
                        {item.product_name}
                      </Text>
                      <Text numberOfLines={1} style={styles.titleTxt2}>
                        {item.unit_value +
                        ' ' +
                        item.unit}
                      </Text>

                      {/**
                                         <View style={styles.chboxConatiner}>
                                         <CheckBox
                                         style={styles.chboxRemember}
                                         onClick={() => {
                                                this.setState({
                                                    isChecked: !this.state.isChecked
                                                });
                                            }}
                                         isChecked={this.state.isChecked}
                                         checkedImage={
                                                <MaterialIcons
                                                    name="check-box"
                                                    size={25}
                                                    color={Colors.branding_color}
                                                />
                                            }
                                         unCheckedImage={
                                                <MaterialIcons
                                                    name="check-box-outline-blank"
                                                    size={25}
                                                    color={Colors.branding_color}
                                                />
                                            }
                                         />

                                         <Text style={styles.textRememberMe}>Order 1000 for custom logo</Text>
                                         </View>
                                         **/}

                      <View style={styles.likeCommentBg}>
                        <View style={styles.plus_minus_right}>
                          <Button
                            transparent
                            onPress={() => this.cart_action(item, 'minus')}>
                            <Image source={Images.minus_count} />
                          </Button>
                          <Text style={styles.card_shop_button}>
                            {item.cart ? item.cart : 0}
                          </Text>
                          <Button
                            transparent
                            onPress={() => this.cart_action(item, 'plus')}>
                            <Image source={Images.plus_count} />
                          </Button>
                        </View>
                      </View>
                    </View>
                    <ImageBackground
                      style={styles.price_bg_tag}
                      imageStyle={
                        I18nManager.isRTL
                          ? styles.rtl_image_flip
                          : styles.style_flip_null
                      }
                      source={Images.price_bg}>
                      <Text style={styles.price_text}>₹ {final_amount}</Text>
                      <Text style={styles.price_text2}>₹ {price}</Text>
                    </ImageBackground>
                  </View>
                );
              } else {
                return (
                  <View style={styles.rowMain}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.cardBgImage}
                    />
                    <View style={styles.cardDetailBg}>
                      <Text numberOfLines={1} style={styles.titleTxt}>
                        {item.unit_value +
                          ' ' +
                          item.unit +
                          ' ' +
                          item.product_name}
                      </Text>

                      {/**
                                         <View style={styles.chboxConatiner}>
                                         <CheckBox
                                         style={styles.chboxRemember}
                                         onClick={() => {
                                                this.setState({
                                                    isChecked: !this.state.isChecked
                                                });
                                            }}
                                         isChecked={this.state.isChecked}
                                         checkedImage={
                                                <MaterialIcons
                                                    name="check-box"
                                                    size={25}
                                                    color={Colors.branding_color}
                                                />
                                            }
                                         unCheckedImage={
                                                <MaterialIcons
                                                    name="check-box-outline-blank"
                                                    size={25}
                                                    color={Colors.branding_color}
                                                />
                                            }
                                         />

                                         <Text style={styles.textRememberMe}>Order 1000 for custom logo</Text>
                                         </View>
                                         **/}

                      <View style={styles.likeCommentBg}>
                        <View style={styles.plus_minus_right}>
                          <Button
                            transparent
                            onPress={() => this.cart_action(item, 'minus')}>
                            <Image source={Images.minus_count} />
                          </Button>
                          <Text style={styles.card_shop_button}>
                            {item.cart ? item.cart : 0}
                          </Text>
                          <Button
                            transparent
                            onPress={() => this.cart_action(item, 'plus')}>
                            <Image source={Images.plus_count} />
                          </Button>
                        </View>
                      </View>
                    </View>
                    <ImageBackground
                      style={styles.price_bg_tag}
                      imageStyle={
                        I18nManager.isRTL
                          ? styles.rtl_image_flip
                          : styles.style_flip_null
                      }
                      source={Images.price_bg}>
                      <Text style={styles.price_text}>{price} INR</Text>
                    </ImageBackground>
                  </View>
                );
              }
            })}
          <View style={styles.margin_bottom} />
        </View>
      );
    }
  }

  _render_about_us() {
    console.warn('hello');
    if (this.state.left) {
      return (
        <View style={styles.padding_left_right}>
          <Text style={styles.dsc_text}>{this.state.description}</Text>
        </View>
      );
    }
  }

  _render_review() {
    var that = this;
    if (this.state.right) {
      return (
        <View>
          {this.state.reviews &&
            this.state.reviews.map((item, index) => {
              return (
                <View style={styles.reviews_card}>
                  <Image
                    source={{uri: item.profile_pic}}
                    style={styles.ReviewsImg}
                  />
                  <View>
                    <View>
                      <Text style={styles.ReviewsName}>
                        {item.firstname + ' ' + item.lastname}
                      </Text>
                      <Text style={styles.ReviewDes}>{item.comments}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          ...styles.start_position,
                          marginTop: Metrics.HEIGHT * 0.02,
                          marginLeft: Metrics.HEIGHT * 0.02,
                        }}>
                        <Stars
                          half={true}
                          rating={parseInt(item.rating)}
                          //update={(val)=>{this.setState({stars: val})}}
                          spacing={6}
                          starSize={16}
                          count={5}
                          disabled={true}
                          fullStar={Images.star_active}
                          emptyStar={Images.inactive_star}
                          halfStar={Images.starHalf1}
                        />
                      </View>
                      {/**
                                         <Text style={styles.ReviewsHours}>2 hrs ago</Text>
                                         **/}
                    </View>
                  </View>
                </View>
              );
            })}
        </View>
      );
    }
  }

  term_condition(value) {
    console.warn(value);
    if (value === 'left') {
      this.setState({left: true, body: false, right: false});
    } else if (value === 'body') {
      this.setState({left: false, body: true, right: false});
    } else {
      this.setState({left: false, body: false, right: true});
    }
  }

  render() {
    let that = this;
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
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Image source={Images.back_white} />
              <Text style={styles.header_title}>{this.state.shop_name}</Text>
            </Button>
          </Left>
          <Right />
        </Header>

        <Content>
          <Image source={{uri: headerBG}} style={styles.headerImageBG} />
          <View style={styles.bottom_txt_list}>
            <View style={styles.top_tab}>
              {this.state.left ? (
                <Left>
                  <TouchableOpacity onPress={() => this.term_condition('left')}>
                    <Text style={styles.tab_text}>{lang.about}</Text>
                    <View style={styles.border_tab} />
                  </TouchableOpacity>
                </Left>
              ) : (
                <Left>
                  <TouchableOpacity onPress={() => this.term_condition('left')}>
                    <Text style={styles.tab_text_unacitive}>{lang.about}</Text>
                    <View style={styles.border_tab_unactive} />
                  </TouchableOpacity>
                </Left>
              )}

              {this.state.body ? (
                <Body>
                  <TouchableOpacity onPress={() => this.term_condition('body')}>
                    <Text style={styles.tab_text}>{lang.products}</Text>
                    <View style={styles.border_tab} />
                  </TouchableOpacity>
                </Body>
              ) : (
                <Body>
                  <TouchableOpacity onPress={() => this.term_condition('body')}>
                    <Text style={styles.tab_text_unacitive}>
                      {lang.products}
                    </Text>
                    <View style={styles.border_tab_unactive} />
                  </TouchableOpacity>
                </Body>
              )}

              {this.state.right ? (
                <Right>
                  <TouchableOpacity
                    onPress={() => this.term_condition('right')}>
                    <Text style={styles.tab_text}>{lang.reviews}</Text>
                    <View style={styles.border_tab} />
                  </TouchableOpacity>
                </Right>
              ) : (
                <Right>
                  <TouchableOpacity
                    onPress={() => this.term_condition('right')}>
                    <Text style={styles.tab_text_unacitive}>
                      {lang.reviews}
                    </Text>
                    <View style={styles.border_tab_unactive} />
                  </TouchableOpacity>
                </Right>
              )}
            </View>

            {this._render_about_us()}

            {this._renderRowService()}

            {this._render_review()}
          </View>
        </Content>
        {this.state.product_added !== 0 && (
          <View style={styles.root}>
            <Left style={styles.cart_left}>
              <Image source={Images.orders_icon_white} />
              <Text style={styles.productsAdded}>
                {this.state.product_added} {lang.products_added}
              </Text>
            </Left>
            <Right style={styles.cart_right}>
              <Button transparent onPress={() => this.view_cart()}>
                <Text style={styles.viewCart}>{lang.view_cart}</Text>
                <Image
                  source={Images.froward_white}
                  style={styles.backWhite11}
                />
              </Button>
            </Right>
          </View>
        )}
        <Foot />
      </Container>
    );
  }
}
