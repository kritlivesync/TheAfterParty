import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  TOKEN,
  LOGIN_USER,
  LOGIN_ERROR,
  REGISTER_USER,
  REGISTER_USER_ERROR
} from './Types';

export function authOnLoad(token) {
  return function(dispatch) {
    axios.post('http://localhost:3030/api/v1/users/' + token)
      .then(res => {
        console.log(res.data.user[0]);
        const user = {
          username: res.data.user[0].username,
          password: res.data.user[0].password
        };
        console.log(user);
        dispatch(loginUser(user));
      })
      .catch(err => {
        console.log('Error in authOnLoad', err);
      });
  }
}

export function loginUser(user) {
  return function(dispatch) {
    console.log(user);
    console.log('In loginUser function');
    axios.post('http://localhost:3030/api/v1/users/login', user)
      .then(res => {
        console.log(res.data.user.token);
        updateToken(res.data.user.token);
        Actions.app({ something: 'something' });
        dispatch({
          type: LOGIN_USER,
          payload: res.data.user
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: LOGIN_ERROR,
          payload: err
        });
      });
  }
}

export function registerUser(user) {
  return function(dispatch) {
    axios.post('http://localhost:3030/api/v1/users/register', user)
      .then(res => {
        console.log(res);
        updateToken(res.data.user.token);
        dispatch({
          type: REGISTER_USER,
          payload: res.data.user
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: err
        });
      });
  }
}

const updateToken = async (value) => {
  try {
    await AsyncStorage.setItem(TOKEN, value);
  } catch(error) {
    console.log('AsyncStorage error', error);
  }
}
