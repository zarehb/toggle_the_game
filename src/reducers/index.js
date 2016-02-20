import { combineReducers } from 'redux';
import lamps from './Lamps'
import activeLevel from './ActiveLevel'

const rootReducer = combineReducers({
  lamps, activeLevel
});

export default rootReducer;
