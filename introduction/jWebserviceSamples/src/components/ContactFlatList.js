/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, FlatList, View, Image, TouchableOpacity, TextInput} from 'react-native';
import data from '../../data.js'

type Props = {};
export default class ContactFlatList extends Component<Props> {

    state = {
        text: '',
        contacts: data
    };

    _searchContacts = (text) => {
        const newContact = data.filter( item => {
            const nameAndCompany = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

            return nameAndCompany.indexOf(text.toLowerCase()) > -1;
        });

        this.state.contacts = newContact;
    };

    _renderHeader = () => {
        const {text} = this.state;
        return(
            <View style={styles._searchContainer}>
                <TextInput
                    onChangeText={ text => {
                        this.setState({
                            text: text,
                        });

                        this._searchContacts(text);
                    }}
                    value={text}
                    placeholder="Search"
                    style={styles._searchInput}
                />
            </View>
        )
    };

    _renderContactsItem = ({item, index}) => {
        return(
            <TouchableOpacity style = {[styles._itemContainer, {backgroundColor: index % 2 === 0 ? '#fafafa' : ''}]}>
                <Image
                    style = {styles._avatar}
                    source = {{uri: item.picture}}
                />
                <View style={styles._textContainer}>
                    <Text style={styles._name}>{item.name}</Text>
                    <Text style={styles._company}>{item.company}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <FlatList
                ListHeaderComponent={this._renderHeader()}
                renderItem={this._renderContactsItem}
                keyExtractor={(item) => item._id}
                data={this.state.contacts}
            />
        );
    }
}

const styles = StyleSheet.create({
    _itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    _avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginHorizontal: 10
    },
    _name: {
        fontSize: 16
    },
    _company: {
    },
    _textContainer: {
        justifyContent: 'space-around'
    },
    _searchContainer: {
        padding: 10
    },
    _searchInput: {
        fontSize: 16,
        padding: 10,
        backgroundColor: '#f9f9f9'
    }
});
