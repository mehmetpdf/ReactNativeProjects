import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class DrawerComponent extends Component {
    _openMenu = () => {
        this.props.navigation.toggleDrawer();
    };

  render() {
    return (
      <View>
              <TouchableOpacity
                  style={styles.container}
                  onPress={this._openMenu}
              >
                  <Icon
                      name={"md-menu"}
                      size={26}
                  />
              </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});