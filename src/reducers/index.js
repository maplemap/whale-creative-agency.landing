import { combineReducers } from 'redux';
import page from './page';
import errors from './errors';

export default combineReducers({
  page,
  errors
});
