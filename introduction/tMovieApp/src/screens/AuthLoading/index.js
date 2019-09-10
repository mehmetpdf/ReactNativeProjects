import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {inject} from "mobx-react";


/**
 * Bu sayfanın amacı şu:
 * Kullanıcı uygulamadan çıkıp tekrar girdiği zaman
 * telefon hafızasında hala token i duruyorsa bu sayfa üzerinden
 * ya anasayfaya yönlendireceğiz
 * ya da sign in sayfasina yönlendireceğiz.
 */

@inject('AuthStore')
export default class AuthLoading extends Component {

  async componentDidMount(): void {
    await this.props.AuthStore._setupAuth();
  }

  render() {
    return (
      <SafeAreaView>
          <Text>Authloading page</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});