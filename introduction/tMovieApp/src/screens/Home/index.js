import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import LogoutButton from "../../components/LogoutButton";
import MovieListItem from "./MovieList";
import { Container, Header, Content, List, ListItem, Text, Spinner } from 'native-base';
import {inject, observer} from "mobx-react";

@inject('MovieStore')
@observer
export default class Home extends Component {

  static navigationOptions = {
    headerLeft: LogoutButton
  };

  componentDidMount(): void {
    this.props.MovieStore._getMovies();
  }

  render() {
    const {MovieStore} = this.props;
    return (
      <Content>
        { MovieStore.loading && <Spinner/>}
        <List>
          <FlatList
              data={MovieStore.movies}
              keyExtractor={(item) => item._id}
              renderItem={({item}) => <MovieListItem item={item}/>}
          />
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({});