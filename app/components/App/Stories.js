// dependencies
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

// imports
import StoryList from './StoryList';

// component
export default class Stories extends Component {
  render() {
    return(
      <View style={{ margin: 40 }}>
        <Text>Stories Page</Text>
      </View>
    );
  }
}
