import { addFiles } from '../backend';

export const UPDATE_ACCOUNTS_BALANCES = 'UPDATE_ACCOUNTS_BALANCES';

export function uploadAccountBalances(files) {
  return (dispatch) => {
    addFiles(files).then((accounts) => {
      dispatch({
        type: UPDATE_ACCOUNTS_BALANCES,
        accounts: accounts
      });
    });
  };
}
