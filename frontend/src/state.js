import { combineReducers } from 'redux';
import menu from './reducers/menu';
import drawer from './reducers/drawer';

let state = combineReducers({
  menu,
  drawer
});

export default state;
