import React, {Component} from 'react';
import {I18nManager, Image, Platform, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import {Container, Content, Header, Text, Title, Input, Item} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../Themes';
// Screen Styles
import styles from '../../Style/styles';
import constants from "../function/Constant";
import {get_remote_data} from '../function/export_fn';
import {Arabic, English} from "../../Language";
import Fonts from "../../Themes/Fonts";

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: [],
            login_count: 0,
            isChecked: false,
            cart: false,
            balance: 0,
            mobile: '',
            shop_id: 57,
            user_id: 1,
            serviceId: '',
            subServiceId: '',
            search: '',
            serviceName: '',
            gst_number: '1234g',
            products: [],
            subServices: [],
            product_added: 0,
        };
    }

    componentDidMount() {
        //const balance = this.props.navigation.state.params.balance;
        this.setState({serviceId: '', serviceName: '', balance: ''}, () => {
            //this.shop_detail();
        })

        StatusBar.setTranslucent(false);
        setTimeout(function () {
            if (Platform.OS === 'android') {
                StatusBar.setBackgroundColor(Colors.branding_color, true);
            }
        }, 3000);
    }

    serviceUpdate(id){
        this.setState({subServiceId: id}, ()=> {
            this.shop_detail();
        });
    }

    shop_detail = async () => {
        console.warn(constants.api_url + 'App_protected/getsingleshop_post');

        let data = new FormData();
        data.append('id', this.state.shop_id);
        data.append('user_id', this.state.user_id);
        data.append('service_id', this.state.serviceId);
        data.append('subServiceId', this.state.subServiceId);
        data.append('search', this.state.search);
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
                subServices: responseData.data.subServices,
                gst_number: responseData.data.gst_number,
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
        let product_added = this.state.product_added;
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
                    product_added = parseInt(product_added) + 1;
                }

                local_array.cart = count_cart;
                console.warn(local_array);
                products.push(local_array);
            } else {
                console.warn(state_product_id);
                products.push(state_product[i]);
            }
        }
        this.setState({products: products, product_added: product_added});
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
        if (this.state.products.length > 0) {
            return (
                <View>
                    {this.state.products.length > 0 &&
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
                        let discount_price = (price * discount_amount) / 100;
                        let final_amount = price - discount_price;

                        return (
                            <View style={styles.productCart}>
                                <Image
                                    source={{uri: item.image}}
                                    style={{height: 100, width: 100}}
                                    resizeMode="contain"
                                />
                                <View style={styles.productDscSection}>
                                    <Text style={styles.productTitle}>{item.product_name}</Text>
                                    <Text numberOfLines={1} style={styles.cardQuantity}>
                                        {item.unit_value +
                                        ' ' +
                                        item.unit}
                                    </Text>
                                    <Text numberOfLines={1} style={[styles.cardQuantity, {color: 'red'}]}>
                                        Discount: {discount_amount}%
                                    </Text>
                                    {
                                        item.stock > 0 ?
                                            (
                                                <View style={styles.plusMinusContainer}>
                                                    <TouchableOpacity style={styles.plusMinusSize}
                                                                      onPress={() => this.cart_action(item, 'minus')}>
                                                        <FontAwesome
                                                            name="minus"
                                                            size={13}
                                                            color={Colors.second_color}
                                                        />
                                                    </TouchableOpacity>
                                                    <Text>{item.cart ? item.cart : 0}</Text>
                                                    <TouchableOpacity style={styles.plusMinusSize}
                                                                      onPress={() => this.cart_action(item, 'plus')}>
                                                        <FontAwesome
                                                            name="plus"
                                                            size={13}
                                                            color={Colors.second_color}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            ):(
                                                <Text numberOfLines={1} style={[styles.cardQuantity,{color: 'red'}]}>
                                                    Out of stock
                                                </Text>
                                            )
                                    }
                                </View>
                                <View style={{marginLeft: 'auto',}}>
                                    <Text style={discount == "yes" ? styles.cardPriceCross : styles.cardPrice}>Price:
                                        ₹ {price}</Text>
                                    {
                                        discount == "yes" &&
                                        <Text style={styles.cardPrice}>₹ {final_amount}</Text>
                                    }
                                </View>
                            </View>
                        )
                    })}
                </View>
            );
        }
    }

    searchData(search){
        this.setState({search: search}, ()=> {
            this.shop_detail();
        });
    }

    render() {
        StatusBar.setBarStyle('light-content', true);

        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(false);
        }

        return (
            <Container style={styles.screenBg}>
                <Header style={[styles.header_style2]}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <FontAwesome name="chevron-left" size={18} color={Colors.snow}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Item underline style={styles.itememail}>
                            <Input
                                value={this.state.search}
                                placeholder={'Search'}
                                placeholderTextColor={Colors.darktext}
                                keyboardType={'email-address'}
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                multiline={false}
                                style={{width: '100%', paddingHorizontal: 10}}
                                onChangeText={(search) => this.searchData(search)}
                            />
                        </Item>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}></View>
                </Header>
                <Container
                    style={[
                        this.state.product_added !== 0
                            ? styles.container_active
                            : styles.container_unactive,
                    ]}>
                    <Content showsVerticalScrollIndicator={false}>
                        <View style={styles.fullWidthView}>
                            <View style={styles.productCart}>
                                <Text style={styles.titleOfTagLine}>
                                    {this.state.products ? this.state.products.length : 0} product in this category
                                </Text>

                                {/*<View
                                    style={[
                                        styles.walletButton,
                                        {
                                            marginLeft: 'auto',
                                            backgroundColor: Colors.branding_color,
                                        },
                                    ]}>
                                    <FontAwesome name="money" size={17} color={Colors.snow}/>
                                    <FontAwesome
                                        name="inr"
                                        size={12}
                                        color={Colors.snow}
                                        style={{marginLeft: 5}}
                                    />
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: Colors.snow,
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                        }}>
                                        {this.state.balance}
                                    </Text>
                                </View>*/}
                            </View>

                            {this._renderRowService()}

                        </View>
                    </Content>
                </Container>
                {this.state.product_added !== 0 && (
                    <View style={styles.footer_style_file}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <FontAwesome name="shopping-cart" size={24} color={Colors.snow}/>
                            <Text style={styles.productAddedText}>{this.state.product_added} Products Added</Text>
                        </View>
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center'}}
                            onPress={() => this.view_cart()}>
                            <Text style={styles.productAddedText2}>View Cart</Text>
                            <FontAwesome name="angle-right" size={24} color={Colors.snow}/>
                        </TouchableOpacity>
                    </View>
                )}
            </Container>
        );
    }
}
