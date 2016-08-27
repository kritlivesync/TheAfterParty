// dependencies & middlware
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// root reducer
import reducer from '../reducers/RootReducer';

// create middlware
const middleware = applyMiddleware(promise(), thunk);

// create store
export default createStore(reducer, middleware);
