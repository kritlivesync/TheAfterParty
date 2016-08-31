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
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

// imports
import { TOKEN } from '../actions/Types';
import * as actions from '../actions/AuthActions';

// component
class WelcomePage extends Component {
  componentDidMount() {
    AsyncStorage.getItem(TOKEN, (err, token) => {
      console.log(token);
      if (err || token === null) {
        Actions.auth();
      } else {
        this.props.beforeLoadActions(token);
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

export default connect(null, actions)(WelcomePage);
