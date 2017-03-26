import Page from '../page.js';
import WelcomePage from '../welcome_page';
import UpdateAccountsBalancesPage from '../update_accounts_balances_page';
import { GO_TO_PAGE } from '../actions/menu';

let defaultState = {
  pages: [
    new Page("Home", WelcomePage),
    new Page("Update accounts balances", UpdateAccountsBalancesPage)
  ],
  currentPage: new Page("Home", WelcomePage)
}

export default function(state=defaultState, action) {
  switch (action.type) {
    case GO_TO_PAGE:
      return Object.assign({}, state, { currentPage: action.page });
  }
  return state;
}
