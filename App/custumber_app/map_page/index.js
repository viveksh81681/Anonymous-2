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
    I18nManager, Dimensions, AsyncStorage
} from 'react-native';
import {
    Container,
    Button,
    Right,
    Footer,
    FooterTab,
    Content,
    Input,
    Header,
    Item,
    Picker,
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
import Stars from 'react-native-stars';
import styles from './styles';
import Fonts from "../../Themes/Fonts";
import Foot from "../include/Footer"

import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {get_remote_data} from "../function/export_fn";
import constants from "../function/Constant";


const {width, height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.06;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map_page extends Component {
    constructor(props) {
        super(props);


        this.state = {
            selected2: undefined,
            new_collection: [
                {
                    id: 1,
                    coverImage: 'https://sdcwa.org/sites/default/files/home-banner-0x540_0_0.jpg',
                    category: "Hair Cut",
                    color: Colors.branding_color
                },
                {
                    id: 2,
                    coverImage: 'https://www.pureh2ocaribbean.com/art/banner_home.jpg',
                    category: "Hair Color",
                    color: Colors.branding_color
                },
                {
                    id: 3,
                    coverImage: 'http://clipart-library.com/images/8cEbXGnXi.jpg',
                    category: "Spa",
                    color: Colors.branding_color
                },
                {
                    id: 4,
                    coverImage: 'https://www.torquesjal.com/wp-content/uploads/2018/10/PACKAGED-DRINKING-WATER-AND-MINERAL-WATER.jpg',
                    category: "Manicure",
                    color: Colors.branding_color
                }
            ],
            companies: true,
            products: false,
            header_one: true,
            header_two: false,
            latitude: 22.564518,
            longitude: 72.928871,
            location_data: [
                {latitude: 22.55476395947521, longitude: 72.92471211121546, price: '200'},
                {latitude: 22.553788517484136, longitude: 72.9193429631184, price: '200'},
                {latitude: 22.553260150812704, longitude: 72.93571446182585, price: '200'},
                {latitude: 22.564639921140937, longitude: 72.946628794969, price: '200'},
                {latitude: 22.581098285316713, longitude: 72.93668266806702, price: '200'},
                {latitude: 22.577034675045738, longitude: 72.91890286973864, price: '200'},
                {latitude: 22.564436720419764, longitude: 72.9080765560773, price: '200'},
                {latitude: 22.578822679222682, longitude: 72.92625243905184, price: '200'},
                {latitude: 22.571995631734268, longitude: 72.91225744822131, price: '200'},
                {latitude: 22.5731741330806, longitude: 72.9298172008672, price: '200'},
                {latitude: 22.571223502646234, longitude: 72.93897115847679, price: '200'},
                {latitude: 22.56045390090361, longitude: 72.91111320503106, price: '200'},
                {latitude: 22.5513498823326, longitude: 72.91027702499056, price: '200'},
                {latitude: 22.59519808610588, longitude: 72.9376948850566, price: '200'},
                {latitude: 22.59227259784366, longitude: 72.91714249219058, price: '200'},
                {latitude: 22.586909041267944, longitude: 72.90952886644646, price: '200'},
                {latitude: 22.590119073091287, longitude: 72.92475611994908, price: '200'},
                {latitude: 22.585121142037593, longitude: 72.94882926388223, price: '200'},
            ],
            company_lists: [],
            location_Data: {}

        };
    }

    componentWillMount() {
        this._get_Data_location();
    }

    _handel_change(i) {
        //console.warn(i);
        if (i === 0) {
            this.setState({companies: true, products: false});
        } else {
            this.setState({companies: false, products: true});
        }
    }

    _handel_header(i) {
        //console.warn(i);
        if (i === 'open') {
            this.setState({header_one: false, header_two: true});
        } else {
            this.setState({header_one: true, header_two: false});
        }
    }

    _get_Data_location = async () => {
        let locaiton = await AsyncStorage.getItem('location_Data');
        locaiton = JSON.parse(locaiton);
        console.warn(locaiton);
        this.setState({location_Data: locaiton}, () => {
            this.get_tanker_data();
        });
    };

    get_tanker_data = async () => {
        //console.warn(constants.api_url + 'App_protected/place_order');
        let data = {
            "latitude": this.state.location_Data.latitude,
            "longitude": this.state.location_Data.longitude,
        };

        //console.warn(data);

        let responseData = await get_remote_data(constants.api_url + 'App_protected/get_tanker', JSON.stringify(data));
        console.warn(JSON.stringify(responseData));
        if (responseData.status === 200) {
            this.setState({
                company_lists: responseData.data.companies,
            });
        } else {
            alert(responseData.message);
        }
    };

    navagation_now(item) {
        this.props.navigation.navigate('Store', {
            shop_data: {
                shop_id: item.id,
                gst_number: item.gst_number,
                user_id: item.user_id,
                shop_name: item.gst_name,
                description: item.description,
                service_id: null,
                service_product_size: null,
                service_product_unit: null
            }
        })
    };

    addMarker(coordinates) {
        // Remove the following line after testing, its just to show coordinates as a warning in console.
        console.log(coordinates);
        let old = this.state.location_data;
        let new_data = {latitude: coordinates.latitude, longitude: coordinates.longitude};
        let now = old.concat(new_data);
        this.setState({location_data: now});
        console.log(this.state.location_data);
    };

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }

    render() {
        const {new_collection} = this.state;
        StatusBar.setBarStyle('light-content', true);
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(Colors.branding_color, true);
            StatusBar.setTranslucent(false);
        }

        let data = [{
            value: 'Nearest',
        }, {
            value: 'Lowest Price',
        }];

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
                                onPress={() => this.props.navigation.navigate('Home_page')}>
                            <Image source={Images.back_white}/>
                            <Text style={styles.header_title}>Water Tanker</Text>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content>

                    {/**
                     this.state.company_lists &&
                     <View style={styles.form_two}>
                     <MapView
                     style={styles.map_view}
                     region={{
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude,
                                    latitudeDelta: LATITUDE_DELTA,
                                    longitudeDelta: LONGITUDE_DELTA
                                }}
                     customMapStyle={mapStyle}
                     >


                     {this.state.location_data && this.state.location_data.map((item, index) => {
                         return (
                             <MapView.Marker
                                 coordinate={{
                                     latitude: item.latitude,
                                     longitude: item.longitude,
                                 }}>
                                 <View style={styles.tanker_tag_center}>
                                     <Text style={styles.tanker_price}>{item.price}SAR</Text>
                                     <AntDesign name="caretdown" size={20} style={styles.minus_tag}
                                                color={Colors.branding_color}/>
                                 </View>
                             </MapView.Marker>
                         );
                     })}
                     <MapView.Marker
                     coordinate={{
                                        latitude: this.state.latitude,
                                        longitude: this.state.longitude,
                                    }}>
                     <Entypo name="location-pin" size={40} color={Colors.red}/>
                     </MapView.Marker>

                     </MapView>
                     </View>

                     **/}
                    <View style={styles.filter_view}>
                        <View style={styles.filter_view_text}>
                            <Text style={styles.tanker_provider}>Tanker Providers</Text>
                        </View>
                        <View style={styles.pickerWrapper}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Image source={Images.dropdown_icon} style={styles.dropdown_icon}/>}
                                style={styles.filter_dropdown}
                                placeholder="Sort By"
                                placeholderStyle={styles.short_by}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Nearest" value="Nearest"/>
                                <Picker.Item label="Lowest Price" value="Lowest Price"/>
                            </Picker>
                            {/**
                             <Dropdown
                             renderBase={() => (
                                        <View style={styles.picker_new}>
                                            <Text style={styles.short_by}>Sort By</Text>
                                            <Image source={Images.dropdown_icon} style={styles.dropdown_icon}/>
                                        </View>
                                    )}
                             dropdownOffset={{top: 5}}
                             containerStyle={styles.filter_dropdown}
                             inputContainerStyle={{borderBottomColor: 'transparent'}}
                             label='Sort By'
                             baseColor={Colors.darktext}
                             data={data}
                             />
                             **/}
                        </View>
                    </View>


                    <View style={styles.companies}>

                        {this.state.company_lists && this.state.company_lists.map((item, index) => {
                            return (
                                <TouchableOpacity style={styles.rowMain} key={index}
                                                  onPress={() => this.navagation_now(item)}>
                                    <Image source={{uri: item.image}} style={styles.cardBgImage}/>

                                    <View style={styles.cardDetailBg}>
                                        <Text numberOfLines={1} style={styles.titleTxt}>{item.gst_name}</Text>
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
                                        <Text numberOfLines={1} style={styles.descriptionTxt}>
                                            200 SAR .2 km away
                                        </Text>
                                        <View style={styles.likeCommentBg}>
                                            <Button transparent
                                                    onPress={() => this.navagation_now(item)}>
                                                <Text style={styles.view_details_button}>View Details</Text>
                                            </Button>
                                            {/**
                                                <Button transparent>
                                                    <Text style={styles.card_shop_button}>Order</Text>
                                                </Button>
                                            **/}
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
