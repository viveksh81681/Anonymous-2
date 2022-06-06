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
import {Arabic, English} from "../../Language";
import Select_language from "../select_languae";

export default class Splash_screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
        };
    }

    _storeData = async (lang) => {
        try {
            await AsyncStorage.setItem('home_lang', lang);
            this.props.navigation.navigate('Signin')
        } catch (error) {
            // Error saving data
        }
    };

    render() {
        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }

        StatusBar.setBarStyle('dark-content', true);
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(Colors.transparent, true);
            StatusBar.setTranslucent(true);
        }

        return (
            <Container style={{backgroundColor: Colors.snow}}>
                <ImageBackground style={styles.page_background}
                                 imageStyle={I18nManager.isRTL ? styles.rtl_image_flip : styles.style_null}
                                 source={Images.splash_screen2}>
                    <Header style={styles.header_style}/>
                    <Content style={styles.container_style}>

                        <View style={styles.editInfoView}>
                            <Image source={Images.logo} style={{width: 85, height: 85}}/>
                            <Text style={styles.title_text}>{lang.welcome}</Text>
                            <Text style={styles.body_text}>
                                {lang.welcome_content}
                            </Text>
                            <Button style={styles.login_button}
                                    onPress={() => this.props.navigation.navigate('Signin')}>
                                <Text style={styles.login_text}>{lang.login_signup}</Text>
                            </Button>

                           {/* <TouchableOpacity style={styles.language_button}
                                    onPress={() => this.props.navigation.navigate('Select_language')}>
                                <Text style={styles.language_text}>Change Language</Text>
                            </TouchableOpacity>*/}
                        </View>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}
