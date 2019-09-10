import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';


const MovieListItem = ({ item }) => (
    <ListItem noIndent >
        <Left>
            <Text>{item.title}</Text>
        </Left>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
    </ListItem>
);

export default MovieListItem;