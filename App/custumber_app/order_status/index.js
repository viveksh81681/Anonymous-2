import React, {PropTypes, Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Platform,
    Linking,
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
import {Arabic, English} from "../../Language";

export default class Order_status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
            segment: 1,
            order_data: null
        };
    }


    componentDidMount() {
        let order_data = this.props.navigation.state.params.order_data;
        console.warn(order_data);
        this.setState({order_data: order_data});
    }

    _storeData = async (lang) => {
        try {
            await AsyncStorage.setItem('home_lang', lang);
            this.props.navigation.navigate('Signin')
        } catch (error) {
            // Error saving data
        }
    };

    _renderActiveComponent = () => {
        const {segment} = this.state;

        // Login
        if (segment === 1) {
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
                        <View style={styles.amount_style}>
                            <View>
                                <Text style={styles.amount_paid}>Amount Paid : 2903 SAR</Text>
                            </View>
                            <Right>
                                <Button transparent>
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
                        <View style={styles.amount_style}>
                            <View>
                                <Text style={styles.amount_paid}>Amount Paid : 2903 SAR</Text>
                            </View>
                            <Right>
                                <Button transparent>
                                    <Text style={styles.track_order}>Track order</Text>
                                </Button>
                            </Right>
                        </View>
                    </View>
                </View>
            );
        }

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
                        <View style={styles.amount_style}>
                            <View>
                                <Text style={styles.amount_paid}>Amount Paid : 2903 SAR</Text>
                            </View>
                            <Right>
                                <Button transparent>
                                    <Text style={styles.track_order}>Give Feedback</Text>
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
                                        <Text style={styles.card_shop_button}>Give Feedback</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={styles.amount_style}>
                            <View>
                                <Text style={styles.amount_paid}>Amount Paid : 2903 SAR</Text>
                            </View>
                            <Right>
                                <Button transparent>
                                    <Text style={styles.track_order}>Track order</Text>
                                </Button>
                            </Right>
                        </View>
                    </View>
                </View>
            );
        }
    };

    give_feedback (){
        this.props.navigation.navigate('Rating', {
            order_data: this.state.order_data
        })
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
        let total_amount = 0;

        return (
            <Container style={{backgroundColor: Colors.snow}}>
                <Header style={styles.header_style}>
                    <Left style={styles.header_view}>
                        <Button transparent
                                onPress={() => this.props.navigation.navigate('Order_history')}>
                            <Image source={Images.back_white}/>
                            <Text style={styles.header_title}>{lang.track_order}</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content style={styles.container_style}>

                    <View style={styles.editInfoView}>
                        <Text style={styles.top_title}>{lang.reach_at_door}</Text>
                        <Image source={Images.delivery_reached} style={styles.icon_position}/>
                        <Button style={styles.login_button}
                                onPress={() => this.give_feedback()}>
                            <Text style={styles.login_text}>{lang.give_feedback}</Text>
                        </Button>
                    </View>

                    {
                        this.state.order_data &&
                        <View style={styles.bottom_div}>
                            <View style={styles.rowMain}>
                                <Image source={Images.dala} style={styles.cardBgImage}/>

                                <View style={styles.cardDetailBg}>
                                    <Text numberOfLines={1}
                                          style={styles.titleTxt}>{this.state.order_data.gst_detail.gst_name}</Text>
                                    <View style={styles.likeCommentBg}>

                                        <View style={styles.start_position}>
                                            <Stars
                                                half={true}
                                                rating={1}
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
                            <View style={styles.top_margin}/>
                            <Text style={styles.mobile_number}>{this.state.order_data.gst_detail.mobile_number}</Text>

                            <View style={styles.container_inline}>
                                <Left>
                                    <Text style={styles.contact_number}>{lang.contact_number}</Text>
                                </Left>
                                <Right>
                                    <Button transparent
                                            onPress={() => Linking.openURL(`tel:${this.state.order_data.gst_detail.mobile_number && this.state.order_data.gst_detail.mobile_number}`)}>
                                        <Text style={styles.call_button}>{lang.call}</Text>
                                    </Button>
                                </Right>
                            </View>
                            <View style={styles.top_margin}/>

                            {this.state.order_data.ordered_product && this.state.order_data.ordered_product.map((product, index) => {
                                let price = product.product_price;
                                let discount_amount = product.discount;
                                let discount_price = price * discount_amount / 100;
                                price = price - discount_price;

                                let total_charges = price * product.quantity;
                                total_amount = total_amount + total_charges;
                            })}


                            <View style={styles.container_inline}>
                                <Left>
                                    <Text
                                        style={styles.hard_text}>{this.state.order_data.order_data.invoice_number}</Text>
                                </Left>
                                <Right>
                                    <Button transparent>
                                        <Text style={styles.hard_text}>{total_amount} SAR</Text>
                                    </Button>
                                </Right>
                            </View>

                            <View style={styles.container_inline}>
                                <Left>
                                    <Text style={styles.contact_number}>{lang.order_id}</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.contact_number}>{lang.total_amount}</Text>
                                </Right>
                            </View>

                        </View>
                    }

                </Content>
            </Container>
        );
    }
}