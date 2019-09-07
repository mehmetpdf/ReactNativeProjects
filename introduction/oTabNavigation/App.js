import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routers from "./src/Routers";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Routers/>
    );
  }
}

