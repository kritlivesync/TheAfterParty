// dependencies
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
const t = require('tcomb-form-native');

// actions
import * as actions from '../../actions/AuthActions';

// form
const Form = t.form.Form;
const User = t.struct({
  username: t.String,
  password: t.String,
});
const options = {
  auto: 'placeholders'
};

// component
class Login extends Component {

  handleLogin() {
    const formProps = this.refs.login_form.getValue();
    if (formProps) {
      const user = {
        username: formProps.username,
        password: formProps.password
      }
      this.props.loginUser(user);
    }
    AsyncStorage.getItem('TOKEN', (err, res) => {
      if (res) {
        Actions.app();
      }
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Form
          ref="login_form"
          type={User}
          options={options}/>
        <Button
          onPress={() => this.handleLogin()}
        >Login</Button>
    </View>
    );
  }
}

// connect to store
export default connect(null, actions)(Login);

// styles
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 160
  },
});
