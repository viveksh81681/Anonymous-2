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
    I18nManager, AsyncStorage
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
import {Fonts, Metrics, Colors, Images} from "../../Themes/";
// Screen Styles
import styles from './styles';
import {Arabic, English} from "../../Language";
import {get_remote_data} from "../function/export_fn";
import constants from "../function/Constant";
import RNRestart from "react-native-restart";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email_id: '',
            phone_no: '',
            username: '',
            password: '',
            firstname: '',
            lastname: ''
        };
    }

    componentWillMount() {
        var that = this;
    }

    signup = async () => {
        console.warn(constants.api_url + 'Login_api/signUp_post');
        let data = new FormData();
        data.append("username", '');
        data.append("firstname", this.state.firstname);
        data.append("lastname", this.state.lastname);
        data.append("email_id", this.state.email_id);
        data.append("phone_no", this.state.phone_no);
        //data.append("username", this.state.username);
        data.append("password", this.state.password);

        //console.warn(data);
        let responseData = await get_remote_data(constants.api_url + 'Login_api/signUp_post', data);
        console.warn(responseData);
        if (responseData.status === 300) {
            alert(responseData.msg);
        } else {
            AsyncStorage.setItem('userToken', JSON.stringify(responseData.token));
            RNRestart.Restart();
            this.props.navigation.navigate('Home_page');
        }
    };

    render() {
        StatusBar.setBarStyle("dark-content", true);

        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor(Colors.transparent, true);
            StatusBar.setTranslucent(true);
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
                            <Button transparent
                                    onPress={() => this.props.navigation.navigate('Signin')}>
                                <Text style={styles.back_button}>
                                    {lang.back}
                                </Text>
                            </Button>
                        </Right>
                    </Header>
                    <View>
                        <View style={styles.top_select}>
                            <Text style={styles.title_text}>{lang.sign_up}</Text>
                        </View>

                        <View style={styles.container}>

                            <View style={styles.view2}>
                                <Item underline style={styles.itememail}>
                                    <Image source={Images.name_icon}/>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder={lang.first_name}
                                        style={styles.inputemail}
                                        onChangeText={(firstname) => this.setState({firstname})}
                                    />
                                </Item>
                                <Item underline style={styles.itememail}>
                                    <Image source={Images.name_icon}/>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder={lang.last_name}
                                        style={styles.inputemail}
                                        onChangeText={(lastname) => this.setState({lastname})}
                                    />
                                </Item>
                                <Item underline style={styles.itememail}>
                                    <Image source={Images.name_icon}/>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder={lang.email}
                                        autoCapitalize = 'none'
                                        style={styles.inputemail}
                                        onChangeText={(email_id) => this.setState({email_id})}
                                    />
                                </Item>
                                <Item underline style={styles.itememail}>
                                    <Image source={Images.phone}/>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder={lang.enter_mobile_number}
                                        keyboardType='numeric'
                                        style={styles.inputemail}
                                        onChangeText={(phone_no) => this.setState({phone_no})}
                                    />
                                </Item>
                                <Item underline style={styles.itememail}>
                                    <Image source={Images.setting}/>
                                    <Input
                                        placeholderTextColor={Colors.darktext}
                                        textAlign={I18nManager.isRTL ? "right" : "left"}
                                        placeholder={lang.password}
                                        secureTextEntry={true}
                                        autoCapitalize = 'none'
                                        style={styles.inputemail}
                                        onChangeText={(password) => this.setState({password})}
                                    />
                                </Item>
                            </View>

                            <TouchableHighlight
                                info
                                style={styles.buttondialogsignup}
                                onPress={this.signup}
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
