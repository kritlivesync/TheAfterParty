import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'redux';

import {
  TOKEN,
  TOKEN_ERROR,
  TOKEN_SUCCESS
} from '../actions/Types';

import store from '../store/Store';

import WelcomePage from './WelcomePage';
import AuthPageWrapper from './AuthPage/AuthPageWrapper';
import AppWrapper from './App/AppWrapper';

const tokenPresent = () => {
  AsyncStorage.getItem(TOKEN, (err, token) => {
    if (err || token === null) {
      return false;
    } else {
      return true;
    }
  });
}

if (tokenPresent() === true) {
  store.dispatch({
    type: TOKEN_SUCCESS
  });
} else {
  store.dispatch({
    type: TOKEN_ERROR
  });
}

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="welcome" component={WelcomePage} hideNavBar={true} intial={true}/>
            <Scene key="auth" component={AuthPageWrapper} hideNavBar={true} />
            <Scene key="app" component={AppWrapper} hideNavBar={true}/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
