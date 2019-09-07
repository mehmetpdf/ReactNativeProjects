/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ContactFlatList from "./src/components/ContactFlatList";

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ContactFlatList/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
