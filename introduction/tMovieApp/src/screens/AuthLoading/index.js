import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


/**
 * Bu sayfanın amacı şu:
 * Kullanıcı uygulamadan çıkıp tekrar girdiği zaman
 * telefon hafızasında hala token i duruyorsa bu sayfa üzerinden
 * ya anasayfaya yönlendireceğiz
 * ya da sign in sayfasina yönlendireceğiz.
 */

export default class AuthLoading extends Component {
  render() {
    return (
      <SafeAreaView>
          <Text>Authloading page</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});