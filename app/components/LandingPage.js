import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AuthPageWrapper from './AuthPage/AuthPageWrapper';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import * as actions from '../actions/AuthActions';

class LandingPage extends Component {
  getAuth() {
    AsyncStorage.getItem('TOKEN', (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        this.props.authOnLoad(res);
      }
    });
  }

  render() {
    return(
      <View style={{ margin: 20 }}>
        <Button
          onPress={() => this.getAuth()}
        >
          Click Me
        </Button>
      </View>
    );
  };
}

export default connect(null, actions)(LandingPage);
