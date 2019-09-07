import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'; // createStackNavigator : App lerde geri butonu kullanicinin bir onceki girdigi sayfaya gitmesini saglayan kutuphane..
                                                             // createStackNavigator : bu yapinin icinde butun rooting yapimizi gostermemiz gerekiyor..

import {createAppContainer} from 'react-navigation';   // ilk etapta app.js degil de home sayfam calissin istiyorum.
                                                       // bu durumda app js in icinde AppNavigator' i kullanmam gerek. Peki bunu nasil kullanacagiz?
                                                       // createAppContainer tanimi yapacagiz.. Bu bizim yerimize AppNavigator icin bir container tanimi olusturacak..

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import AboutModal from "./screens/AboutModal";

const MainStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailScreen
    }
}, {
    initialRouteName: "Home", // Uygulama ilk acildiginde acilacak sayfa..
    headerLayoutPreset: "center" // android de header title sola yaslanmis sekilde gorunuyordu bu kullanilarak sorun cozuldu..
});

const ModalStack = createStackNavigator({
    Main: MainStack,
    Modal: AboutModal
}, {
    // asagidaki 2 kod 2 tane header acmasina engel olmasi icin.
    mode: 'modal',
    headerMode: 'node'
});

export default createAppContainer(ModalStack);
