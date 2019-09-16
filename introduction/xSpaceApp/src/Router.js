import React from 'react'
import {
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator
}
    from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import DrawerComponent from "./components/DrawerComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import EarthScreen from "./screens/EarthScreen";
import SunScreen from "./screens/SunScreen";
import SolarSystemScreen from "./screens/SolarSystemScreen";
import UniverseScreen from "./screens/UniverseScreen";
import ScienceTechScreen from "./screens/ScienceTechScreen";
import EducatorScreen from "./screens/EducatorScreen";

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerComponent navigation={navigation}/>
        })
    },
});

const EarthStack = createStackNavigator({
    Earth: {
        screen: EarthScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerComponent navigation={navigation}/>
        })
    },
});

const SunStack = createStackNavigator({
    Sun: {
        screen: SunScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerComponent navigation={navigation}/>
        })
    },
});

const SolarSystemStack = createStackNavigator({
    SolarSystem: {
        screen: SolarSystemScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerComponent navigation={navigation}/>
        })
    },
});

const UniverseStack = createStackNavigator({
    Universe: {
        screen: UniverseScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerComponent navigation={navigation}/>
        })
    },
});

const ScienceTechStack = createStackNavigator({
    Universe: {
        screen: ScienceTechScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerComponent navigation={navigation}/>
        })
    },
});

const EducatorsStack = createStackNavigator({
    Universe: {
        screen: EducatorScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerComponent navigation={navigation}/>
        })
    },
});


const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            drawerLabel: "Home",
            drawerIcon:({tintColor}) => (
                <Icon name={"home"} size={24} color={tintColor}/>
            )
        }
    },
    Earth: {
        screen: EarthStack,
        navigationOptions: {
            drawerLabel: "Earth",
            drawerIcon:({tintColor}) => (
                <Icon name={"globe"} size={24} color={tintColor}/>
            )
        }
    },
    Sun: {
        screen: SunStack,
        navigationOptions: {
            drawerLabel: "Sun",
            drawerIcon:({tintColor}) => (
                <Icon name={"sun-o"} size={24} color={tintColor}/>
            )
        }
    },
    SolarSystem: {
        screen: SolarSystemStack,
        navigationOptions: {
            drawerLabel: "Solar System",
            drawerIcon:({tintColor}) => (
                <Icon name={"leaf"} size={24} color={tintColor}/>
            )
        }
    },
    Universe: {
        screen: UniverseStack,
        navigationOptions: {
            drawerLabel: "Universe",
            drawerIcon:({tintColor}) => (
                <Icon name={"tree"} size={24} color={tintColor}/>
            )
        }
    },
    ScienceTech: {
        screen: ScienceTechStack,
        navigationOptions: {
            drawerLabel: "Science and Tech",
            drawerIcon:({tintColor}) => (
                <Icon name={"flask"} size={24} color={tintColor}/>
            )
        }
    },
    Educators: {
        screen: EducatorsStack,
        navigationOptions: {
            drawerLabel: "Educators",
            drawerIcon:({tintColor}) => (
                <Icon name={"university"} size={22} color={tintColor}/>
            )
        }
    }
}, {
    drawerPosition: 'Left',
    drawerWidth: 270,
});

export default createAppContainer(Drawer);