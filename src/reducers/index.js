import { combineReducers } from 'redux';
import activeLevel from './ActiveLevel';
import playMode from './PlayMode';

const rootReducer = combineReducers({
   activeLevel, playMode
});

export default rootReducer;
