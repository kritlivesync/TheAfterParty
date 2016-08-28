// dependencies
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AlertIOS,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

const t = require('tcomb-form-native');

// actions
import * as actions from '../../actions/AuthActions';

// form
const Form = t.form.Form;
const newUser = t.struct({
  username: t.String,
  password: t.String,
  password_confirmation: t.String
});
const options = {
  auto: 'placeholders'
};

// component
class Register extends Component {

  handlRegistration() {
    const formProps = this.refs.reg_form.getValue();

    if (formProps) {
      if (formProps.password !== formProps.password_confirmation) {
        AlertIOS.alert("Form Error", "Passwords Don't Match")
      } else {
        const user = {
          username: formProps.username,
          password: formProps.password
        };
        AlertIOS.alert(user.username, user.password);
        this.props.registerUser(user);
      }
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Form
          ref="reg_form"
          type={newUser}
          options={options}/>
        <Button
          onPress={() => this.handlRegistration()}
        >Register</Button>
    </View>
    );
  }
}

export default connect(null, actions)(Register);

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 130
  },
});
