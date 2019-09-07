import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Input extends Component {

    state = {
        text: ''
    };

  render() {
    return (
      <View>
          <TextInput
              {...this.props} // LoginForm'daki <Input> tagindaki tum propertyler direk bu TextInput a gelsin diye yapildi..
              style={styles.input}
              value={this.state.text}
              ref={this.props.inputRef} // Username girildiginde klavyede enter a basinca password inputuna gitsin diye yapildi.
              onChangeText={text => this.setState({text})} // kullanici veri girdiginde girilen veriyi tutmak icin yapildi.
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#f1f1f1',
        marginBottom: 10
    }
});