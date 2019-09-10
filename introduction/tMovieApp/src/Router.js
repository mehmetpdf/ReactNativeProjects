import React from 'react'
import {
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'

// native base
import {Icon} from 'native-base';

// auth loading
import AuthLoading from "./screens/AuthLoading";

// app stack
import Home from "./screens/Home"

// authentication stack
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";

const AppStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({tintColor}) => <Icon name={"home"} size={22} style={{color: tintColor}}/>
        }
    },
});


const AuthStack = createBottomTabNavigator(
    {
        Signin: {
            screen: Signin,
            navigationOptions: {
                title: 'Sign In',
                tabBarIcon: ({tintColor}) => <Icon name={"log-in"} size={22} style={{color: tintColor}}/>
            }
        },
        Signup: {
            screen: Signup,
            navigationOptions: {
                title: 'Sign Up',
                tabBarIcon: ({tintColor}) => <Icon name={"person-add"} size={22} style={{color: tintColor}}/>
            }
        }
    },
    {
        initialRouteName: 'Signin',
        tabBarOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#90a4ae',
            style: {
                backgroundColor: '#263238'
            }
        }
    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: {
            screen: AuthLoading
        },
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
)

export default createAppContainer(SwitchNavigator);