import React, {PropTypes, Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Platform,
    StatusBar,
    BackHandler,
    I18nManager,
    AsyncStorage
} from 'react-native';
import {
    Container,
    Button,
    Right,
    Content,
    Header,
    Left,
    Body,
    Segment
} from 'native-base';
import {Images, Colors, Metrics} from '../../Themes/';
import Stars from 'react-native-stars';
import styles from './styles';
import Foot from "../include/Footer"
import {get_remote_data, get_remote_data_get_req} from "../function/export_fn";
import constants from "../function/Constant";
import {Arabic, English} from "../../Language";

export default class Order_history extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
            segment: 1,
            location_name: 'Not Selected',
            orders: []
        };
    }

    componentDidMount() {
        this.get_data();
        this._get_Data_location();
    }

    _get_Data_location = async () => {
        let locaiton = await AsyncStorage.getItem('location_Data');
        locaiton = JSON.parse(locaiton);
        //console.warn(locaiton);
        this.setState({location_name: locaiton.location_name});
    };

    get_data = async () => {
        console.warn(constants.api_url + 'App_protected/order_history');

        //console.warn(data);
        let responseData = await get_remote_data_get_req(constants.api_url + 'App_protected/order_history');
        console.warn(responseData);
        console.log(responseData);
        if (responseData.status === 300) {
            alert(responseData.message);
        } else {
            this.setState({orders: responseData.data});
        }
    };

    order_track = async (id) => {
        console.warn(id);
        let data = new FormData();
        data.append("route_id", id);

        let responseData = await get_remote_data(constants.api_url + 'App_protected/order_detail', data);
        console.warn(responseData);
        if (responseData.status === 200) {
            if (responseData.data['job_status'] === "true") {
                this.props.navigation.navigate('Delivery_location', {
                    route_id: id
                })
            } else {
                alert('Order confirmed but not ready for delivery');
            }
        } else {
            alert(responseData.message);
        }
    };

    give_feedback = async (item) => {
        this.props.navigation.navigate('Order_status', {
            order_data: item
        })
    };


    _renderActiveComponent = () => {
        const {segment} = this.state;

        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }

        // Login
        if (segment === 1) {
            return this.state.orders && this.state.orders.map((item, index) => {
                if (item.order_data.status === "c") {
                    let total_amount = 0;
                    return (
                        <View style={styles.card_view}>
                            <Text style={styles.order_id}>
                                {lang.order_id} : {item.order_data.invoice_number}
                            </Text>
                            <View style={styles.devider_row}/>

                            <View style={styles.rowMain}>
                                <Image source={{uri: item.gst_detail.image}} style={styles.cardBgImage}/>

                                <View style={styles.cardDetailBg}>
                                    <Text numberOfLines={1} style={styles.titleTxt}>{item.gst_detail.gst_name}</Text>
                                    <View style={styles.likeCommentBg}>

                                        <View style={styles.start_position}>
                                            <Stars
                                                half={true}
                                                rating={item.gst_detail.rating_count}
                                                //update={(val)=>{this.setState({stars: val})}}
                                                spacing={8}
                                                starSize={20}
                                                count={5}
                                                disabled={true}
                                                fullStar={<Image source={Images.star_active}/>}
                                                emptyStar={<Image source={Images.inactive_star}/>}
                                                halfStar={Images.starHalf1}/>
                                        </View>
                                        {/**
                                            <Button transparent>
                                                <Text style={styles.card_shop_button}>{lang.view_details}</Text>
                                            </Button>
                                        **/}
                                    </View>
                                </View>
                            </View>
                            {item.ordered_product && item.ordered_product.map((product, index) => {
                                console.log({product: product});
                                let price = product.product_price;
                                let discount_amount = product.discount;
                                let discount_price = price * discount_amount / 100;
                                console.warn(discount_price);
                                price = price - discount_price;

                                let total_charges = price * product.quantity;
                                total_amount = total_amount + total_charges;
                                return (
                                    <View style={styles.rowMain}>
                                        <Image source={{uri: product.image}} style={styles.cardBgImage}/>

                                        <View style={styles.cardDetailBg}>
                                            <Text numberOfLines={1}
                                                  style={styles.titleTxt}>200mL {product.product_name}</Text>
                                            <View style={styles.likeCommentBg}>
                                                <Text style={styles.product_margin}>{total_charges} INR
                                                    . {product.quantity} {product.product_type} {lang.ordered}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}

                            <View style={styles.amount_style}>
                                <View>
                                    <Text style={styles.amount_paid}>Amount Paid : {total_amount} INR</Text>
                                </View>
                                {item.order_data.route_id
                                    ? (
                                        <Right>
                                            <Button transparent
                                                    onPress={() => this.order_track(item.order_data.route_id)}>
                                                <Text style={styles.track_order}>{lang.track_order}</Text>
                                            </Button>
                                        </Right>
                                    )
                                    : <Right/>
                                }
                            </View>
                        </View>
                    );
                }

            })
        } else {
            return this.state.orders && this.state.orders.map((item, index) => {
                if (item.order_data.status === "d") {
                    let total_amount = 0;
                    return (
                        <View style={styles.card_view}>
                            <Text style={styles.order_id}>
                                {lang.order_id} : {item.order_data.invoice_number}
                            </Text>
                            <View style={styles.devider_row}/>

                            <View style={styles.rowMain}>
                                <Image source={{uri: item.gst_detail.image}} style={styles.cardBgImage}/>

                                <View style={styles.cardDetailBg}>
                                    <Text numberOfLines={1} style={styles.titleTxt}>{item.gst_detail.gst_name}</Text>
                                    <View style={styles.likeCommentBg}>

                                        <View style={styles.start_position}>
                                            <Stars
                                                half={true}
                                                rating={item.gst_detail.rating_count}
                                                //update={(val)=>{this.setState({stars: val})}}
                                                spacing={8}
                                                starSize={20}
                                                count={5}
                                                disabled={true}
                                                fullStar={<Image source={Images.star_active}/>}
                                                emptyStar={<Image source={Images.inactive_star}/>}
                                                halfStar={Images.starHalf1}/>
                                        </View>
                                        <Button transparent>
                                            <Text style={styles.card_shop_button}>{lang.view_details}</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                            {item.ordered_product && item.ordered_product.map((product, index) => {
                                let price = product.product_price;
                                let discount_amount = product.discount;
                                let discount_price = price * discount_amount / 100;
                                price = price - discount_price;

                                let total_charges = price * product.quantity;
                                total_amount = total_amount + total_charges;
                                return (
                                    <View style={styles.rowMain}>
                                        <Image source={{uri: product.image}} style={styles.cardBgImage}/>

                                        <View style={styles.cardDetailBg}>
                                            <Text numberOfLines={1}
                                                  style={styles.titleTxt}>{product.product_name}</Text>
                                            <View style={styles.likeCommentBg}>
                                                <Text style={styles.product_margin}>{total_charges} INR
                                                    . {product.quantity} {product.product_type} {lang.ordered}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}

                            <View style={styles.amount_style}>
                                <View>
                                    <Text style={styles.amount_paid}>{lang.amount_paid} : {total_amount} INR</Text>
                                </View>

                                <Right>
                                    <Button transparent
                                            onPress={() => this.give_feedback(item)}>
                                        <Text style={styles.track_order}>{lang.give_feedback}</Text>
                                    </Button>
                                </Right>
                            </View>
                        </View>
                    );
                }

            })
        }

        /**
         if (segment === 2) {
            return (
                <View>
                    <View style={styles.card_view}>
                        <Text style={styles.order_id}>
                            Order ID : 2023
                        </Text>
                        <View style={styles.devider_row}/>

                        <View style={styles.rowMain}>
                            <Image source={Images.dala} style={styles.cardBgImage}/>

                            <View style={styles.cardDetailBg}>
                                <Text numberOfLines={1} style={styles.titleTxt}>Dala Water</Text>
                                <View style={styles.likeCommentBg}>

                                    <View style={styles.start_position}>
                                        <Stars
                                            half={true}
                                            rating={4}
                                            //update={(val)=>{this.setState({stars: val})}}
                                            spacing={8}
                                            starSize={20}
                                            count={5}
                                            disabled={true}
                                            fullStar={<Image source={Images.star_active}/>}
                                            emptyStar={<Image source={Images.inactive_star}/>}
                                            halfStar={Images.starHalf1}/>
                                    </View>
                                    <Button transparent>
                                        <Text style={styles.card_shop_button}>View Detail</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rowMain}>
                            <Image source={Images.dala} style={styles.cardBgImage}/>

                            <View style={styles.cardDetailBg}>
                                <Text numberOfLines={1} style={styles.titleTxt}>200mL Plain water</Text>
                                <View style={styles.likeCommentBg}>
                                    <Text style={styles.product_margin}>20 INR . 20 Bottles Ordered</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.amount_style}>
                            <View>
                                <Text style={styles.amount_paid}>Amount Paid : 2903 INR</Text>
                            </View>
                            <Right>
                                <Button transparent
                                        onPress={() => this.props.navigation.navigate('Order_status')}>
                                    <Text style={styles.track_order}>Track order</Text>
                                </Button>
                            </Right>
                        </View>
                    </View>

                    <View style={styles.card_view}>
                        <Text style={styles.order_id}>
                            Order ID : 2023
                        </Text>
                        <View style={styles.devider_row}/>

                        <View style={styles.rowMain}>
                            <Image source={Images.dala} style={styles.cardBgImage}/>

                            <View style={styles.cardDetailBg}>
                                <Text numberOfLines={1} style={styles.titleTxt}>Dala Water</Text>
                                <View style={styles.likeCommentBg}>

                                    <View style={styles.start_position}>
                                        <Stars
                                            half={true}
                                            rating={4}
                                            //update={(val)=>{this.setState({stars: val})}}
                                            spacing={8}
                                            starSize={20}
                                            count={5}
                                            disabled={true}
                                            fullStar={<Image source={Images.star_active}/>}
                                            emptyStar={<Image source={Images.inactive_star}/>}
                                            halfStar={Images.starHalf1}/>
                                    </View>
                                    <Button transparent>
                                        <Text style={styles.card_shop_button}>View Detail</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rowMain}>
                            <Image source={Images.dala} style={styles.cardBgImage}/>

                            <View style={styles.cardDetailBg}>
                                <Text numberOfLines={1} style={styles.titleTxt}>200mL Plain water</Text>
                                <View style={styles.likeCommentBg}>
                                    <Text style={styles.product_margin}>20 INR . 20 Bottles Ordered</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.amount_style}>
                            <View>
                                <Text style={styles.amount_paid}>Amount Paid : 2903 INR</Text>
                            </View>
                            <Right>
                                <Button transparent
                                        onPress={() => this.props.navigation.navigate('Order_status')}>
                                    <Text style={styles.track_order}>Track order</Text>
                                </Button>
                            </Right>
                        </View>
                    </View>
                </View>
            );
        }
         **/
    };

    render() {
        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }

        StatusBar.setBarStyle('light-content', true);
        if (Platform.OS === 'android') {
            //StatusBar.setBackgroundColor(Colors.snow, true);
            //StatusBar.setTranslucent(true);
        }

        return (
            <Container style={{backgroundColor: Colors.snow}}>
                <Header style={styles.header_style}>
                    <Left style={styles.header_view}>
                        <Button transparent
                                onPress={() => this.props.navigation.navigate('Home_page')}>
                            <Image source={Images.back_white}/>
                            <Text style={styles.header_title}>{lang.back}</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content style={styles.container_style}>
                    <View style={styles.top_margin}/>

                    <Segment style={styles.segmentTabSecOne}>
                        <Button
                            first
                            style={
                                this.state.segment === 1
                                    ? styles.segmentSelectedTabOne
                                    : styles.segmentTabOne
                            }
                            active={this.state.segment === 1 ? true : false}
                            onPress={() => this.setState({segment: 1})}
                        >
                            <Text
                                style={
                                    this.state.segment === 1
                                        ? styles.activeTabOne
                                        : styles.normalTabOne
                                }
                            >
                                {lang.active}
                            </Text>
                        </Button>

                        <Button
                            last
                            style={
                                this.state.segment === 2
                                    ? styles.segmentSelectedTabOne
                                    : styles.segmentTabOne
                            }
                            active={this.state.segment === 2 ? true : false}
                            onPress={() => this.setState({segment: 2})}
                        >
                            <Text
                                style={
                                    this.state.segment === 2
                                        ? styles.activeTabOne
                                        : styles.normalTabOne
                                }
                            >
                                {lang.complete}
                            </Text>
                        </Button>
                    </Segment>

                    <View>{this._renderActiveComponent()}</View>
                </Content>
                {/*<Foot/>*/}
            </Container>
        );
    }
}
