import { combineReducers } from 'redux';

// reducers
import auth from './AuthReducer';
import stories from './StoryReducer';

export default combineReducers({
  auth,
  stories
});
