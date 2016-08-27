// dependencies
import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// imports
import Login from './Login';
import Register from './Register';

// component
export default class AuthPageWrapper extends Component {
  render() {
    return(
      <ScrollableTabView style={{ marginTop: 16 }}>
        <Register tabLabel="Register" />
        <Login tabLabel="Login" />
      </ScrollableTabView>
    );
  }
}
