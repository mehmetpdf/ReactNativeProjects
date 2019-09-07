import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';


export default class Cards extends Component {
  render() {
      const {text, backgroundColor} = this.props;
    return (
        <View style={[styles.cardContainer, {backgroundColor}]}>
            <Text>{text}</Text>
        </View>
    );
  }
}

Cards.propTypes = {
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 200,
        height: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});