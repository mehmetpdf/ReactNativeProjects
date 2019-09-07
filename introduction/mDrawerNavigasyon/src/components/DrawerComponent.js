import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons websitesindeki iconlari kullancagiz..

export default class DrawerComponent extends Component {
    toogleMenu = () => {
        this.props.navigation.toggleDrawer(); // toggleDrawer: menü aciksa kapatir, kapaliysa acar..
    };

  render() {
    return (
      <TouchableOpacity
          style={styles.container}
          onPress={this.toogleMenu}
      >
          <Icon
            name={"ios-menu"}
            size={24}
          />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    }
});