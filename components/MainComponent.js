import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from "./CampsiteInfoComponent"; 
import {View, Platform} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const DirectoryNavigator= createStackNavigator(
    {
        Directory: {screen: Directory}, 
        CampsiteInfo: {screen: CampsiteInfo}
    }, 
    {
        initialRouteName: "Directory", 
        defaultNavigationOptions: 
        {
            headerStyle: 
            {
                backgroundColor: "#5637DD"
            }, 
            headerTintColor: "#FFF",
            headerTitleStyle:
            {
                color: "#FFF"
            }
        }
    }
)

const AppNavigator = createAppContainer(DirectoryNavigator); 

class Main extends Component {

    render() {
        return (
        <View style={{
            flex: 1, 
            // varies the padding based on ios or android
            paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
            }}>
            <AppNavigator />
        </View>
        
        );
    }
}

export default Main;