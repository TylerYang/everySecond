import { combineReducers } from 'redux';
import moments from './moments';
import navigation from './navigation';

export default combineReducers({
  moments,
  navigation
});