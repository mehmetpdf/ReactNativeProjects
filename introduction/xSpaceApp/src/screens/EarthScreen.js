import React, { Component } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import earthData from "../data/earthData";
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import { ListItem } from 'react-native-elements'


export default class EarthScreen extends Component {

    state = {
        questions: earthData,

    };

    _renderQuestionsItem = ({item, index}) => {
        return(
            /*<TouchableOpacity>
                <Image
                    style={styles.avatar}
                    source={{uri: item.picture}}
                />
                <View>
                    <Text>{item.question}</Text>
                </View>
            </TouchableOpacity>*/
            <ListItem
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                }}
                ViewComponent={LinearGradient} // Only if no expo
                leftAvatar={{ rounded: true, source: {uri: item.picture} }}
                title={item.question}
                titleStyle={{ color: 'white', fontWeight: 'bold' }}
                subtitleStyle={{ color: 'white' }}
                subtitle={item.question}
                chevron={{ color: 'white' }}
                style={styles._item}
            />

        )
    };

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    renderItem={this._renderQuestionsItem}
                    keyExtractor={(item) => item._id}
                    data={this.state.questions}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50
    },
    _item: {
        margin: 5
    }
});