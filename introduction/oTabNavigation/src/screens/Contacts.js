import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import ContactFlatList from "../components/ContactFlatList";

export default class Contacts extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ContactFlatList navigation={this.props.navigation}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});