// dependencies
import React, { Component } from 'react';
import {
  TabBarIOS
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


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
        <Icon.TabBarItemIOS
          title="Stories"
          iconName="beer"
          selected={this.state.selected === 'stories'}
          onPress={() => this.setState({ selected: 'stories'})}
        >
          <Stories />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Create Story"
          iconName="pencil"
          selected={this.state.selected === 'create'}
          onPress={() => this.setState({ selected: 'create'})}
        >
          <CreateStory />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Leaderboard"
          iconName="list-ol"
          selected={this.state.selected === 'leaderboard'}
          onPress={() => this.setState({ selected: 'leaderboard'})}
        >
          <Leaderboard />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Profile"
          iconName="user"
          selected={this.state.selected === 'profile'}
          onPress={() => this.setState({ selected: 'profile'})}
        >
          <Profile />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}
