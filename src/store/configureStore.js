import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
  const store = compose(
    applyMiddleware(thunkMiddleware)
  )(createStore)(rootReducer, initialState);

  return store;
}
