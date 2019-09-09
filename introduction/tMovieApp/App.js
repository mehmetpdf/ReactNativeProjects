/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from "mobx-react";
import Router from "./src/Router";

// mobx store
import store from './src/store'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        // ...store demek; store altindaki herseyi al demek..
        <Provider {...store}>
          <Router/>
        </Provider>
    );
  }
}


