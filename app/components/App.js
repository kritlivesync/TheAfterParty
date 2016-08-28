import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'redux';

import store from '../store/Store';

import WelcomePage from './WelcomePage';
import AuthPageWrapper from './AuthPage/AuthPageWrapper';
import AppWrapper from './App/AppWrapper';

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={WelcomePage} hideNavBar={true} initial={true}/>
            <Scene key="auth" component={AuthPageWrapper} hideNavBar={true} />
            <Scene key="app" component={AppWrapper} hideNavBar={true} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
