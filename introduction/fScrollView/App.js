/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>1</Text>
          <Text style={styles.title}>2</Text>
          <Text style={styles.title}>3</Text>
          <Text style={styles.title}>4</Text>
          <Text style={styles.title}>5</Text>
          <Text style={styles.title}>6</Text>
          <Text style={styles.title}>7</Text>
          <Text style={styles.title}>8</Text>
          <Text style={styles.title}>9</Text>
          <Text style={styles.title}>10</Text>
        </ScrollView>
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
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  title: {
    textAlign: 'center',
    backgroundColor: 'pink',
    marginVertical: 10,
    paddingVertical: 60,
    borderRadius: 40
  }
});
