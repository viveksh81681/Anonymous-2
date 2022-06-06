import React from 'react';
import AppNavigator from './App/AppNavigator';
import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import {Colors} from "./App/Themes";
//import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

console.disableYellowBox = true;
export default class App extends React.Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}


AppRegistry.registerComponent(appName, () => App)


//AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App))
