import React, {Component} from 'react';
import {I18nManager, Platform, StatusBar, Text} from 'react-native';
import {Body, Button, Container, Content, Header, Input, Item, Left, List, ListItem, Right,} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Geolocation from '@react-native-community/geolocation';
//import Geolocation from 'react-native-geolocation-service';
import {Colors} from "../../Themes/index";
import {Arabic, English} from "../../Language/index";
import constants from "../function/Constant";
import {
    get_remote_data_get_req,
    google_map_data,
    hasLocationPermission,
    place_id_detail_cordinates,
    place_id_detal
} from "../function/export_fn";

let section_token = '1234567890';

export default class Search_place extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_type: '',
            place_name: '',
            places: [],
            latitude: '',
            longitude: '',
            locaiton_now: false
        };
    }

    componentWillUnmount() {
        Geolocation.stopObserving();
    }

    onChangePasswordClick() {
        this.props.navigation.navigate('ECommerceChangePassword');
    }

    async componentDidMount() {
        this.get_data_permission();
        var that = this;
        let search_type = this.props.navigation.state.params.search_type;
        console.warn(search_type);
        this.setState({search_type: search_type});
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.navigation.state.params !== this.props.navigation.state.params) {
            let search_type = this.props.navigation.state.params.search_type;
            console.warn(search_type);
            this.setState({search_type: search_type});
        }
    }

    get_data_permission = async () => {
        console.warn(constants.api_url + 'App_protected/current_location_view_now');

        //console.warn(data);
        let responseData = await get_remote_data_get_req(constants.api_url + 'App_protected/current_location_view_now');
        console.warn(responseData);
        if (responseData.status === 200) {
            this.setState({locaiton_now: true});
        } else {
            this.setState({locaiton_now: false});
        }
    };

    search_place_data = async (place_name) => {
        //console.warn(this.state.place_name)
        //let responseData = await google_map_data(this.state.place_name, section_token);
        let responseData = await google_map_data(place_name, section_token);
        this.setState({places: responseData["predictions"]});
        let places = responseData.predictions;
        console.warn(places);
    };

    location_cords = async () => {
        //console.warn('hello');
        let hasLocationAccess = await hasLocationPermission();

        if (hasLocationAccess) {
            console.warn('we have locaiton perimission');
            Geolocation.getCurrentPosition(
                (position) => {
                    console.warn(position);
                    //console.warn(position.coords);
                    // console.warn(position.coords.latitude);
                    this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }, () => {
                        this.get_cordinates_detail();
                    });
                },
                (error) => {
                    // See error code charts below.
                    console.warn(error.code, error.message);
                },
                {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000}
            );
        } else {
            console.warn('location permission not exist');
        }
    };

    get_cordinates_detail = async () => {
        let responseData = await place_id_detail_cordinates(this.state.latitude, this.state.longitude);
        console.warn(responseData);

        let addressArray = responseData.results[0].address_components;

        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
            }
        }

        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                state = addressArray[i].long_name;
            }
        }

        let country = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'country' === addressArray[i].types[0]) {
                country = addressArray[i].long_name;
            }
        }

        let place_detail = {
            dsc: responseData.results[0].formatted_address,
            place_id: responseData.results[0].place_id,
            location: responseData.results[0].geometry.location,
            country: country,
            state: state,
            city: city,
        };

        console.warn(place_detail);

        this.props.navigation.navigate('Address', {
            place_detail: place_detail,
            search_type: this.state.search_type
        })
    };

    get_place_id_detail = async (value) => {
        let place_id = value.place_id;
        let dsc = value.description;
        let terms = value.terms;
        let term_length = terms.length - 1;
        let country = terms[term_length].value;
        let state = terms[term_length - 1].value;
        let city = terms[term_length - 2].value;
        console.warn(terms.length);
        //console.warn(city);
        let responseData = await place_id_detal(place_id);
        //console.warn(responseData);
        //console.warn(responseData.result.geometry.location.lat);
        let place_detail = {
            dsc: dsc,
            place_id: place_id,
            location: responseData.result.geometry.location,
            country: country,
            state: state,
            city: city,
        };

        this.props.navigation.navigate('Address', {
            place_detail: place_detail,
            search_type: this.state.search_type
        })
    };

    //place_id_from: id,
    //from_location: responseData.result.geometry.location,
    render() {
        StatusBar.setBarStyle('light-content', true);
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(Colors.color_two, true);
            //StatusBar.setTranslucent(true);
        }

        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }

        return (
            <Container style={{backgroundColor: Colors.snow}}>

                <Header searchBar style={styles.header_style}>
                    <Item style={styles.search_box}>
                        <Left style={styles.button_style}>
                            <Button transparent
                                    onPress={() => this.props.navigation.navigate('Home_page')}>
                                <Entypo name="cross" size={30} color={Colors.snow}/>
                            </Button>
                        </Left>
                        <Body>
                            <Input placeholder={lang.search}
                                   textAlign={I18nManager.isRTL ? "right" : "left"}
                                   style={styles.search_box_c}
                                   onChangeText={(place_name) => this.search_place_data(place_name)}
                                   placeholderTextColor={Colors.snow}

                            />
                        </Body>
                        <Right style={styles.search_style}>
                            <Button transparent
                                    onPress={this.search_place_data}>
                                <Ionicons name="ios-search" size={28} color={Colors.snow}/>
                            </Button>
                        </Right>
                    </Item>
                </Header>

                <Content style={styles.mainView}>
                    <List>
                        {this.state.locaiton_now &&
                            <ListItem onPress={() => this.location_cords()}>
                                <Text style={styles.address_text}>{lang.current_location}</Text>
                            </ListItem>
                        }
                        {this.state.places && this.state.places.map((item) => {
                            return (
                                <ListItem onPress={() => this.get_place_id_detail(item)}>
                                    <Text style={styles.address_text}>{item.description}</Text>
                                </ListItem>
                            );
                        })}
                    </List>
                </Content>
                {/**
                 <Footer style={styles.editInfoMainView}>
                 <FooterTab>
                 <Button style={{backgroundColor: Colors.branding_color}}
                 onPress={() => this.props.navigation.navigate("EditInformation")}>
                 <Text style={styles.editInfoText}>{lang.edit_information}</Text>
                 </Button>
                 </FooterTab>
                 </Footer>
                 **/}
            </Container>
        );
    }
}
