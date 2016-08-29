// dependencies
import React, { Component } from 'react';
import {
  TabBarIOS
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Tabs from 'react-native-tabs';

// imports
import Stories from './Stories';
import Profile from './Profile';
import CreateStory from './CreateStory';
import Leaderboard from './Leaderboard';

// component
export default class AuthPageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'stories'
    }
  }
  render() {
    return(
      <TabBarIOS
        unselectedTintColor='grey'
        tintColor='white'
        barTintColor='lightgreen'
      >
        <TabBarIOS.Item
          title="Stories"
          selected={this.state.selected === 'stories'}
          onPress={() => this.setState({ selected: 'stories'})}
        >
          <Stories />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Create Story"
          selected={this.state.selected === 'create'}
          onPress={() => this.setState({ selected: 'create'})}
        >
          <CreateStory />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Leaderboard"
          selected={this.state.selected === 'leaderboard'}
          onPress={() => this.setState({ selected: 'leaderboard'})}
        >
          <Leaderboard />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Profile"
          selected={this.state.selected === 'profile'}
          onPress={() => this.setState({ selected: 'profile'})}
        >
          <Profile />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
