/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*
*   Dosya Isimlerinin Anlamlari :
*   - smoke.android.png     ->  android uzerinde calisan telefonlarda gosterilecek resim icin..
*   - smoke.ios.png         ->  ios uzerinde calisan telefonlarda gosterilecek resim icin..
*   - smoke@2x.android.png  ->  android uzerinde cozunurlugu (2x) kategorisinde olan telefonlarda gosterilecek resim..
*   - smoke@2x.ios.png      ->  ios uzerinde cozunurlugu (2x) kategorisinde olan telefonlarda gosterilecek resim..
*
*   (Hangi telefonların kac X kategorisinde oldugu bilgi : https://facebook.github.io/react-native/docs/pixelratio)
*/


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={require('./src/assets/smoke.png')}/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
