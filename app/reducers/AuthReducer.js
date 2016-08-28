import {
  AUTH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_ERROR,
  REGISTER_USER,
  REGISTER_USER_ERROR
} from '../actions/Types';

const auth = (state = {}, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: 'Unable to login user'
      }
    case REGISTER_USER:
      return {
        ...state,
        message: 'User registered'
      }
    case REGISTER_USER_ERROR:
      return {
        ...state,
        error: 'Unable to register user'
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: '',
        message: 'User logged out'
      }
  }
  return state;
}

export default auth;
