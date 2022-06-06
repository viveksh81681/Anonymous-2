import React, {PropTypes, Component} from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Platform,
    StatusBar,
    BackHandler,
    I18nManager, Dimensions
} from 'react-native';
import {
    Container,
    Button,
    Icon,
    Right,
    Footer,
    FooterTab,
    Content,
    Input,
    Header,
    Item,
    H1,
    H2,
    H3,
    Thumbnail,
    Left,
    Body,
    Card,
    CardItem,
} from 'native-base';
import {Images, Colors, Metrics} from '../../Themes/';
import Entypo from 'react-native-vector-icons/Entypo';
import Stars from 'react-native-stars';
import Swiper from "react-native-swiper";
import styles from './styles';
import Fonts from "../../Themes/Fonts";
import Foot from "../include/Footer"
import {get_remote_data, get_remote_data_get_req} from "../function/export_fn";
import constants from "../function/Constant";
import {Arabic, English} from "../../Language";

const {width, height} = Dimensions.get("window");


export default class Home_page extends Component {
    constructor(props) {
        super(props);


        this.state = {
            service_id: '',
            service_product_size: '',
            service_product_unit: '',
            new_collection: [],
            companies: true,
            products: false,
            header_one: true,
            header_two: false,
            latitude: 22.564518,
            longitude: 72.928871,
            company_lists: []

        };
    }


    componentDidMount() {
        this.filter_data_get();
        //this.company_list_data();
    }


    filter_data_get = async () => {
        const filter_detail = this.props.navigation.state.params.filter_detail;

        console.warn(filter_detail);

        this.setState({
            service_id: filter_detail.service_id,
            service_product_size: filter_detail.service_product_size,
            service_product_unit: filter_detail.service_product_unit
        }, () => {
            this.company_list_data();
        });
    };

    company_list_data = async () => {
        console.warn(constants.api_url + 'App_protected/get_companies');

        //console.warn(this.state);
        let data = new FormData();
        data.append("service_id", this.state.service_id);
        data.append("service_product_size", this.state.service_product_size);
        data.append("service_product_unit", this.state.service_product_unit);

        let responseData = await get_remote_data(constants.api_url + 'App_protected/get_companies', data);
        console.warn(responseData);
        if (responseData.status === 200) {
            this.setState({
                new_collection: responseData.data.slider,
                company_lists: responseData.data.companies,
            });
        } else {
            alert(responseData.message);
        }
    };

    _handel_header(i) {
        //console.warn(i);
        if (i === 'open') {
            this.setState({header_one: false, header_two: true});
        } else {
            this.setState({header_one: true, header_two: false});
        }
    }

    navagation_now(item){
        this.props.navigation.navigate('Store', {
            shop_data: {
                shop_id: item.id,
                gst_number: item.gst_number,
                user_id: item.user_id,
                shop_name: item.gst_name,
                description: item.description,
                service_id: this.state.service_id,
                service_product_size: this.state.service_product_size,
                service_product_unit: this.state.service_product_unit
            }
        })
    };

    render() {
        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }

        const {new_collection} = this.state;
        StatusBar.setBarStyle('light-content', true);
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(Colors.branding_color, true);
            StatusBar.setTranslucent(false);
        }


        return (
            <Container style={{backgroundColor: Colors.snow}}>

                <Header style={styles.header_height}>
                    {
                        this.state.header_one ?
                            (
                                <Body style={{width: '100%'}}>
                                <Item style={styles.remove_border}>
                                    <Left>
                                        <Button transparent
                                                onPress={() => this.props.navigation.navigate('Filter_page')}>
                                            <Image source={Images.back_white}/>
                                            <Text style={styles.title_text}>{lang.back}</Text>
                                        </Button>
                                    </Left>


                                    <Button transparent style={styles.right_button}
                                            onPress={() => this.props.navigation.navigate('Filter_page')}>
                                        <Image source={Images.filter_icon}/>
                                    </Button>
                                    {/**
                                    <Button transparent style={styles.right_button}
                                            onPress={() => this._handel_header('open')}>
                                        <Ionicons name="ios-search" size={25} color={Colors.snow}/>
                                    </Button>
                                     **/}
                                </Item>
                                </Body>
                            )
                            :
                            (
                                <Body style={{width: '100%'}}>
                                <Item style={styles.search_bar_box}>
                                    <View
                                        style={[
                                            styles.borderVertical,
                                            {marginLeft: Metrics.HEIGHT * 0.01}
                                        ]}
                                    />
                                    <Input
                                        style={[styles.search_input, {textAlign: I18nManager.isRTL ? "right" : "left"}]}
                                        placeholder="Search" autoFocus={true}/>
                                    <View style={styles.borderVertical}/>
                                    <Button transparent
                                            onPress={() => this._handel_header('close')}>
                                        <Entypo
                                            name="cross"
                                            size={29}
                                            color={Colors.branding_color}
                                            style={{
                                                alignSelf: "center",
                                                marginLeft: Metrics.HEIGHT * 0.01
                                            }}
                                        />
                                    </Button>
                                </Item>
                                </Body>
                            )
                    }
                </Header>
                <Content>
                    <View style={styles.slidesec}>
                        {new_collection.length > 0 &&
                        <Swiper
                            showsButtons={false}
                            autoplay={true}
                            autoplayTimeout={2.5}
                            activeDot={<View style={styles.activeDot}/>}
                            dot={<View style={styles.dot}/>}
                        >
                            {new_collection && new_collection.map((item, index) => {
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

                    <View style={styles.companies}>

                        {this.state.company_lists && this.state.company_lists.map((item, index) => {
                            return (
                                <TouchableOpacity style={styles.rowMain} key={index}
                                                  onPress={() => this.navagation_now(item)}>
                                    <Image source={{uri: item.image}} style={styles.cardBgImage}/>

                                    <View style={styles.cardDetailBg}>
                                        <Text numberOfLines={1} style={styles.titleTxt}>{item.gst_name}</Text>

                                        <Text numberOfLines={2} style={styles.descriptionTxt}>
                                            {item.description}
                                        </Text>
                                        <View style={styles.likeCommentBg}>
                                            <View style={styles.start_position}>
                                                <Stars
                                                    half={true}
                                                    rating={parseInt(item.rating_count)}
                                                    //update={(val)=>{this.setState({stars: val})}}
                                                    spacing={9}
                                                    starSize={20}
                                                    count={5}
                                                    disabled={true}
                                                    fullStar={<Image source={Images.star_active}/>}
                                                    emptyStar={<Image source={Images.inactive_star}/>}
                                                    halfStar={Images.starHalf1}/>
                                            </View>
                                            <Text style={styles.card_shop_button}>{lang.view}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}

                    </View>
                </Content>
                <Foot pass_style={styles.foot_style}/>
            </Container>
        );
    }
}