import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
    Text,
    View,
    BackHandler,
    Image,
    StyleSheet,
    AsyncStorage,
    I18nManager,
    Share
} from 'react-native';
import {
    Button,
    Footer,
    FooterTab,
} from 'native-base';
import {Images, Colors, Metrics} from '../../Themes/';
import {Fonts} from "../../Themes";
import {withNavigation} from 'react-navigation';
import {Arabic, English} from "../../Language";


const styles = StyleSheet.create({
    footer_style: {
        borderTopWidth: 0,
        backgroundColor: Colors.snow
    },
    activate_txt:{
        marginTop: Fonts.moderateScale(6),
        color: Colors.branding_color
    },
    inactive_text:{
        marginTop: Fonts.moderateScale(6),
        color: 'rgba(0,61,136,0.5)'
    }
});


export class Foot extends Component {
    static propTypes = {
        pass_style: PropTypes.any
    };
    constructor(props) {
        super(props);

        this.state = {
            page: 'Home_page',
        };
    }

    componentWillMount() {
        this._retrieveData();
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                title: "Share Bellabox",
                message: "Share via Bellabox www.demo.com",
                url: "www.demo.com",
                subject: "Share Bellabox"
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    _storeData = async (page) => {
        try {
            await AsyncStorage.setItem('page_footer', page);
            this.props.navigation.navigate(page)
        } catch (error) {
            // Error saving data
        }
    };


    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('page_footer');
            console.warn(value);
            if (value !== null) {
                this.setState({page: value});
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    render() {
        let lang = null;
        if (I18nManager.isRTL === true) {
            lang = Arabic;
        } else {
            lang = English;
        }
        return (
            <Footer style={[styles.footer_style,this.props.pass_style]}>
                <FooterTab style={{backgroundColor: Colors.snow}}>
                    <Button vertical onPress={() => this._storeData("Home_page")}>
                        <Image
                            source={this.state.page === "Home_page" ? Images.home_icon_active : Images.home_icon_active}
                            style={styles.card_icon}/>
                        <Text style={this.state.page === "Home_page" ? styles.activate_txt : styles.inactive_text}>
                            {lang.home}
                        </Text>
                    </Button>
                    <Button vertical onPress={() => this._storeData("Order_history")}>
                        <Image
                            source={this.state.page === "Order_history" ? Images.order_history_active : Images.order_history_inactive}
                            style={styles.card_icon}/>
                        <Text style={this.state.page === "Order_history" ? styles.activate_txt : styles.inactive_text}>
                            {lang.order_history}
                        </Text>
                    </Button>
                    <Button vertical onPress={() => this._storeData("Profile")}>
                        <Image
                            source={this.state.page === "Profile" ? Images.profile_active : Images.profile_inactive}
                            style={styles.card_icon}/>
                        <Text style={this.state.page === "Profile" ? styles.activate_txt : styles.inactive_text}>
                            {lang.profile}
                        </Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default withNavigation(Foot);
