// dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
const User = t.struct({
  username: t.String,
  password: t.String,
});
const options = {
  auto: 'placeholders'
};

// component
class Login extends Component {

  componentDidMount() {
    this.refs.login_form.getComponent('username').refs.input.focus();
  }

  handleLogin() {
    const formProps = this.refs.login_form;
    if (formProps) {
      const user = {
        username: formProps.username,
        password: formProps.password
      }
      this.props.loginUser(user);
    }
  }

  render() {
    return(
      <Content style={styles.container}>
        <Form
          ref="login_form"
          type={User}
          options={options}/>
        <Button
          block
          info
          onPress={() => this.handleLogin()}
        >Login</Button>
      </Content>
    );
  }
}

export default connect(null, actions)(Login);

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 160
  },
});
