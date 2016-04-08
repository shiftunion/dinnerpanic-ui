import {combineReducers} from 'redux';
import mealsAppState from './meals';
import menuAppState from './menu';

const rootReducer = combineReducers({
  mealsAppState,
  menuAppState
});

export default rootReducer;
