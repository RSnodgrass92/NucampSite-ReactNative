import React, { Component } from 'react';
import {View, Platform} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer";


// custom components
import Directory from './DirectoryComponent';
import CampsiteInfo from "./CampsiteInfoComponent"; 
import Home from "./HomeComponent"
import About from "./AboutComponent"
import Contact from "./ContactComponent"


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

const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home}, 
    }, 
    {
       
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

const AboutNavigator = createStackNavigator(
    {
        Home: {screen: About}, 
    }, 
    {
       
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

const ContactNavigator = createStackNavigator(
    {
        Home: {screen: Contact}, 
    }, 
    {
       
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



const MainNavigator = createDrawerNavigator(

    {
        Home: {screen: HomeNavigator},
        Directory: {screen: DirectoryNavigator}, 
        About: {screen: AboutNavigator}, 
        Contact: {screen: ContactNavigator}
    }, 
    {
        drawerBackgroundColor: "#CEC8FF"
    }
)

const AppNavigator = createAppContainer(MainNavigator); 

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