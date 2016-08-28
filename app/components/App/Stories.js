// dependencies
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import * as actions from '../../actions/AuthActions';

// component
class Stories extends Component {

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    return(
      <View>
        <Text>Stories Page</Text>
        <Button
          onPress={() => this.handleLogout()}
        >Log out</Button>
      </View>
    );
  }
}

export default connect(null, actions)(Stories);
