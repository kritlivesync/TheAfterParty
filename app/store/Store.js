// dependencies & middlware
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

// root reducer
import reducer from '../reducers/RootReducer';

// create middlware
const middleware = applyMiddleware(promise(), thunk, logger());

// create store
export default createStore(reducer, middleware);
