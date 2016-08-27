// dependencies
import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// imports
import Stories from './Stories';
import Profile from './Profile';

// component
export default class AuthPageWrapper extends Component {
  render() {
    return(
      <ScrollableTabView styles={{ marginTop: 14 }}>
        <Stories tabLabel="Stories" />
        <Profile tabLabel="Profile" />
      </ScrollableTabView>
    );
  }
}
