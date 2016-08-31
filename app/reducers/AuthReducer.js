// imports
import {
  FETCH_USER,
  FETCH_USER_ERROR,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_ERROR,
  REGISTER_USER,
  REGISTER_USER_ERROR
} from '../actions/Types';

// reducer
const auth = (state = {}, action) => {
  switch(action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        fetch_user_error: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login_error: 'Unable to login user'
      };
    case REGISTER_USER:
      return {
        ...state,
        message: 'User registered'
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        register_user_error: 'Unable to register user'
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: '',
        message: 'User logged out'
      };
  }
  return state;
}

export default auth;
