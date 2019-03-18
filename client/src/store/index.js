import { createStore } from 'redux';
import rootReducer from './reducers';

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

const store = createStore(rootReducer, initialState);

export default store;