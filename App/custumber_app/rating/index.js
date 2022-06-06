import React, {Component} from 'react';
import {AsyncStorage, I18nManager, Image, Platform, StatusBar, Text, View} from 'react-native';
import {Button, Container, Content, Header, Left, Right, Textarea} from 'native-base';
import {Colors, Images} from '../../Themes/';
import Stars from 'react-native-stars';
import styles from './styles';
import Foot from "../include/Footer"
import {get_remote_data} from "../function/export_fn";
import constants from "../function/Constant";
import {Arabic, English} from "../../Language";

export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
            segment: 1,
            order_data: null,
            stars: 0,
            review: '',
            rating_detail: null
        };
    }

    componentDidMount() {
        let order_data = this.props.navigation.state.params.order_data;
        console.warn(order_data);
        this.setState({order_data: order_data}, ()=> {
            this.get_review(order_data.order_data.id);
        });
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
                <View style={styles.card_view}>
                    <Text style={styles.order_id}>
                        Give Ratings
                    </Text>
                    <View style={styles.start_position}>
                        <Stars
                            half={true}
                            rating={4}
                            //update={(val)=>{this.setState({stars: val})}}
                            spacing={25}
                            starSize={20}
                            count={5}
                            disabled={true}
                            fullStar={Images.ratings_icon_filled}
                            emptyStar={Images.ratings_icon_unfilled}
                            halfStar={Images.starHalf1}/>
                    </View>
                    <Text style={styles.write_review}>
                        Write a Review
                    </Text>
                    <Textarea rowSpan={5} bordered style={styles.text_area}/>
                    <Button disabled block style={styles.next_button}>
                        <Text style={styles.button_text}>Block</Text>
                    </Button>
                </View>
            );
        }

        if (segment === 2) {
            return (
                <View style={styles.card_view}>
                    <Text style={styles.order_id}>
                        Give Ratings
                    </Text>
                    <View style={styles.start_position}>
                        <Stars
                            half={true}
                            rating={4}
                            //update={(val)=>{this.setState({stars: val})}}
                            spacing={25}
                            starSize={20}
                            count={5}
                            disabled={true}
                            fullStar={Images.ratings_icon_filled}
                            emptyStar={Images.ratings_icon_unfilled}
                            halfStar={Images.starHalf1}/>
                    </View>
                    <Button disabled block style={styles.next_button}>
                        <Text style={styles.button_text}>Done !</Text>
                    </Button>
                </View>
            );
        }
    };

    get_review = async (booking_id) => {
        let data = new FormData();
        data.append("order_id", booking_id);

        console.warn(data);

        let responseData = await get_remote_data(constants.api_url + 'App_protected/rating_get', data);
        console.warn(responseData);
        if (responseData.status === 200) {
            this.setState({rating_detail: responseData.data})
        } else {
            alert(responseData.message);
        }
    };

    update_detail = async () => {

        if (!this.state.review) {
            alert('Please type review');
            return false;
        }

        if (!this.state.stars) {
            alert('Please give rating');
            return false;
        }

        if (!this.state.order_data.gst_detail.id) {
            alert('Please select order');
            return false;
        }
        console.warn(this.state.review);
        console.warn(this.state.stars);

        let data = new FormData();
        data.append("order_id", this.state.order_data.order_data.id);
        data.append("shop_id", this.state.order_data.gst_detail.id);
        data.append("review", this.state.review);
        data.append("stars", this.state.stars);

        console.warn(data);

        let responseData = await get_remote_data(constants.api_url + 'App_protected/update_rating', data);
        console.warn(responseData);
        if (responseData.status === 200) {
            this.props.navigation.navigate('Order_history')
        } else {
            alert(responseData.message);
        }
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
                                onPress={() => this.props.navigation.navigate('Order_status')}>
                            <Image source={Images.back_white}/>
                            <Text style={styles.header_title}>{lang.feedback}</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content style={styles.container_style}>
                    <View style={styles.top_margin}/>

                    {/**
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
                     Company
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
                     Product
                     </Text>
                     </Button>
                     </Segment>

                     <View>{this._renderActiveComponent()}</View>
                     **/}


                    {this.state.rating_detail ? (
                        <View style={styles.card_view}>
                            <Text style={styles.order_id}>
                                {lang.your_rating}
                            </Text>
                            <View style={styles.start_position}>
                                <Stars
                                    half={true}
                                    rating={this.state.rating_detail.rating}
                                    //update={(val)=>{this.setState({stars: val})}}
                                    spacing={25}
                                    starSize={20}
                                    count={5}
                                    disabled={true}
                                    fullStar={Images.ratings_icon_filled}
                                    emptyStar={Images.ratings_icon_unfilled}
                                    halfStar={Images.starHalf1}/>
                            </View>
                            <Text style={styles.write_review}>
                                {lang.your_review}
                            </Text>
                            <Textarea rowSpan={5}
                                      bordered
                                      editable={false}
                                      style={styles.text_area}
                                      value={this.state.rating_detail.comments}/>
                        </View>
                    ) : (
                        <View style={styles.card_view}>
                            <Text style={styles.order_id}>
                                {lang.give_ratings}
                            </Text>
                            <View style={styles.start_position}>
                                <Stars
                                    half={true}
                                    rating={this.state.stars}
                                    //update={(val)=>{this.setState({stars: val})}}
                                    spacing={25}
                                    starSize={20}
                                    count={5}
                                    disabled={false}
                                    update={(val) => {
                                        this.setState({stars: val})
                                    }}
                                    fullStar={Images.ratings_icon_filled}
                                    emptyStar={Images.ratings_icon_unfilled}
                                    halfStar={Images.starHalf1}/>
                            </View>
                            <Text style={styles.write_review}>
                                {lang.write_review}
                            </Text>
                            <Textarea rowSpan={5} bordered style={styles.text_area}
                                      onChangeText={(val) => {
                                          this.setState({review: val})
                                      }}/>
                            <Button block style={styles.next_button}
                                    onPress={() => this.update_detail()}>
                                <Text style={styles.button_text}>{lang.submit}</Text>
                            </Button>
                        </View>
                    )}

                </Content>
                <Foot/>
            </Container>
        );
    }
}
