import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import {observer} from "mobx-react";

import UserStore from "../store/UserStore";

@observer
export default class Users extends Component {
  render() {
    return (
      <View>
          {
              UserStore.loading
                  ? <ActivityIndicator size={"small"}/>
                  : <Button title={"fetch users"} onPress={() => UserStore._fetchUser()} />
          }

          <View>
              {
                  UserStore.users.map((users, key) => (
                      <View key={key}>
                          <Text>{users.name.first}</Text>
                      </View>
                  ))
              }
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});