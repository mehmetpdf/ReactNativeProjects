import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {inject} from "mobx-react";

@inject('AuthStore')
export default class LogoutButton extends Component {
  render() {
    return (
      <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.AuthStore._removeToken()}
      >
          <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontSize: 18
    }
});
