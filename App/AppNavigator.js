import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Splash_screen from "./custumber_app/splash_screen";
import Select_language from "./custumber_app/select_languae";
import Signin from "./custumber_app/signin";
import Signup from "./custumber_app/signup";
import Otp from './custumber_app/otp';
import AuthLoadingScreen from './AuthLoadingScreen';

import Mode_select from './custumber_app/mode_select';
import Home_page from './custumber_app/home_page';
import Search_place from './custumber_app/search_place';
import Map_page from './custumber_app/map_page';
import Address from "./custumber_app/address_page";
import Profile from './custumber_app/profile';
import Order_history from './custumber_app/order_history';
import Filter_page from './custumber_app/filter';
import Order_status from './custumber_app/order_status';
import Delivery_location from "./custumber_app/delivery_location";
import Thanks from "./custumber_app/thanks";
import CheckOut from './custumber_app/CheckOut';
import Store from './custumber_app/store';
import Cart from './custumber_app/cart';
import Rating from './custumber_app/rating';
import Home from "./custumber_app/homePage";
import Wallet from "./custumber_app/wallet";
import Products from "./custumber_app/product";
import SearchPage from "./custumber_app/searchPage";

import WooCommerceSideMenu from "./custumber_app/side_bar/Sidebar";


const LoginStack = createStackNavigator({
    Home: {screen: Splash_screen},
    //Home: {screen: Search_place},
    Splash_screen: {screen: Splash_screen},
    Signin: {screen: Signin},
    Signup: {screen: Signup},
    Select_language: {screen: Select_language}
}, {
    gesturesEnabled: false,
    headerMode: "none",
});


const StackMain = createStackNavigator({
    //Home_page: {screen: Address},
    //Home_page: {screen: Mode_select},
    Home_page: {screen: Home},
    Products: {screen: Products},
    SearchPage: {screen: SearchPage},
    Wallet: {screen: Wallet},
    Search_place: {screen: Search_place},
    Map_page: {screen: Map_page},
    Address: {screen: Address},
    Profile: {screen: Profile},
    Order_history: {screen: Order_history},
    Filter_page: {screen: Filter_page},
    Order_status: {screen: Order_status},
    Delivery_location: {screen: Delivery_location},
    Thanks: {screen: Thanks},
    Select_languages: {screen: Select_language},
    CheckOut: {screen: CheckOut},
    Store: {screen: Store},
    Company_page: {screen: Home_page},
    Cart: {screen: Cart},
    Rating: {screen: Rating},
}, {
    gesturesEnabled: false,
    headerMode: "none",
});

const HomeScreens = createDrawerNavigator(
    {
        Home_page_o: StackMain,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home_page_o',
        gesturesEnabled: false,
        drawerLockMode: 'locked-closed',
        //overlayColor : 'red',
        contentComponent: WooCommerceSideMenu,
    },
);

const AppNavigator = createStackNavigator(
    {
        mainStack: { screen: AuthLoadingScreen },
        loginStack: { screen: LoginStack },
        StackMain: { screen: HomeScreens }
    },
    {
        headerMode: "none",
        initialRouteName: "mainStack",
        gesturesEnabled: false
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
