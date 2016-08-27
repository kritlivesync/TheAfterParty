// dependencies
import React, { Component } from 'react';
import {
  StyleSheet,
  AlertIOS
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button
} from 'native-base';
import { connect } from 'react-redux';
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

  componentDidMount() {
    this.refs.reg_form.getComponent('username').refs.input.focus();
  }

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
      <Content style={styles.container}>
        <Form
          ref="reg_form"
          type={newUser}
          options={options}/>
        <Button
          block
          info
          onPress={() => this.handlRegistration()}
        >Register</Button>
      </Content>
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
