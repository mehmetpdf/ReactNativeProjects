/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

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
          <View style={styles.slideOne}></View>
          <View style={styles.slideTwo}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
          </View>
        </View>
    );
  }
}

// flex: 1                  -> Ekranin 1'e bolunecegini soyler.
// flex: 2                  -> Ekranin 2'ye bolunecegini soyler.
// flexDirection: 'column'  -> kutular altalta siralanir. Yani birincil eksen dikey olur..
// flexDirection: 'row'     -> kutular yanyana siralanir. Yani birincil eksen yatay olur..

/*
* justifyContent: 'center' -> birincil eksende elemanlarin nasil konumlandiracagini belirler..
*
* - flex-start    -> ekranin en basindan hizalar..
* - flex-end      -> ekranin en sonundan hizalar..
* - center        -> ekranin ortasindan hizalar..
* - space-between -> nesneleri en son ve en basa yaslayarak, aralarina esit bosluklar ekleyerek dizer..
* - space-around  -> nesneleri en son ve en basa yaslamadan tüm araliklara esit bosluklar ekleyerek dizer..
*/

/*
* alignItems: 'center'     -> ikincil eksende elemanlarin nasil konumlandiracagini belirler..
*
* - flex-start    -> ekranin en basindan hizalar..
* - flex-end      -> ekranin en sonundan hizalar..
* - stretch       ->
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  slideOne: {
    backgroundColor: '#6E6E6E',
    flex: 1
  },
  slideTwo: {
    backgroundColor: '#242424',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100
  },
  box1:{
    backgroundColor: '#B8B8B8',
  },
  box2:{
    backgroundColor: '#778899',
  },
  box3:{
    backgroundColor: '#2F4F4F',
  }
});

