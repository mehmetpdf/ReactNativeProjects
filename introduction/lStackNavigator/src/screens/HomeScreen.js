import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from "react-native";

export default class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return{
            title: "Home",
            headerBackTitle: "Geri", // detail sayfasindakyen sol üstte bulunan <Home yerine <Geri yazmasi icin...
            headerRight: (
                <TouchableOpacity
                    style={{marginRight: 10}}
                    onPress={() => navigation.navigate('Modal')}>
                    <Text>About</Text>
                </TouchableOpacity>
            )
        }
    };
    render() {
        const {navigate, push } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Home Page!</Text>
                <Button
                    title={"go to haber 1"}
                    onPress={() => navigate("Detail", {
                        title: 'Kadikoyde Yangin!'
                    })}
                />
                <Button
                    title={"go to haber 2"}
                    onPress={() => navigate("Detail", {
                        title: 'Galatasaray Lider!'
                    })}
                />
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