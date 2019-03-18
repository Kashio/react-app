import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {
  user: {
      name: null,
      status: null,
      request: {
          status: null,
          error: null
      }
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;