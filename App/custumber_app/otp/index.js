import React, {Component} from "react";
import {
    TouchableHighlight,
    Modal,
    Dimensions,
    StyleSheet,
    ImageBackground,
    Image,
    View,
    StatusBar,
    Platform,
    TouchableOpacity,
    BackHandler,
    I18nManager,
    AsyncStorage
} from "react-native";
import {
    Container,
    Text,
    Content,
    Form,
    Item,
    Button,
    Input,
    CheckBox,
    Body,
    Footer,
    Icon,
    Header,
    Left,
    Right,
    Title
} from "native-base";
import RNRestart from 'react-native-restart';
import {Fonts, Metrics, Colors, Images} from "../../Themes/";
import {English, Arabic} from "../../Language/";
// Screen Styles
import styles from './styles';
import constants from "../function/Constant"
import {get_remote_data} from "../function/export_fn";

export default class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: [],
            username: '',
            password: ''
        };


    }

    async componentDidMount() {
        await this.init()
    }

    async init() {
        const lang = await AsyncStorage.getItem('home_lang');
        if (lang === "arabic") {
            if (I18nManager.isRTL !== true) {
                I18nManager.forceRTL(true);
                RNRestart.Restart();
            }
        } else {
            if (I18nManager.isRTL === true) {
                I18nManager.forceRTL(false);
                RNRestart.Restart();
            }
        }
    }

    login = async () => {
        console.warn(constants.api_url + 'Login_api/signIn_post');
        let data = new FormData();
        data.append("username", this.state.username);
        data.append("password", this.state.password);

        //console.warn(data);
        let responseData = await get_remote_data(constants.api_url + 'Login_api/signIn_post', data);
        console.warn(responseData);
        if (responseData.status === 300) {
            alert(responseData.message);
        } else {
            AsyncStorage.setItem('userToken', JSON.stringify(responseData.token));
            this.props.navigation.navigate('Home_page');
        }
    };


    render() {
        StatusBar.setBarStyle("dark-content", true);

        if (Platform.OS === "android") {
            //StatusBar.setBackgroundColor(Colors.color_two, true);
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
                <ImageBackground style={styles.page_background}
                                 imageStyle={I18nManager.isRTL ? styles.rtl_image_flip : styles.style_null}
                                 source={Images.select_language}>

                    <Header style={styles.header_style}>
                        <Left/>
                        <Body/>
                        <Right>
                            <Button transparent>
                                <Text style={styles.back_button}>
                                    Back
                                </Text>
                            </Button>
                        </Right>
                    </Header>
                    <View>
                        <View style={styles.top_select}>
                            <Text style={styles.title_text}>Please Enter</Text>
                            <Text style={styles.title_text}>The Received OTP</Text>
                        </View>

                        <View style={styles.container}>

                            <View style={styles.view2}>
                                <View style={styles.input_box}>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder=''
                                        onChangeText={(username) => this.setState({username})}
                                    />
                                </View>

                                <View style={styles.spacing_box}/>
                                <View style={styles.input_box}>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder=''
                                        onChangeText={(username) => this.setState({username})}
                                    />
                                </View>

                                <View style={styles.spacing_box}/>
                                <View style={styles.input_box}>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder=''
                                        onChangeText={(username) => this.setState({username})}
                                    />
                                </View>

                                <View style={styles.spacing_box}/>
                                <View style={styles.input_box}>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder=''
                                        onChangeText={(username) => this.setState({username})}
                                    />
                                </View>
                            </View>

                            <TouchableHighlight
                                info
                                style={styles.buttondialogsignup}
                                onPress={() => this.props.navigation.navigate('Filter_page')}
                            >
                                <Text autoCapitalize="words" style={styles.buttonsignin}>
                                    {lang.sign_up}
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}
