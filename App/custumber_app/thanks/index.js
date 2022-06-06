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
    SafeAreaView,
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
import FontAwesome from "react-native-vector-icons/FontAwesome";


import {Fonts, Metrics, Colors, Images} from "../../Themes/index";
import {English, Arabic} from "../../Language/index";
// Screen Styles
import styles from './styles';

export default class Thanks extends Component {
    constructor(props) {
        super(props);
        let dsc = "I hate peeping Toms. For one thing they usually step all over the hedges and plants on the side of someone’s house killing them and setting back the vegetation’s gardener countless time and effort. \n";
        this.state = {
            lang: [],
            left: true,
            body: false,
            right: false,
            username: 'amitsingh@gmail.com',
            password: '8059@#SHeo'
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


    render() {
        StatusBar.setBarStyle("light-content", true);

        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor(Colors.branding_color, true);
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
                <Header style={styles.header}>
                    <Button transparent style={styles.button_style}
                            onPress={() => RNRestart.Restart()}>
                        <FontAwesome
                            name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                            size={35}
                            color="white"
                            style={{paddingRight: 20}}
                        />
                    </Button>
                    <Text style={styles.logo}>Order Confirm</Text>
                    <Body/>
                    <Right/>
                </Header>
                <Content style={styles.container}>
                    <View style={styles.center_screen}>
                        <Image source={Images.payment_recieved}/>
                        <View style={styles.top_gap}/>
                        <Text style={styles.thangs_text}>{lang.thanks_for_book}</Text>
                        {/**
                        <Text style={styles.thangs_text}>Our Support Team Will answer your request</Text>
                        <Text style={styles.thangs_text}>within 22 hours</Text>
                        **/}
                    </View>
                </Content>
                <SafeAreaView style={styles.innerWrapper}/>
            </Container>
        );
    }
}
