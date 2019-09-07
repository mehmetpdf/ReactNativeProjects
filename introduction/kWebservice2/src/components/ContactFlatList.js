/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, FlatList, View, Image, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import axios from 'axios'

type Props = {};
export default class ContactFlatList extends Component<Props> {

    state = {
        text: '',
        page: 1,
        contacts: [],
        allContacts: [],
        loading: true,
        _refreshing: false,
    };

    getContacts = async () => {

        this.setState({
            loading: true,
        });

        const {data: {results}} = await axios.get(`https://randomuser.me/api/?results=30&page=${this.state.page}`);
        const users = [...this.state.allContacts, ...results];

        if(this.state._refreshing){
            users.reverse();
        }

        this.setState({
            contacts: users,
            allContacts: users,
            loading: false,
            _refreshing: false,
        });
    };

    componentDidMount(): void {
        this.getContacts();
    };

    _searchContacts = (text) => {
        const newContact = this.state.allContacts.filter( item => {
            const nameAndCompany = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()} ${item.location.city.toLowerCase()}`;

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

    _renderFooter = () => {
        if(!this.state.loading)
            return null;

        return(
            <View style={styles._footer}>
                <ActivityIndicator size={"large"}/>
            </View>
        )
    };

    _renderContactsItem = ({item, index}) => {
        return(
            <TouchableOpacity style = {[styles._itemContainer, {backgroundColor: index % 2 === 0 ? '#fafafa' : ''}]}>
                <Image
                    style = {styles._avatar}
                    source = {{uri: item.picture.thumbnail}}
                />
                <View style={styles._textContainer}>
                    <Text style={styles._name}>{item.name.first} {item.name.last}</Text>
                    <Text style={styles._company}>{item.location.city}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    _onRefresh = () => {
        this.setState({
            page: 1,
            _refreshing: true
        }, () => {
            this.getContacts();
        });
    };

    _loadMore = () => {
        if (this.state.text.length <= 0) {
            this.setState({
                page: this.state.page + 1,
            }, () => {
                this.getContacts();
            });
            this._duringMomentum = true;
        }
    };

    render() {
        return (
            <FlatList
                ListFooterComponent={this._renderFooter}
                ListHeaderComponent={this._renderHeader()}
                renderItem={this._renderContactsItem}
                keyExtractor={(item) => item.login.uuid}
                data={this.state.contacts}
                onEndReached={this._loadMore} // scroll asagi indikce datanin devamina yeni datalar load etmek icin..
                onEndReachedThreshold={10} // scroll ne kadar asagi inerse loading islemi baslasin? Sifir demek en dibe inince basla demek..
                                          // android tarafinda sifir calismiyordu. Sifirdan farkli bir deger vermemiz gerekiyor..
                //onMomentumScrollBegin={() => this._duringMomentum = false} // kullanici ekrani tutup asagi indirince loadMore islemi gerceklessin.
                                                                           // search yapilinca da loadMore yapiliyordu bunu engellemek icin yapildi.
                                                                           // ancak bu android tarafinda sikintili calisiyormus
                refreshing={this.state._refreshing}
                onRefresh={this._onRefresh}
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
    },
    _footer: {
        padding: 20
    }
});
