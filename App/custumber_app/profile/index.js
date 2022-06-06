import React, {PropTypes, Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Platform,
    Modal,
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
    Item,
    Input,
    Header,
    Left,
    Body
} from 'native-base';
import {Images, Colors, Metrics} from '../../Themes/';
import styles from './styles';
import Foot from "../include/Footer"
import {get_remote_data_get_req, get_remote_data} from "../function/export_fn";
import constants from "../function/Constant";
import RNRestart from "react-native-restart";
import {Arabic, English} from "../../Language";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
            user_data: {},
            isModalVisible: false,
            edit_type: true,
            edit_value: '',
            name: '',
            mobile: '',
        };
    }

    async componentDidMount() {
        this.get_data();
    }

    get_data = async () => {
        console.warn(constants.api_url + 'App_protected/get_profile_detail');

        const userToken = await AsyncStorage.getItem('userToken');
        let headers = {
            'jwt': JSON.parse(userToken),
        };
        console.warn(headers);

        let responseData = await get_remote_data_get_req(constants.api_url + 'App_protected/get_profile_detail');
        console.warn(responseData);
        if (responseData.status === 300) {
            alert(responseData.message);
        } else {
            let data = responseData.data;
            this.setState({
                user_data: data,
                name: data.firstname+' '+data.lastname,
                mobile: data.phone_no
            });
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

    _showModal = (edit_type) => {
        if (edit_type === "name") {
            this.setState({edit_value: this.state.name});
        } else if (edit_type === "mobile") {
            this.setState({edit_value: this.state.mobile});
        } else if (edit_type === "password") {
            this.setState({edit_value: ''});
        }

        this.setState({isModalVisible: true, edit_type: edit_type});
    };

    editable_value = (value) => {
        if (this.state.edit_type === "name"){
            this.setState({edit_value: value, name: value});
        } else if (this.state.edit_type === "mobile"){
            this.setState({edit_value: value, mobile: value});
        } else if (this.state.edit_type === "password"){
            this.setState({edit_value: value, password: value});
        }
    };

    udpate_detail = async () => {
        let data = new FormData();
        data.append("edit_type", this.state.edit_type);
        data.append("edit_value", this.state.edit_value);

        let responseData = await get_remote_data(constants.api_url + 'App_protected/update_information', data);
        console.warn(responseData);
        if (responseData.status === 300) {
            alert(responseData.message);
        } else {
            if (responseData.type === "yes"){
                AsyncStorage.clear();
                RNRestart.Restart();
            } else {
                this._hideModal();
                this.get_data();
            }
        }
    };

    logout(){
        AsyncStorage.clear();
        RNRestart.Restart();
    }

    _hideModal = () => this.setState({isModalVisible: false});

    render() {
        let now_language = null;
        let lang = null;
        if (I18nManager.isRTL === true) {
            now_language = 'عربى';
            lang = Arabic;
        } else {
            now_language = 'English'
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

                    {/**
                     <View style={styles.top_margin}/>
                     < View style={styles.icon_text_container}>
                     <Left style={styles.icon_container}>
                     <Image source={Images.name_icon} style={styles.icon_style}/>
                     <Text style={styles.icon_text}>Profile Picture</Text>
                     </Left>
                     <Right>
                     <Button transparent>
                     <Text style={styles.button_text}>Upload</Text>
                     </Button>
                     </Right>
                     </View>
                     <Image source={Images.profile_pic} style={styles.profile_pic}/>
                     **/}

                    <View style={styles.top_margin}/>
                    <View style={styles.icon_text_container}>
                        <Left style={styles.icon_container}>
                            <Image source={Images.name_icon} style={styles.icon_style}/>
                            <Text style={styles.icon_text}>{lang.name}</Text>
                        </Left>
                        <Right>
                            <Button transparent
                                    onPress={()=> this._showModal('name')}>
                                <Text style={styles.button_text}>{lang.edit}</Text>
                            </Button>
                        </Right>
                    </View>
                    <Text style={styles.normal_text}>{this.state.name}</Text>

                    <View style={styles.top_margin}/>
                    <View style={styles.icon_text_container}>
                        <Left style={styles.icon_container}>
                            <Image source={Images.phone} style={styles.icon_style}/>
                            <Text style={styles.icon_text}>{lang.mobile_number}</Text>
                        </Left>
                        <Right>
                            <Button transparent
                                    onPress={()=> this._showModal('mobile')}>
                                <Text style={styles.button_text}>{lang.change}</Text>
                            </Button>
                        </Right>
                    </View>
                    <Text style={styles.normal_text}>{this.state.mobile}</Text>

                    <View style={styles.top_margin}/>
                    <View style={styles.icon_text_container}>
                        <Left style={styles.icon_container}>
                            <Image source={Images.setting} style={styles.icon_style}/>
                            <Text style={styles.icon_text}>{lang.password}</Text>
                        </Left>
                        <Right>
                            <Button transparent
                                    onPress={()=> this._showModal('password')}>
                                <Text style={styles.button_text}>{lang.change}</Text>
                            </Button>
                        </Right>
                    </View>
                    <Text style={styles.normal_text}>.............</Text>

                    <View style={styles.top_margin}/>
                    <View style={styles.icon_text_container}>
                        <Left style={styles.icon_container}>
                            <Image source={Images.setting} style={styles.icon_style}/>
                            <Text style={styles.icon_text}>{lang.change_languagee}</Text>
                        </Left>
                        <Right>
                            <Button transparent
                                    onPress={()=> this.props.navigation.navigate('Select_languages')}>
                                <Text style={styles.button_text}>{lang.change}</Text>
                            </Button>
                        </Right>
                    </View>
                    <Text style={styles.normal_text}>{now_language}</Text>
                    <Button
                        style={styles.done_button}
                        onPress={() => this.logout()}
                    >
                        <Text style={styles.okText}>Logout</Text>
                    </Button>
                </Content>

                <Modal
                    style={{alignItems: "center", justifyContent: "center"}}
                    visible={this.state.isModalVisible}
                    transparent={true}
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this._hideModal()}
                >
                    <View style={styles.main_model}>
                        <View style={styles.modalView}>

                            <View style={styles.top_header_view}>
                                <Text style={styles.model_title}>Enter detail</Text>
                                <TouchableOpacity
                                    style={styles.cros_icon}
                                    onPress={() => this._hideModal()}
                                >
                                    <Image source={Images.hamburger_menu}/>
                                </TouchableOpacity>
                            </View>

                            {
                                this.state.edit_type === "name" &&
                                <Item underline style={styles.itememail}>
                                    <Input
                                        placeholder={'Name'}
                                        value={this.state.edit_value}
                                        placeholderTextColor={Colors.hintblue}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        style={styles.inputemail}
                                        onChangeText={(edit_value) => this.editable_value(edit_value)}
                                    />
                                </Item>
                            }

                            {
                                this.state.edit_type === "mobile" &&
                                <Item underline style={styles.itememail}>
                                    <Input
                                        placeholder={'Mobile Number'}
                                        value={this.state.edit_value}
                                        placeholderTextColor={Colors.hintblue}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        style={styles.inputemail}
                                        onChangeText={(edit_value) => this.editable_value(edit_value)}
                                    />
                                </Item>
                            }

                            {
                                this.state.edit_type === "password" &&
                                <Item underline style={styles.itememail}>
                                    <Input
                                        placeholder={'Password'}
                                        value={this.state.edit_value}
                                        autoCapitalize="none"
                                        autoCompleteType={'email'}
                                        keyboardType={'phone-pad'}
                                        placeholderTextColor={Colors.hintblue}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        style={styles.inputemail}
                                        onChangeText={(edit_value) => this.editable_value(edit_value)}
                                    />
                                </Item>
                            }


                            <Button
                                style={styles.done_button}
                                onPress={() => this.udpate_detail()}
                            >
                                <Text style={styles.okText}>Done</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>


            </Container>
        );
    }
}
