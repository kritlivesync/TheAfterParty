// dependencies
import React, { Component } from 'react';
import {
  TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// imports
import Login from './Login';
import Register from './Register';

// component
export default class AuthPageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'login'
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
          title="Login"
          iconName="home"
          selected={this.state.selected === 'login'}
          onPress={() => this.setState({ selected: 'login'})}
        >
          <Login />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Register"
          iconName="edit"
          selected={this.state.selected === 'register'}
          onPress={() => this.setState({ selected: 'register'})}
        >
          <Register />
        </Icon.TabBarItemIOS>
      </TabBarIOS>


    );
  }
}
