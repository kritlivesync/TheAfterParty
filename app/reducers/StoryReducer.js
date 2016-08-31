import {
  FETCH_STORIES,
  FETCH_STORIES_ERROR,
} from '../actions/Types';

const stories = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STORIES:
      return {
        ...state,
        stories: action.payload
      };
    case FETCH_STORIES_ERROR:
      return {
        ...state,
        error: action.payload
      };
  }
  return state;
}

export default stories;
