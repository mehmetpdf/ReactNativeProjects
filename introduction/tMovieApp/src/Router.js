import React from 'react'
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'

// native base
import {Icon} from 'native-base';


// authentication stack
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";

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

export default createAppContainer(AuthStack);