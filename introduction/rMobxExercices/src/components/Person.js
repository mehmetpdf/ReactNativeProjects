import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {observer} from "mobx-react";
import PersonStore from "../store/PersonStore";

@observer
export default class Person extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>{PersonStore.name} {PersonStore.surname} </Text>
          <Button title={'Change to Name'} onPress={() => PersonStore.changeName()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 24
    }
});