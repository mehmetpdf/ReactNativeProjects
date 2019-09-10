import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import LogoutButton from "../../components/LogoutButton";
import MovieListItem from "../../components/MovieList";
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class Home extends Component {

  static navigationOptions = {
    headerLeft: LogoutButton
  }

  render() {
    return (
      <Content>
        <List>
          <FlatList
              data={[{key: 'a'}, {key: 'b'}]}
              renderItem={({item}) => <MovieListItem item={item}/>}
          />
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({});