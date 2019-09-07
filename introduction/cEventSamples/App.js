/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    number: 1
  };

  onPressIncrease = () => {
    this.setState({
      number: ++this.state.number,
    });
  };

  onPressDecrease = () => {
    this.setState({
      number: --this.state.number,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.state.number}</Text>
        </View>
        <View style={styles.buttons}>
          <Button
              title={'+'}
              onPress={this.onPressIncrease}
          />
          <Button
              title={'-'}
              onPress={this.onPressDecrease}
          />
        </View>
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
  buttons: {
    flexDirection: 'row'
  }
});
