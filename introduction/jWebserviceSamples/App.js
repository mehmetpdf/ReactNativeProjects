/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';
import ContactFlatList from "./src/components/ContactFlatList";
import axios from 'axios';

export default class App extends Component {

    state = {
        name: '',
        surname: '',
        loading: true
    };

    _randomGenarateName = () => {

        this.setState({
            loading: true,
        });

        axios
            .get('https://randomuser.me/api/')
            .then(user => user.data.results[0])
            .then(user => this.setState({
                name: user.name.first,
                surname: user.name.last,
                loading: false
            }));
    };

    componentDidMount(): void {
        this._randomGenarateName()
    }

    render() {
      const {name, surname, loading} = this.state;
        return (

            <SafeAreaView style={styles.container}>
              {/*<ContactFlatList/>*/}
              <View>
                  <View style={styles.main}>
                      {
                          loading ? <Text style={styles.text}>Loading..</Text> :  <Text style={styles.text}>{name} {surname}</Text>
                      }
                  </View>
                  <Button
                      title={"Random Generate Name"}
                      onPress={this._randomGenarateName}
                  />
              </View>
            </SafeAreaView>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        padding: 10,
        fontSize: 20
    }
});
