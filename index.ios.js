import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class TheAfterParty extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('TheAfterParty', () => TheAfterParty);
