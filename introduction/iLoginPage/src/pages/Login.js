/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import LoginForm from "./LoginForm";

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}/>
                <View style={styles.logoView}>
                    <Text style={styles.logo}> UDAC </Text>
                    <Text style={styles.logoDescription}>Property & Tax Survey</Text>
                </View>
                {/* Klavye acildiginda girilecek input un uzerine klavye gelmesin diye kullanildi KeyboardAvoidingView tagi */}
                <KeyboardAvoidingView behavior={"position"}>
                    <ScrollView>
                        <View style={styles.loginArea}>
                            <Text style={styles.loginText1}>Property Tax Server </Text>
                            <Text style={styles.loginText2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <LoginForm/>
                        </View>
                    </ScrollView>
                    <View style={styles.signUpArea}>
                        <Text style={styles.signUpDescription}>Don't Have an Account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUp}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 400,
        backgroundColor: '#1E90FF'
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
    },
    logoDescription: {
        textAlign: 'center',
        color: '#ffffff'
    },
    logoView: {
        paddingVertical: 80
    },
    loginArea: {
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,

        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 10
        },

        elevation: 3
    },
    loginText1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        color: 'black'
    },
    loginText2: {
        textAlign: 'center',
        fontSize: 12,
        color: 'gray'
    },
    signUpArea: {
        alignItems: 'center'
    },
    signUpDescription: {
        color: '#999'
    },
    signUp: {
        color: '#666'
    }
});
