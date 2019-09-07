import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

export default class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button, {backgroundColor: this.props.bgColor}]}>
          <Text style={{color: this.props.textColor}}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center'
    }
});