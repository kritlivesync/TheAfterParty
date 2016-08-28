// dependencies
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AlertIOS,
  AsyncStorage,
  Text
} from 'react-native';
import { TOKEN } from '../actions/Types';
import { connect } from 'react-redux';
import * as actions from '../actions/AuthActions';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class WelcomePage extends Component {
  componentDidMount() {
    AsyncStorage.getItem(TOKEN, (err, token) => {
      console.log(token);
      if (err || token === null) {
        Actions.auth();
      } else {
        Actions.app();
      }
    });
  }
  render() {
    return(
      <View>
        <Text>Logo Will Go On This Page</Text>
      </View>
    );
  }
}
