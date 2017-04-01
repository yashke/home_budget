import { UPDATE_ACCOUNTS_BALANCES } from '../actions/bank';

var defaultState = {
  accounts: []
}

function bank(state=defaultState, action) {
  switch (action.type) {
    case UPDATE_ACCOUNTS_BALANCES:
      return Object.assign({}, state, {accounts: action.accounts});
    default:
      return state;
  }
}

export default bank;
