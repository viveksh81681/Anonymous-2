import React, {Component} from 'react';
import {
  AsyncStorage,
  I18nManager,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {get_remote_data_get_req} from '../function/export_fn';
import constants from '../function/Constant';
// Styles
import styles from './styles';
import {Colors, Images, Metrics} from '../../Themes/';
import {Arabic, English} from '../../Language';
import RNRestart from 'react-native-restart';
import CustomButton from '../../component/CustomButton';

const profileImg = 'https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-1024.png';

let lang = null;
if (I18nManager.isRTL === true) {
  lang = Arabic;
} else {
  lang = English;
}

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login_check: false,
      support_user: false,
      name: '',
      type: '',
      image: '',
      menuItem: [
        {
          id: '0',
          title: lang.home,
          icon: 'home',
          member: [],
        },
      ],
    };
  }

  async componentDidMount() {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      this.setState({login_check: true}, () => {
        this.get_detail();
      });
    }
  }

  async componentWillUnmount() {
    console.log('false');
    AsyncStorage.multiSet([['FirstECommerce', 'false']]);
  }

  get_detail = async () => {
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
        name: data.firstname+' '+data.lastname,
        image: data.profile_pic,
        type: 'user',
      });
    }
  };


  navigation_add_station() {
    this.props.navigation.navigate('Add_station');
  }

  async logout() {
    await AsyncStorage.clear();
    RNRestart.Restart();
  }

  toggle = () => {
    this.props.navigation.closeDrawer();
  };

  render() {
    const {activeMenuImage} = this.state;
    StatusBar.setBarStyle('light-content', true);

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Colors.branding_color, true);
      //StatusBar.setTranslucent(true);
    }

    return (
      <Container style={{backgroundColor: Colors.background_now}}>
        <View>
          <View style={styles.listProfileContainer}>
            <TouchableOpacity
              style={styles.top_cross_icon}
              onPress={() => this.props.navigation.closeDrawer()}>
              <Entypo
                name="cross"
                size={29}
                style={styles.margin_icon_menu}
                color={Colors.black}
              />
            </TouchableOpacity>

            <View style={styles.profileBg}>
              <View style={styles.profileDataBg}>
                {this.state.image ? (
                  <Image
                    source={{uri: image}}
                    style={styles.profileImg}
                  />
                ) : (
                  <Image
                    source={{uri: profileImg}}
                    style={styles.profileImg}
                  />
                )}
              </View>
              <View style={styles.top_margin_nm}>
                <Text style={styles.nameTxt}>{this.state.name}</Text>
              </View>
            </View>

            <ScrollView
              vertical={true}
              style={{
                height: Metrics.HEIGHT * 0.65,
                ...styles.menu_item_container,
              }}>

              <TouchableOpacity
                style={styles.menu_icon_text_group}
                onPress={() => this.props.navigation.navigate('Home_page')}>
                <FontAwesome
                  name="home"
                  size={22}
                  color={Colors.branding_color}
                  style={styles.margin_icon_menu}
                />
                <Text style={styles.titleTxt}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menu_icon_text_group}
                                onPress={() => this.props.navigation.navigate('Order_history')}>
                <FontAwesome
                  name="history"
                  size={22}
                  color={Colors.branding_color}
                  style={styles.margin_icon_menu}
                />
                <Text style={styles.titleTxt}>Orders</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Wallet')}
                  style={styles.menu_icon_text_group}>
                <FontAwesome
                    name="inr"
                    size={22}
                    color={Colors.branding_color}
                    style={styles.margin_icon_menu}
                />
                <Text style={styles.titleTxt}>Wallet</Text>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}
                style={styles.menu_icon_text_group}>
                <FontAwesome
                  name="user"
                  size={22}
                  color={Colors.branding_color}
                  style={styles.margin_icon_menu}
                />
                <Text style={styles.titleTxt}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menu_icon_text_group}
                onPress={() => this.logout()}>
                <FontAwesome
                  name="sign-out"
                  size={22}
                  color={Colors.branding_color}
                  style={styles.margin_icon_menu}
                />
                <Text style={styles.titleTxt}>Logout</Text>
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.legal_options}>
              <TouchableOpacity
                style={styles.menu_icon_text_group2}
                onPress={() =>
                  this.props.navigation.navigate('TermsConditions')
                }>
                <Text style={styles.titleTxt3}>Term & Conditions</Text>
              </TouchableOpacity>
              <Text style={styles.titleTxt3}>|</Text>
              <TouchableOpacity
                style={styles.menu_icon_text_group2}
                onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
                <Text style={styles.titleTxt3}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
