import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Router from "./src/Router";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router/>
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
});
