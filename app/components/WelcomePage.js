// dependencies
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AlertIOS,
  AsyncStorage,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class WelcomePage extends Component {
  componentDidMount() {
    AsyncStorage.getItem('TOKEN', (err, res) => {
      if (err || res == null) {
        Actions.auth();
        console.log(err);
      } else {
        console.log(res);
        Actions.app();
      }
    });
  }
  render() {
    return(
      <Text>Logo Will Go On This Page</Text>
    );
  }
}
