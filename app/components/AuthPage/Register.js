// dependencies
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AlertIOS,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
const t = require('tcomb-form-native');
import Button from 'react-native-button';

// imports
import * as actions from '../../actions/AuthActions';

// form
const Form = t.form.Form;
const School = t.enums({
  Purdue: 'Purdue',
  Indiana: 'Indiana',
  Michigan: 'Michigan',
  MichiganState: 'Michigan State',
  Northwestern: 'Northwestern'
});
const User = t.struct({
  username: t.String,
  password: t.String,
  password_confirmation: t.String,
  school: School
});
const options = {
  fields: {
    username: {
      label: 'Username',
      placeholder: 'fratbro123'
    },
    password: {
      label: 'Password',
      secureTextEntry: true,
      placeholder: 'password123'
    },
    password_confirmation: {
      label: 'Confirm Password',
      secureTextEntry: true,
      placeholder: 'password123'
    },
    school: {
      label: 'School you attend'
    }
  }
};

// component
class Register extends Component {

  handleRegistration() {
    const formProps = this.refs.reg_form.getValue();
    if (formProps) {
      if (formProps.password !== formProps.password_confirmation) {
        AlertIOS.alert('Form Error', 'Passwords Do Not Match');
      } else {
        const user = {
          username: formProps.username,
          password: formProps.password,
          school: formProps.school
        };
        this.props.registerUser(user);
      }
    } else {
      AlertIOS.alert('Form Error', 'Invalid form');
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Form
          ref="reg_form"
          type={User}
          options={options}/>
          <Button
            onPress={() => this.handleRegistration()}
            containerStyle={styles.buttonContainerStyle}
            style={styles.buttonStyle}>
            Sign Up!
          </Button>
      </View>
    );
  }
}

// connect to store
export default connect(null, actions)(Register);

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 90
  },
  buttonStyle: {
    fontSize: 20,
    color: 'white'
  },
  buttonContainerStyle: {
    padding:10,
    height:45,
    overflow:'hidden',
    backgroundColor: '#FF7E82'
  }
});
