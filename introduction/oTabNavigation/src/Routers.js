import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from "react-navigation";

import Home from "./screens/Home";
import Contacts from "./screens/Contacts";
import Settings from "./screens/Settings";
import ContactDetail from "./screens/ContactDetail";

import Icon from "react-native-vector-icons/Ionicons";

/**
 *
 * STACK NAVIGATOR
 *
 */

const ContactStack = createStackNavigator({
   Contacts: {
       screen: Contacts,
       navigationOptions: {
           title: 'Contacts'
       }
   },
    ContactDetail: {
       screen: ContactDetail
    }
});


/**
 *
 * TAB NAVIGATOR
 *
 */
const TabNavigator = createBottomTabNavigator({ // Tab navigasyonu olustu...
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" size={22} color={tintColor} />
            )
        }
    },
    Contact: {
        screen: ContactStack,
        navigationOptions: {
            tabBarLabel: "Contacts",
            tabBarIcon: ({tintColor}) => (
                <Icon name={"ios-contact"} size={22} color={tintColor} />
            )
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: ({tintColor}) => (
                <Icon name={"ios-settings"} size={22} color={tintColor}/>
            )
        }
    }
});

export default createAppContainer(TabNavigator); // Yukarida olusturdugumuz Tab Navigasyonunu diger sayfalarda kullanmak icin export ediyoruz..
