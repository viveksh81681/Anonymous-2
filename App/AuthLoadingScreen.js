import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage, Platform,
    StatusBar,
    StyleSheet,
    Linking,
    Alert,
    View,
} from 'react-native';
import {Colors} from "./Themes";
//import messaging from '@react-native-firebase/messaging';
import constants from "./custumber_app/function/Constant"
import {get_remote_data} from "./custumber_app/function/export_fn";
import RNRestart from "react-native-restart";


export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        //await this.checkPermission();
        this._bootstrapAsync();
    }

    /**
    async checkPermission() {
        const enabled = await messaging().hasPermission();
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
    }

    async requestPermission() {
        try {
            await messaging().requestPermission();
            // User has authorised
            this.getToken();
        } catch (error) {
            // User has rejected permissions
            console.log('permission rejected');
        }
    }

    async getToken() {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            fcmToken = await messaging().getToken();
            if (fcmToken) {
                // user has a device token
                this.update_token(fcmToken);
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        } else {
            this.update_token(fcmToken);
            console.warn('token ' + fcmToken);
        }
    }

    update_token = async (fcmToken) => {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
            let data = new FormData();
            data.append("token", fcmToken);

            //console.warn(data);
            let responseData = await get_remote_data(constants.api_url + 'App_protected/update_token_now', data);
            console.warn(responseData);
            if (responseData.status === 300) {
                alert(responseData.message);
            } else {
                this.setState({orders: responseData.data});
            }
        }
    };
     **/


    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        //AsyncStorage.clear();
        await AsyncStorage.setItem('page_footer', 'Home_page');
        const userToken = await AsyncStorage.getItem('userToken');
        console.warn(userToken);
        let responseData = await get_remote_data(constants.api_url + 'App_protected/currentVersionCheck');
        if (responseData.status === 300) {
            alert(responseData.message);
        } else {
            if (responseData.version === constants.version){
                this.props.navigation.navigate(userToken ? 'StackMain' : 'loginStack');
            }else{
                Alert.alert(
                    'Update alert',
                    'This version of OyeGattu is expired. Please update the app from store to latest version',
                    [
                        {
                            text: 'Update OyeGattu',
                            onPress: () => {
                                console.log('updating OyeGattu');
                                Linking.openURL(responseData.androidUrl);
                            }
                        }
                    ],
                    {cancelable: false},
                );
            }
        }
        // This will switch to the App_old screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />

            </View>
        );
    }
}
