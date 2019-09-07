import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from "../components/Input";
import MyButton from "../components/MyButton";

export default class LoginForm extends Component {
  render() {
    return (
      <View>
          <Text style={styles.loginText1}> Sign In </Text>
          <Input
              placeholder={"Username"}
              returnKeyType={"next"}
              onSubmitEditing={() => this.passwordInput.focus()} // Username girildiginde klavyede enter a basinca password inputuna gitsin diye yapildi.
          />
          <Input
              placeholder={"Password"}
              secureTextEntry={true}
              inputRef={input => this.passwordInput = input} // Username girildiginde klavyede enter a basinca password inputuna gitsin diye yapildi.
          />

          <MyButton
            text={"Sign In Now"}
            bgColor={"#1E90FF"}
            textColor={"#f1f1f1"}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    loginText1: {
        textAlign: 'left',
        fontSize: 15,
        color: 'black',
        paddingTop: 25,
        paddingBottom: 25,
}
});