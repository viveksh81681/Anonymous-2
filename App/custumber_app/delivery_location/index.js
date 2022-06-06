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
    I18nManager, Dimensions, AsyncStorage, Alert, Linking
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Fonts from "../../Themes/Fonts";
import Foot from "../include/Footer"
import Geolocation from 'react-native-geolocation-service';


import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {get_remote_data, hasLocationPermission} from "../function/export_fn";
import constants from "../function/Constant";
import {Arabic, English} from "../../Language";

const {width, height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Delivery_location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            job: false,
            route_id: 4,
            latitude: 22.564518,
            longitude: 72.928871,

        };
    }

    componentDidMount() {
        //console.warn(this.props.navigation.state.params.route_id);
        let route_id = this.props.navigation.state.params.route_id;
        this.setState({route_id: route_id}, () => {
            this.update_status();
        });
        //console.warn(route_id);
        //this.update_status();
    }


    update_status = async () => {

        let location_cord = setInterval(async () => {

            let data = new FormData();
            data.append("route_id", this.state.route_id);

            //console.warn(data);
            let responseData = await get_remote_data(constants.api_url + 'App_protected/order_detail', data);
            console.warn(responseData);
            if (responseData.status === 300) {
                alert(responseData.message);
            } else {
                //this.get_data(this.state.route_id);
                this.setState({latitude: responseData.data.latitude, longitude: responseData.data.longitude});
            }

        }, 15000);

    };


    location_cords = async () => {
        let hasLocationAccess = await hasLocationPermission();

        let location_cord = setInterval(async () => {
            if (hasLocationAccess) {
                Geolocation.getCurrentPosition(
                    (position) => {
                        //console.warn(position);
                        // console.warn(position.coords);
                        //console.warn(position.coords.longitude);
                        this.setState({
                            driver_latitude: position.coords.latitude,
                            driver_longitude: position.coords.longitude,
                        }, () => {
                            if (this.state.job) {
                                this.driver_location_update();
                            }
                        });
                        //clearInterval(location_cord);
                    },
                    (error) => {
                        // See error code charts below.
                        console.warn(error.code, error.message);
                    },
                    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
                );
            }
        }, 15000);
    };


    render() {
        const {new_collection} = this.state;
        StatusBar.setBarStyle('light-content', true);
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(Colors.branding_color, true);
            StatusBar.setTranslucent(false);
        }

        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }

        let mapStyle = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];

        return (
            <Container style={{backgroundColor: Colors.snow}}>

                <Header style={styles.header_style}>
                    <Left style={styles.header_view}>
                        <Button transparent
                                onPress={() => this.props.navigation.goBack()}>
                            <Image source={Images.back_white}/>
                            <Text style={styles.header_title}>{lang.map_view}</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content>


                    <View style={styles.form_two}>
                        <MapView
                            style={styles.map_view}
                            region={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA
                            }}
                            showsUserLocation={true}
                            showsMyLocationButton={true}
                            customMapStyle={mapStyle}
                        >


                            <MapView.Marker
                                coordinate={{
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude,
                                }}>
                                <View style={styles.tanker_tag_center}>
                                    <Text style={styles.tanker_price}>Your Order</Text>
                                    <AntDesign name="caretdown" size={20} style={styles.minus_tag}
                                               color={Colors.branding_color}/>
                                </View>
                            </MapView.Marker>
                            {/**
                             <MapView.Marker
                             coordinate={{
                                            latitude: this.state.latitude,
                                            longitude: this.state.longitude,
                                        }}>
                             <Entypo name="location-pin" size={40} color={Colors.red}/>
                             </MapView.Marker>
                             **/}
                        </MapView>
                    </View>

                </Content>
                <Foot/>
            </Container>
        );
    }
}