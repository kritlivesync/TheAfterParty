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
const API_URL = 'http://localhost:3030/api/v1/users';

export function loginUser(user) {
  return function(dispatch){
    axios.post('http://localhost:3030/api/v1/users/login', user)
      .then(res => {
        console.log(res);
        // updateToken(res.data.token);
        // dispatch({
        //   type: LOGIN_USER,
        //   payload: res.data.user
        // });
        // Actions.app();
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
        // updateToken(res.data.token);
        // dispatch({
        //   type: REGISTER_USER,
        //   payload: res.data.user
        // });
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
