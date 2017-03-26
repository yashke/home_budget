import { CLOSE_DRAWER, TOGGLE_DRAWER } from '../actions/drawer';

export default function(state=false, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return !state;
    case CLOSE_DRAWER:
      return false;
    default:
      return state
  }
}
