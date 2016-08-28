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
import * as actions from '../actions/AuthActions';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

  }
  // componentDidMount() {
  //   AsyncStorage.getItem('TOKEN', (err, res) => {
  //     if (err || res == null) {
  //       Actions.auth();
  //       console.log(err);
  //     } else {
  //       console.log(res);
  //       Actions.app();
  //     }
  //   });
  // }
  render() {
    return(
      <Text>Logo Will Go On This Page</Text>
    );
  }
}

export default connect()(WelcomePage);
