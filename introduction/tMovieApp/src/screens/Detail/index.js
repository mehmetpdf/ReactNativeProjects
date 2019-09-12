import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import LogoutButton from "../../components/LogoutButton";
import MovieListItem from "../Home/MovieList";
import { Container, Header, Content, List, ListItem, Text, Spinner } from 'native-base';
import {inject, observer} from "mobx-react";

export default class Detail extends Component {
  constructor(props){
    super(props);
    this.item = props.navigation.getParam('item');

  }


  render() {
    const {MovieStore} = this.props;
    return (
        <View>
          <Text>{this.item.title}</Text>
          <Text>{this.item.imdb_score}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({});