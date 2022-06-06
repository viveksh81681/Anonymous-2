import React, {Component} from 'react';
import {I18nManager, Image, Platform, StatusBar} from "react-native";

import {Button, Container, Content, Header, Left, Right, Text, View} from 'native-base';
import Foot from "../include/Footer"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Stars from 'react-native-stars';
import {Colors, Images} from '../../Themes/';

import styles from './styles';
import {Arabic, English} from "../../Language";

const headerBG = 'https://previews.123rf.com/images/hstrongart/hstrongart1709/hstrongart170900030/86918331-amazing-sports-drink-ads-liquid-basketball-athlete-jumping-up-and-dunking-a-ball-with-splashing-liqu.jpg';

const cardBgImageOne =
    "https://previews.123rf.com/images/hstrongart/hstrongart1709/hstrongart170900030/86918331-amazing-sports-drink-ads-liquid-basketball-athlete-jumping-up-and-dunking-a-ball-with-splashing-liqu.jpg";
const cardBgImageTwo =
    "https://cdn3.f-cdn.com/contestentries/1076541/2959714/596f22fbe9610_thumb900.jpg";

export default class Cart extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        const store_id = this.props.navigation.getParam('shop_id', 'null');

        this.state = {
            isLoading: true,
            about_data: [],
            shop_id: '',
            gst_number: '',
            user_id: '',
            products_data: [],
            product_added: 0
        };
    }

    componentWillMount() {
        var that = this;
        this.get_navagation_data();
    }

    checkout(total_amount) {
        let item = this.state;
        this.props.navigation.navigate('CheckOut', {
            shop_data: {
                shop_id: item.shop_id,
                gst_number: item.gst_number,
                user_id: item.user_id,
                products_data: this.state.products_data,
                total_amount: total_amount
            }
        });
    };

    get_navagation_data = async () => {
        const navagation_data = this.props.navigation.state.params.shop_data;
        console.warn(navagation_data);
        this.setState({
            shop_id: navagation_data.shop_id,
            gst_number: navagation_data.gst_number,
            user_id: navagation_data.user_id,
            products_data: navagation_data.products_data,
        }, () => {
            //this.shop_detail();
        });
    };

    cart_action(item, action) {
        let id = item.id;
        //console.warn(id);

        let state_product = this.state.products_data;
        let products = [];
        let product_added = 0;
        for (i = 0; i < state_product.length; i++) {
            let state_product_id = state_product[i].id;
            if (id === state_product_id) {
                let local_array = state_product[i];
                let count_cart = (state_product[i].cart) ? state_product[i].cart : 0;
                if (action === "minus") {
                    if (count_cart > 0) {
                        count_cart = count_cart - 1;
                    }
                } else {
                    count_cart = count_cart + 1;
                }

                if (count_cart !== 0) {
                    product_added = product_added + 1;
                }

                local_array["cart"] = count_cart;
                console.warn(local_array);
                products.push(local_array);

            } else {
                console.warn(state_product_id);
                products.push(state_product[i]);
            }
        }
        this.setState({products_data: products});
        this.setState({product_added: product_added});
    };


    _renderRowService() {
        return (
            <View>
                <View style={styles.rowMain}>
                    <Image source={{uri: cardBgImageOne}} style={styles.cardBgImage}/>
                    <View style={styles.cardDetailBg}>
                        <Text numberOfLines={1} style={styles.titleTxt}>Somou Water 200ml*48</Text>
                        <View style={styles.start_position}>
                            <Stars
                                half={true}
                                rating={5}
                                //update={(val)=>{this.setState({stars: val})}}
                                spacing={5}
                                starSize={20}
                                count={5}
                                disabled={true}
                                fullStar={<FontAwesome name="star" size={22} color={Colors.branding_color}/>}
                                emptyStar={<FontAwesome name="star" size={22} color={Colors.snow}/>}
                                halfStar={<FontAwesome name="star" size={22} color={Colors.snow}/>}/>
                        </View>
                        <Text numberOfLines={1} style={styles.descriptionTxt}>
                            by Somou Water
                        </Text>
                        <View style={styles.likeCommentBg}>
                            <Left>
                                <Text numberOfLines={1} style={styles.card_second_fm_text}>
                                    INR 15.00 | 200ML
                                </Text>
                            </Left>
                            <Right/>

                        </View>
                        <View style={styles.likeCommentBg}>
                            <Left style={styles.plus_minus_right}>
                                <Button transparent>
                                    <EvilIcons name="plus" size={37} color={Colors.branding_color}/>
                                </Button>
                                <Text style={styles.card_shop_button}>1</Text>
                                <Button transparent>
                                    <EvilIcons name="plus" size={37} color={Colors.branding_color}/>
                                </Button>
                            </Left>
                            <Right/>
                        </View>
                    </View>
                </View>

                <View style={styles.rowMain}>
                    <Image source={{uri: cardBgImageOne}} style={styles.cardBgImage}/>
                    <View style={styles.cardDetailBg}>
                        <Text numberOfLines={1} style={styles.titleTxt}>Somou Water 200ml*48</Text>
                        <View style={styles.start_position}>
                            <Stars
                                half={true}
                                rating={5}
                                //update={(val)=>{this.setState({stars: val})}}
                                spacing={5}
                                starSize={20}
                                count={4}
                                disabled={true}
                                fullStar={<FontAwesome name="star" size={22} color={Colors.branding_color}/>}
                                emptyStar={<FontAwesome name="star" size={22} color={Colors.snow}/>}
                                halfStar={<FontAwesome name="star" size={22} color={Colors.snow}/>}/>
                        </View>
                        <Text numberOfLines={1} style={styles.descriptionTxt}>
                            by Somou Water
                        </Text>
                        <View style={styles.likeCommentBg}>
                            <Left>
                                <Text numberOfLines={1} style={styles.card_second_fm_text}>
                                    INR 15.00 | 200ML
                                </Text>
                            </Left>
                            <Right/>

                        </View>
                        <View style={styles.likeCommentBg}>
                            <Left style={styles.plus_minus_right}>
                                <Button transparent>
                                    <EvilIcons name="plus" size={37} color={Colors.branding_color}/>
                                </Button>
                                <Text style={styles.card_shop_button}>1</Text>
                                <Button transparent>
                                    <EvilIcons name="plus" size={37} color={Colors.branding_color}/>
                                </Button>
                            </Left>
                            <Right/>
                        </View>
                    </View>
                </View>

                <View style={styles.rowMain}>
                    <Image source={{uri: cardBgImageOne}} style={styles.cardBgImage}/>
                    <View style={styles.cardDetailBg}>
                        <Text numberOfLines={1} style={styles.titleTxt}>Somou Water 200ml*48</Text>
                        <View style={styles.start_position}>
                            <Stars
                                half={true}
                                rating={5}
                                //update={(val)=>{this.setState({stars: val})}}
                                spacing={5}
                                starSize={20}
                                count={5}
                                disabled={true}
                                fullStar={<FontAwesome name="star" size={22} color={Colors.branding_color}/>}
                                emptyStar={<FontAwesome name="star-o" size={22} color={Colors.branding_color}/>}
                                halfStar={<FontAwesome name="star-half-empty" size={22}
                                                       color={Colors.branding_color}/>}/>
                        </View>
                        <Text numberOfLines={1} style={styles.descriptionTxt}>
                            by Somou Water
                        </Text>
                        <View style={styles.likeCommentBg}>
                            <Left>
                                <Text numberOfLines={1} style={styles.card_second_fm_text}>
                                    INR 15.00 | 200ML
                                </Text>
                            </Left>
                            <Right/>

                        </View>
                        <View style={styles.likeCommentBg}>
                            <Left style={styles.plus_minus_right}>
                                <Button transparent>
                                    <EvilIcons name="plus" size={37} color={Colors.branding_color}/>
                                </Button>
                                <Text style={styles.card_shop_button}>1</Text>
                                <Button transparent>
                                    <EvilIcons name="plus" size={37} color={Colors.branding_color}/>
                                </Button>
                            </Left>
                            <Right/>
                        </View>
                    </View>
                </View>

                <View style={styles.rowMain}>
                    <Image source={{uri: cardBgImageOne}} style={styles.cardBgImage}/>
                    <View style={styles.cardDetailBg}>
                        <Text numberOfLines={1} style={styles.titleTxt}>Somou Water 200ml*48</Text>
                        <View style={styles.start_position}>
                            <Stars
                                half={true}
                                rating={5}
                                //update={(val)=>{this.setState({stars: val})}}
                                spacing={5}
                                starSize={20}
                                count={5}
                                disabled={true}
                                fullStar={<FontAwesome name="star" size={22} color={Colors.branding_color}/>}
                                emptyStar={<FontAwesome name="star-o" size={22} color={Colors.branding_color}/>}
                                halfStar={<FontAwesome name="star-half-empty" size={22}
                                                       color={Colors.branding_color}/>}/>
                        </View>
                        <Text numberOfLines={1} style={styles.descriptionTxt}>
                            by Somou Water
                        </Text>
                        <View style={styles.likeCommentBg}>
                            <Left>
                                <Text numberOfLines={1} style={styles.card_second_fm_text}>
                                    INR 15.00 | 200ML
                                </Text>
                            </Left>
                            <Right/>

                        </View>
                        <View style={styles.likeCommentBg}>
                            <Left style={styles.plus_minus_right}>
                                <Button transparent>
                                    <EvilIcons name="plus" size={37} color={Colors.branding_color}/>
                                </Button>
                                <Text style={styles.card_shop_button}>1</Text>
                                <Button transparent>
                                    <EvilIcons name="plus" size={37} color={Colors.branding_color}/>
                                </Button>
                            </Left>
                            <Right/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }


    render() {
        let that = this;
        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }

        let total_amount = 0;

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
                            <Text style={styles.header_title}>{lang.cart}</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>

                <Content>


                    {this.state.products_data && this.state.products_data.map((item, index) => {
                        let price = parseInt(item.price);
                        let discount = item.discount;
                        let discount_amount = parseInt(item.discount_amount);
                        let tax_type = item.tax_type;
                        let tax_amount = parseInt(item.tax_amount);
                        if (tax_type === "exclude") {
                            //console.warn('price ' + price);
                            //console.warn('tax amount ' + tax_amount);
                            let tax_price = price * tax_amount / 100;
                            //console.warn('tax price ' + tax_price);
                            price = parseInt(tax_price) + parseInt(price);
                            //console.warn('final price ' + price);

                        }
                        if (discount === "yes") {
                            let discount_price = price * discount_amount / 100;
                            price = price - discount_price;
                        }else {
                            price = price * item.cart;
                        }

                        price = price * item.cart;

                        if (!isNaN(price)){
                            total_amount = total_amount + price;
                        }
                        console.warn('price' + price);



                        if (item.cart) {
                            return (
                                <View style={styles.cart_card}>
                                    <View style={styles.top_row}>
                                        <Left>
                                            <Text
                                                style={styles.product_title}>{item.unit_value + ' ' + item.unit + ' ' + item.product_name}</Text>
                                        </Left>
                                        <Right>
                                            <View style={styles.likeCommentBg}>
                                                <Button transparent
                                                        onPress={() => this.cart_action(item, 'minus')}>
                                                    <Image source={Images.minus_count}/>
                                                </Button>
                                                <Text style={styles.card_shop_button}>
                                                    {item.cart ? item.cart : 0}
                                                </Text>
                                                <Button transparent
                                                        onPress={() => this.cart_action(item, 'plus')}>
                                                    <Image source={Images.plus_count}/>
                                                </Button>
                                            </View>
                                        </Right>
                                    </View>
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
                                    <Text style={styles.total_amount}>{lang.total_amount} : ₹ {price}</Text>
                                </View>
                            );
                        }

                    })}


                    <View style={styles.final_amount_card}>

                        {/**
                         <View style={styles.top_row}>
                         <Left>
                         <Text style={styles.spacel_instruction}>Add spacial instructions</Text>
                         </Left>
                         <Right>
                         <Image source={Images.plus_count}/>
                         </Right>
                         </View>
                         **/}

                        <View style={styles.top_row}>
                            <Left>
                                <Text style={styles.payment_instruction}>{lang.total}</Text>
                            </Left>
                            <Right>
                                <Text style={styles.product_title}>₹ {(total_amount).toFixed(2)}</Text>
                            </Right>
                        </View>

                        <View style={styles.top_row}>
                            <Left>
                                <Text style={styles.payment_instruction}>{lang.delivery_charges}</Text>
                            </Left>
                            <Right>
                                <Text style={styles.product_title}>₹ 0</Text>
                            </Right>
                        </View>
                        <View style={styles.top_row}>
                            <Left>
                                <Text style={styles.payment_instruction}>{lang.grand_total}</Text>
                            </Left>
                            <Right>
                                <Text style={styles.product_title}>₹ {(total_amount).toFixed(2)}</Text>
                            </Right>
                        </View>
                    </View>
                </Content>
                <View style={styles.root}>
                    <Left style={styles.cart_left}>
                        {/**
                         <Text style={styles.productsAdded}>Grand Total </Text>
                         **/}
                        <Text style={styles.viewCart}>₹ {(total_amount).toFixed(2)}</Text>
                    </Left>
                    <Right style={styles.cart_right}>
                        <Button transparent
                                onPress={() => this.checkout(total_amount)}>
                            <Text style={styles.viewCart}>{lang.payment_method}</Text>
                            <Image source={Images.froward_white} style={styles.backWhite11}/>
                        </Button>
                    </Right>
                </View>
                {/*<Foot/>*/}
            </Container>
        );
    }
}
