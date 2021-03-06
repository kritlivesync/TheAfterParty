// dependencies
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { fetchStories } from './StoryActions';

// imports
import {
  TOKEN,
  FETCH_USER,
  FETCH_USER_ERROR,
  LOGOUT_USER,
  LOGIN_USER,
  LOGIN_ERROR,
  REGISTER_USER,
  REGISTER_USER_ERROR
} from './Types';

// functions
export function beforeLoadActions(token) {
  return function(dispatch) {
    dispatch(fetchStories());

    // get the info of the current user
    axios.get('http://localhost:3030/api/v1/users/' + token)
      .then(res => {
        console.log('Response: ', res.data.user[0]);
        Actions.app();
        dispatch({
          type: FETCH_USER,
          payload: res.data.user[0]
        });
      })
      .catch(function(error) {
        console.log('Error: ', error);
        dispatch({
          type: FETCH_USER_ERROR,
          payload: error 
        });
      });
  }
}

export function logoutUser() {
  return function(dispatch) {
    AsyncStorage.removeItem(TOKEN, (err) => {
      if (err) {
        console.log('AsyncStorage error: ', err);
      } else {
        Actions.auth();
        dispatch({
          type: LOGOUT_USER,
          payload: 'User logged out'
        });
      }
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
        Actions.app();
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
        dispatch(loginUser(res.data.user));
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
