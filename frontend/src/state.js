import { combineReducers } from 'redux';
import menu from './reducers/menu';
import drawer from './reducers/drawer';
import bank from './reducers/bank';

let state = combineReducers({
  menu,
  drawer,
  bank
});

export default state;
