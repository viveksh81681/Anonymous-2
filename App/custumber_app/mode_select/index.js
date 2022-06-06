import React, {Component} from 'react';
import {
    AsyncStorage,
    I18nManager,
    Image,
    ImageBackground,
    Platform,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {Button, Container, Content, Header, Left, Right} from 'native-base';
import {Colors, Images} from '../../Themes/';
import styles from './styles';
import Foot from "../include/Footer"
import Search_place from "../search_place";
import {Arabic, English} from "../../Language";
import constants from "../function/Constant";
import {get_remote_data_get_req} from "../function/export_fn";

export default class Mode_select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
            location_name: 'Not Selected',

            new_data: [],
            quantity_data: [],
            service_name: '',
            service_id: '',
            service_product_size: null,
            service_product_unit: ''
        };
    }

    async componentDidMount() {
        this._get_Data_location();
        this.get_data();
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.navigation.state.params !== this.props.navigation.state.params) {
            this._get_Data_location();
            this.get_data();
        }
    }

    get_data = async () => {
        console.warn(constants.api_url + 'App_protected/get_filter_data');

        //console.warn(data);
        let responseData = await get_remote_data_get_req(constants.api_url + 'App_protected/get_filter_data');
        console.warn(responseData);
        if (responseData.status === 300) {
            alert(responseData.message);
        } else {
            this.setState({new_data: responseData.data});
            this.setState({service_id: responseData.data[0].id, service_name: responseData.data[0].service_name, quantity_data: responseData.data[0].unit_data});
        }
    };

    _storeData = async (lang) => {
        try {
            await AsyncStorage.setItem('home_lang', lang);
            this.props.navigation.navigate('Signin')
        } catch (error) {
            // Error saving data
        }
    };

    _get_Data_location = async () => {
        let locaiton = await AsyncStorage.getItem('location_Data');
        locaiton = JSON.parse(locaiton);
        //console.warn(locaiton);
        this.setState({location_name: locaiton.location_name});
    };

    navagate_to_page(page_name) {
        if (this.state.location_name === "Not Selected") {
            this.props.navigation.navigate('Search_place')
        } else {
            this.props.navigation.navigate(page_name)
        }
    }

    goto_filter_page = async (or_type) => {
        try {
            await AsyncStorage.setItem('or_type', or_type);
            this.navagate_to_page('Filter_page');
        } catch (error) {
            // Error saving data
        }
    };

    goToProductPage(id){
        this.goto_filter_page('regular');
        //alert(id);
    }

    render() {
        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }

        let location = '';
        if (this.state.location_name === "Not Selected") {
            location = lang.not_selected;
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
                                onPress={() => this.props.navigation.navigate('Search_place')}>
                            <Image source={Images.location_icon_white}/>
                            <Text style={styles.header_title}>{lang.delivery_at} {location}</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content style={styles.container_style}>
                    <View style={styles.top_margin}/>

                    {this.state.new_data && this.state.new_data.map((item, index) => {
                        return (
                            <View style={styles.card_top_margin}>
                                <View style={styles.card_size}>
                                    <View style={styles.editInfoView}>
                                        <View style={styles.card_left_part}>
                                            <Text style={styles.card_title_text}>{item.service_name}</Text>
                                            <Text style={styles.card_body_txt} numberOfLines={2}>
                                                {item.dsc}
                                            </Text>
                                            <Button style={styles.card_order_button}
                                                    onPress={() => this.goToProductPage(item.id)}>
                                                <Text style={styles.order_txt}>{lang.order_now}</Text>
                                            </Button>
                                        </View>
                                        <View style={styles.style_card_image_icon}>
                                            <Image source={{uri: item.image}} style={styles.card_icon}/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    })}

                    {/*<View style={styles.card_top_margin}>
                        <View style={styles.card_size}>
                            <View style={styles.editInfoView}>
                                <View style={styles.card_left_part}>
                                    <Text style={styles.card_title_text}>Medical</Text>
                                    <Text style={styles.card_body_txt} numberOfLines={2}>
                                        {lang.bottel_content}
                                    </Text>
                                    <Button style={styles.card_order_button}
                                            onPress={() => this.goto_filter_page('regular')}>
                                        <Text style={styles.order_txt}>{lang.order_now}</Text>
                                    </Button>
                                </View>
                                <View style={styles.style_card_image_icon}>
                                    <Image source={Images.catImage} style={styles.card_icon}/>
                                </View>
                            </View>
                        </View>
                    </View>*/}

                    {/*<View style={styles.card_top_margin}>
                        <ImageBackground style={styles.card_size}
                                         imageStyle={styles.card_image_style}
                                         source={Images.card_bg}>

                            <View style={styles.editInfoView}>
                                <View style={styles.card_left_part}>
                                    <Text style={styles.card_title_text}>Industrial</Text>
                                    <Text style={styles.card_body_txt} numberOfLines={2}>
                                        {lang.taker_content}
                                    </Text>
                                    <Button style={styles.card_order_button}
                                            onPress={() => this.goto_filter_page('regular')}>
                                        <Text style={styles.order_txt}>{lang.order_now}</Text>
                                    </Button>
                                </View>

                                <View style={styles.style_card_image_icon}>
                                    <Image source={Images.water_tanker} style={styles.card_icon}/>
                                </View>
                            </View>

                        </ImageBackground>
                    </View>*/}

                    {/**
                     <View style={styles.card_top_margin}>
                     <ImageBackground style={styles.card_size}
                     imageStyle={styles.card_image_style}
                     source={Images.card_bg}>

                     <View style={styles.editInfoView}>
                     <View style={styles.card_left_part}>
                     <Text style={styles.card_title_text}>Industrial</Text>
                     <Text style={styles.card_body_txt} numberOfLines={2}>
                     {lang.taker_content}
                     </Text>
                     <Button style={styles.card_order_button}
                     onPress={() => this.navagate_to_page('Map_page')}>
                     <Text style={styles.order_txt}>{lang.order_now}</Text>
                     </Button>
                     </View>

                     <View style={styles.style_card_image_icon}>
                     <Image source={Images.water_tanker} style={styles.card_icon}/>
                     </View>
                     </View>

                     </ImageBackground>
                     </View>
                     **/}

                    {/**
                     <View style={styles.card_top_margin}>
                     <ImageBackground style={styles.card_size}
                     imageStyle={styles.card_image_style}
                     source={Images.card_bg}>

                     <View style={styles.editInfoView}>
                     <View style={styles.card_left_part}>
                     <Text style={styles.card_title_text}>{lang.water_donations}</Text>
                     <Text style={styles.card_body_txt} numberOfLines={2}>
                     {lang.donating_content}
                     </Text>
                     <Button style={styles.card_order_button}
                     onPress={() => this.goto_filter_page('donation')}>
                     <Text style={styles.order_txt}>{lang.order_now}</Text>
                     </Button>
                     </View>
                     <View style={styles.style_card_image_icon}>
                     <Image source={Images.donate_icon} style={styles.card_icon}/>
                     </View>
                     </View>

                     </ImageBackground>
                     </View>
                     **/}

                </Content>
                <Foot/>
            </Container>
        );
    }
}
