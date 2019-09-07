import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'; // createStackNavigator : App lerde geri butonu kullanicinin bir onceki girdigi sayfaya gitmesini saglayan kutuphane..
                                                             // createStackNavigator : bu yapinin icinde butun rooting yapimizi gostermemiz gerekiyor..

import {createAppContainer} from 'react-navigation';   // ilk etapta app.js degil de home sayfam calissin istiyorum.
                                                       // bu durumda app js in icinde AppNavigator' i kullanmam gerek. Peki bunu nasil kullanacagiz?
                                                       // createAppContainer tanimi yapacagiz.. Bu bizim yerimize AppNavigator icin bir container tanimi olusturacak..

import {createDrawerNavigator} from "react-navigation-drawer"; // yan menü icin yapildi..
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons websitesindeki iconlari kullancagiz..

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ContactScreen from "./screens/ContactScreen";
import DrawerComponent from "./components/DrawerComponent";

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: <DrawerComponent navigation={navigation}/>
        })
    },
    Detail: {
        screen: DetailScreen
    }
});

const ContactStack = createStackNavigator({
   Contact: {
       screen: ContactScreen
   }
}, {
    defaultNavigationOptions: ({navigation}) => ({ // eger contact altinda baska bir sayfa olsaydi, o sayfalara da menu isareti gelmesini saglardi..
        headerLeft: <DrawerComponent navigation={navigation}/>
    })
});

const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name={"ios-home"}
                    size={22}
                    color={tintColor} // uygulamadaki yazinin renginde olmasi icin...
                />
            )
        }
    },
    Contact: {
        screen: ContactStack,
        navigationOptions: {
            drawerLabel: 'Contact',
            // drawerLockMode: 'locked-closed', // contact sayfasinda yan menunun acilmasini engelliyor..
            drawerIcon: ({tintColor}) => (
                <Icon
                    name={"ios-contact"}
                    size={22}
                    color={tintColor} // uygulamadaki yazinin renginde olmasi icin...
                />
            )
        }
    }
}, {
    drawerPosition: 'left',
    drawerWidth: 160,
    contentOptions: {
        activeTintColor: "#ffffff",
        inactiveTintColor: "#eb144c",

        activeBackgroundColor: "#eb144c",
        inactiveBackgroundColor: "#ffffff",

        itemStyle: {
            flexDirection: "row-reverse" // yanmenudeki iconlarin sag tarafta gorunmesini saglar..
        }
    }
});


export default createAppContainer(Drawer);
