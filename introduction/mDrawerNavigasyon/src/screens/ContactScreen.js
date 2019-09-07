import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class ContactScreen extends Component {
  render() {
      const {navigate, push, goBack, getParam } = this.props.navigation; // navigate de kullanilir, push da kullanilir. Aradaki farki videodan izle :)
      return (
      <View style={styles.container}>
          <Text>Contact Page!</Text>

          {/* goBack() metodu ana sayfaya goturmeyecek cunku homepage ve detailpage aynı stackteyken
                 contact farklı stackte. Ancak goBack(null) metoduyla geri gelebilirim..*/}
          <Button title={"go to back"} onPress={() => goBack(null)}/>
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
    }
});