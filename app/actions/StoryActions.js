import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    FETCH_STORIES,
    FETCH_STORIES_ERROR
} from './Types';

export function fetchStories() {
  return function(dispatch) {
    axios.get('http://localhost:3030/api/v1/stories')
      .then(res => {
        console.log('Response: ', res.data.stories);
        dispatch({
          type: FETCH_STORIES,
          payload: res.data.stories
        });
      })
      .catch(err => {
        console.log('Error: ', err);
        dispatch({
          type: FETCH_STORIES_ERROR,
          payload: err
        });
      });
  }
}
