/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  _onpressTouch = () => {
    alert('Çok Basma Be Kircan Butonu!')
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.toucHable}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}> My Button</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onpressTouch}>
          <Image style={{width: 100, height: 100}} source={require('./src/assets/bakerButton.png')}/>
        </TouchableOpacity>
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
  },
  buttonText: {
    fontSize: 24
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: 'aqua',
    borderRadius: 15
  },
  toucHable: {
    padding: 10
  }
});
