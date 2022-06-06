import React, {PropTypes, Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Platform,
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
    Header,
    Left,
    Body
} from 'native-base';
import {Images, Colors, Metrics} from '../../Themes/';
import styles from './styles';
import RNRestart from "react-native-restart";

export default class Select_language extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
        };
    }

    _storeData = async (lang) => {
        try {
            await AsyncStorage.setItem('home_lang', lang);
            if (lang === "arabic") {
                if (I18nManager.isRTL !== true) {
                    I18nManager.forceRTL(true);
                    RNRestart.Restart();
                }else {
                    //this.props.navigation.navigate('Splash_screen');
                }
            } else {
                if (I18nManager.isRTL === true) {
                    I18nManager.forceRTL(false);
                    RNRestart.Restart();
                }else {
                    //this.props.navigation.navigate('Splash_screen');
                }
            }

            RNRestart.Restart();


        } catch (error) {
            // Error saving data
        }
    };

    render() {
        StatusBar.setBarStyle('dark-content', true);
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(Colors.transparent, true);
            StatusBar.setTranslucent(true);
        }

        return (
            <Container style={{backgroundColor: Colors.snow}}>
                <ImageBackground style={styles.page_background}
                                 imageStyle={I18nManager.isRTL ? styles.rtl_image_flip : styles.style_null}
                                 source={Images.select_language}>
                    <Header style={styles.header_style}/>
                    <Content style={styles.container_style}>
                        <View style={styles.top_select}>
                            <Text style={styles.title_text}>Select</Text>
                            <Text style={styles.title_text}>Your Language</Text>
                        </View>
                        {/**
                            <TouchableOpacity style={styles.card_top_margin}
                                              onPress={() => this._storeData("arabic")}>
                                <ImageBackground style={styles.card_size}
                                                 imageStyle={styles.card_image_style}
                                                 source={Images.card_bg}>
                                    <View style={styles.editInfoView}>
                                        <Text style={styles.editInfoText}>Arabic</Text>
                                        <View style={styles.card_middel_width}/>
                                        <Image source={Images.saudi_flag}/>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        **/}

                        <TouchableOpacity style={styles.card_top_margin}
                                          onPress={() => this._storeData("english")}>
                            <ImageBackground style={styles.card_size}
                                             imageStyle={styles.card_image_style}
                                             source={Images.card_bg}>
                                <View style={styles.editInfoView}>
                                    <Text style={styles.editInfoText}>English</Text>
                                    <View style={styles.card_middel_width}/>
                                    <Image source={Images.english_icon}/>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}
