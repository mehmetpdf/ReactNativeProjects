import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

export default class DetailScreen extends Component {
    // Eger sabit tanimlamak istersek bu sekilde..
    /*static navigationOptions = {
        title: "Detail"
    };*/

    // Eger gelen parametreye gore dinamik tanimlarsak..
    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.getParam('title', 'Eger title yoksa bu metni yazacak...')
        }
    };

    render() {
        const {navigate, push, goBack, getParam } = this.props.navigation; // navigate de kullanilir, push da kullanilir. Aradaki farki videodan izle :)
        const title = getParam('title', 'Eger title yoksa bu metni yazacak...');
        return (
            <View style={styles.container}>
                <Text>Detail Page!</Text>
                <Text>Parametre : {title}</Text>
                <Button title={"go to home page"} onPress={() => push("Home")}/>
                <Button title={"go to back"} onPress={() => goBack()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});