import { TOGGLE_DRAWER } from '../actions/drawer';

export default function(state=false, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return !state;
    default:
      return state
  }
}
