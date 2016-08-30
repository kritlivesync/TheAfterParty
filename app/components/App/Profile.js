// dependencies
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

// imports
import * as actions from '../../actions/AuthActions';


// component
class Profile extends Component {

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    return(
      <View style={{ margin: 40 }}>
        <Text>Profile Page</Text>
          <Button
            onPress={() => this.handleLogout()}
          >Log out</Button>
      </View>
    );
  }
}

export default connect(null, actions)(Profile);
