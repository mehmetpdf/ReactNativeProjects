/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Cards from './src/components/Cards';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <Cards text='Merhaba' backgroundColor='blue'></Cards>
          <Cards text='Ben'></Cards>
          <Cards text='Mehmet'></Cards>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    width: 200,
    height: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
