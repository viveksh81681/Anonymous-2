import React, {Component} from 'react';
import {AsyncStorage, Dimensions, I18nManager, Image, Platform, StatusBar, Text, View} from 'react-native';
import {Button, Container, Content, Header, Input, Item, Left, Right,} from 'native-base';
import {Colors, Images} from '../../Themes/';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Fonts from "../../Themes/Fonts";
import Foot from "../include/Footer"

import MapView from "react-native-maps";
import {Arabic, English} from "../../Language";
import RNRestart from "react-native-restart";

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_fifteen.png';
const headerBG = 'https://latintrends.com/wp-content/uploads/2015/03/times-to-drink-water.jpg?w=640';
const headerBG2 = 'http://clipart-library.com/images/8izrjG7AT.jpg';
const cardBgImage = 'http://clipart-library.com/images/8izrjG7AT.jpg';
const cardBgImageTwo = 'http://clipart-library.com/images/8izrjG7AT.jpg';

const {width, height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.06;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 22.564518,
            longitude: 72.928871,
            city: '',
            state: '',
            address: '',
            location_name: '',
        };
    }

    async componentDidMount() {
        this.place_state_update(this.props.navigation.state.params)
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.navigation.state.params !== this.props.navigation.state.params) {
            this.place_state_update(this.props.navigation.state.params)
        }
    }

    place_state_update(dt) {
        let location = dt.place_detail.location;
        this.setState({
            latitude: location.lat,
            longitude: location.lng,
            city: dt.place_detail.city,
            state: dt.place_detail.state,
            location_name: dt.place_detail.city,
            address: dt.place_detail.dsc,
        });
    }

    addMarker(coordinates) {
        // Remove the following line after testing, its just to show coordinates as a warning in console.
        console.warn(coordinates);
        this.setState({latitude: coordinates.latitude, longitude: coordinates.longitude});

        //let old = this.state.location_data;
        //let new_data = {latitude: coordinates.latitude, longitude: coordinates.longitude};
        //let now = old.concat(new_data);
        //console.log(this.state.location_data);
    };

    add_address = async () => {
    if (!this.state.location_name) {
            return false;
        }
        if (!this.state.address) {
            return false;
        }
        console.warn(this.state);
        let data = {
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            city: this.state.city,
            state: this.state.state,
            address: this.state.address,
            location_name: this.state.location_name,
        };
        await AsyncStorage.setItem('location_Data', JSON.stringify(data));
        RNRestart.Restart();
        this.props.navigation.navigate('Home_page', {
            place_detail: data,
        });
    }

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
                                onPress={() => this.props.navigation.navigate('Search_place')}>
                            <Image source={Images.back_white}/>
                            <Text style={styles.header_title}>{lang.address}</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content>
                    <View style={styles.form_two}>
                        <MapView
                            onPress={(e) => this.addMarker(e.nativeEvent.coordinate)}
                            style={styles.map_view}
                            region={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA
                            }}
                            customMapStyle={mapStyle}
                        >

                            <MapView.Marker
                                coordinate={{
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude,
                                }}>
                                <Entypo name="location-pin" size={40} color={Colors.branding_color}/>
                            </MapView.Marker>

                        </MapView>
                    </View>


                    <View style={styles.companies}>
                        <Text style={styles.head_text}>{lang.location_detail}</Text>

                        <Text style={styles.dsc_text}>
                            {lang.location_name}
                        </Text>
                        <Item underline style={styles.itememail}>
                            <Input
                                value={this.state.location_name}
                                placeholder={'Located Name'}
                                placeholderTextColor={Colors.hintblue}
                                keyboardType={'email-address'}
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                style={{width: '100%', paddingLeft: 0}}
                                onChangeText={(location_name) => this.setState({location_name})}
                            />
                        </Item>

                        <Text style={styles.dsc_text}>
                            {lang.complete_address}
                        </Text>
                        <Item underline style={[styles.itememail,{height: Fonts.moderateScale(80)}]}>
                            <Input
                                value={this.state.address}
                                placeholder={'Complete address'}
                                placeholderTextColor={Colors.hintblue}
                                keyboardType={'email-address'}
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                multiline={false}
                                style={{width: '100%', paddingLeft: 0}}
                                onChangeText={(address) => this.setState({address})}
                            />
                        </Item>

                        <Button full dark
                                style={{backgroundColor: Colors.branding_color, marginTop: 16, marginBottom: 16}}
                                onPress={() => this.add_address()}>
                            <Text style={{color: Colors.snow}}>
                                {lang.add_address}
                            </Text>
                        </Button>
                    </View>
                </Content>
                <Foot pass_style={styles.foot_style}/>
            </Container>
        );
    }
}
