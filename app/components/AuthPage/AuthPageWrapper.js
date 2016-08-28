// dependencies
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import * as actions from '../../actions/AuthActions';

// imports
import Login from './Login';
import Register from './Register';

// component
class AuthPageWrapper extends Component {
  render() {
    return(
      <ScrollableTabView style={{ marginTop: 16 }}>
        <Register tabLabel="Register" />
        <Login tabLabel="Login" />
      </ScrollableTabView>
    );
  }
}

export default connect(null, actions)(AuthPageWrapper);
