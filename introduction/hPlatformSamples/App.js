/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import PlatformExamples from "./src/components/PlatformExamples";

type Props = {};
export default class App extends Component<Props> {
  render() {
    const headerStyle = Platform.select({
      ios: styles.headerIOS,
      android: styles.headerANDROID,
    });
    return (
      <SafeAreaView style={headerStyle}>
        <PlatformExamples />
      </SafeAreaView>
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
  headerIOS: {
    backgroundColor: 'blue'
  },
  headerANDROID: {
    backgroundColor: 'red'
  }
});
