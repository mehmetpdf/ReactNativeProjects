import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CounterStore from "../store/CounterStore";
import {observer} from "mobx-react";

@observer //Counterstore de tanimlanmis olan observable tanimlarini bu class uzerinde takip edilebilir bit yapida  oldugunu belirtiyoruz.
export default class Counter extends Component {
  render() {
    return (
      <View>
          <Text style={styles.text}>{CounterStore.count}</Text>
          <View style={styles.button}>
              <Button
                  title={"Azalt"}
                  onPress={() => CounterStore.azalt()}
              />
              <Button
                  title={"Arttır"}
                  onPress={() => CounterStore.arttir()}
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    button: {
        flexDirection: 'row'
    }
});