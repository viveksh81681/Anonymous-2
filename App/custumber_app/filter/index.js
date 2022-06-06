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
    FlatList,
    StatusBar,
    BackHandler,
    I18nManager, AsyncStorage
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
    H1,
    H2,
    H3,
    Thumbnail,
    Left,
    Body,
    Card,
    CardItem,
} from 'native-base';

import {Images, Colors} from '../../Themes/';

import styles from './styles';
import {get_remote_data, get_remote_data_get_req} from "../function/export_fn";
import constants from "../function/Constant";
import {Arabic, English} from "../../Language";

const headerBG = 'https://image.flaticon.com/icons/png/512/135/135662.png';
const headerBG_two = 'https://cdn2.iconfinder.com/data/icons/kitchen-utensils-24/64/11-512.png';

const cardBgImageTwo = "https://antiqueruby.aliansoftware.net//Images/profile/iv_item_2_p30.png";

export default class Filter_page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLots: [],
            new_data: [],
            quantity_data: [],
            service_name: '',
            service_id: '',
            service_product_size: null,
            service_product_unit: ''
        };
    }

    componentDidMount() {
        this.get_data()
    }

    componentWillMount() {
        this.setState({
            selectedLots: [],
            maxFevouriteItem: 1 //allow maximum genres selection, you can change range from here
        });
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

    onSelected(id, product_size, size_unit) {
        console.warn(id);
        //let tmp = this.state.selectedLots;
        this.setState({service_product_size: product_size, service_product_unit: size_unit});
        let tmp = [];

        if (tmp.includes(id)) {
            tmp.splice(tmp.indexOf(id), 1);
        } else {
            if (tmp.length < this.state.maxFevouriteItem) {
                tmp.push(id);
            } else {
                alert(
                    "You can choose only " + this.state.maxFevouriteItem + " styles!"
                );
            }
        }

        this.setState({selectedLots: tmp});
    }

    select_quantity(item){
        this.setState({service_id: item.id, service_name: item.service_name, quantity_data: item.unit_data, selectedLots: []});
        console.warn(item.service_name);
    }

    shops_navagation(){
        if (this.state.service_product_size){
            //console.warn(responseData.result.geometry.location.lat);
            this.props.navigation.navigate('Company_page', {
                filter_detail: {
                    service_id: this.state.service_id,
                    service_product_size: this.state.service_product_size,
                    service_product_unit: this.state.service_product_unit
                }
            })
        } else {
            alert('Please select product size');
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
            StatusBar.setBackgroundColor(Colors.branding_color, true);
            StatusBar.setTranslucent(false);
        }

        let appData = [
            {
                id: 1,
                musicname: "5.0 L"
            },
            {
                id: 2,
                musicname: "12.0 L"
            },
            {
                id: 3,
                musicname: "3.8 L"
            },
            {
                id: 4,
                musicname: "14.0 L"
            },
            {
                id: 5,
                musicname: "3.8 L"
            },
            {
                id: 6,
                musicname: "14.0 L"
            },
            {
                id: 7,
                musicname: "14.0 L"
            },
        ];

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
                <Content style={{backgroundColor: Colors.snow}}>
                    <ScrollView
                        style={styles.top_card_container}
                        horizontal={true}>

                        {this.state.new_data && this.state.new_data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.select_quantity(item)}>
                                    <View style={styles.card_style}
                                                     source={Images.filetr_card_bg}>
                                        <View style={styles.card_item_container}>
                                            <Image source={{uri: item.image}} style={styles.filterImageSize}/>
                                            <Text style={styles.card_title}> {item.service_name} </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}

                        {/**
                         <ImageBackground style={styles.card_style}
                         source={Images.filetr_card_bg}>
                         <View style={styles.card_item_container}>
                         <Image source={Images.water_bottel_icon} />
                         <Text style={styles.card_title}> Bottel </Text>
                         </View>
                         </ImageBackground>
                         <ImageBackground style={styles.card_style}
                         source={Images.filetr_card_bg}>
                         <View style={styles.card_item_container}>
                         <Image source={Images.gallon_icon} />
                         <Text style={styles.card_title}> Bottel </Text>
                         </View>
                         </ImageBackground>
                         **/}
                    </ScrollView>
                    <View style={styles.size_tag}>
                        <Text style={styles.tag_txt}>{lang.available_size}</Text>
                    </View>

                    <View style={styles.listContent}>
                        {this.state.quantity_data && this.state.quantity_data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    style={
                                        this.state.selectedLots.includes(index)
                                            ? [styles.txtBg, styles.selectedButton]
                                            : [styles.txtBg, {backgroundColor: "transparent"}]
                                    }
                                    onPress={() => this.onSelected(index, item.unit_value, item.unit)}
                                >
                                    <Text
                                        style={
                                            this.state.selectedLots.includes(index)
                                                ? [styles.musicname, {color: Colors.snow}]
                                                : [styles.musicname, {color: Colors.branding_color}]
                                        }
                                    >
                                        {" "}
                                        {item.unit_value+''+item.unit}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <View style={styles.listDivider}/>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button full style={{backgroundColor: Colors.branding_color}}
                                onPress={() => this.shops_navagation()}>
                            <Text style={styles.footer_button_text}>{lang.save}</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
