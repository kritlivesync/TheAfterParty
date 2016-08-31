// dependencies
import React, { Component } from 'react';
import {
  TabBarIOS
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


// imports
import Stories from './Stories';
import Profile from './Profile';
import Leaderboard from './Leaderboard';
import CreateStory from './CreateStory';

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
        unselectedTintColor='green'
        tintColor='#FF7E82'
        barTintColor='white'
      >
        <Icon.TabBarItemIOS
          iconName='ios-beer-outline'
          selected={this.state.selected === 'stories'}
          onPress={() => this.setState({ selected: 'stories'})}
        >
          <Stories />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName='ios-list-box-outline'
          selected={this.state.selected === 'leaderboard'}
          onPress={() => this.setState({ selected: 'leaderboard'})}
        >
          <Leaderboard />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName='ios-create-outline'
          selected={this.state.selected === 'create'}
          onPress={() => this.setState({ selected: 'create'})}
        >
          <CreateStory />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          iconName='ios-contact-outline'
          selected={this.state.selected === 'profile'}
          onPress={() => this.setState({ selected: 'profile'})}
        >
          <Profile />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}
