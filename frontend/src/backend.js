import superagent from 'superagent';
import { each, map } from 'lodash';
import promisifySuperagent from 'superagent-promise';
import Account from './account';
import Money from './money';

var promisedRequester = promisifySuperagent(superagent, Promise);

export function addFiles(files) {
  var promise = new Promise((resolve, reject) => {
    var request = promisedRequester.post("/account_balances");
    each(files, (file) => {
      request.field("file[]", file);
    });
    request.then((response) => {
      var accounts = _.map(response.body.accounts, (rawAccount) => {
        var balance = new Money(rawAccount.balance_amount_cents, rawAccount.balance_currency);
        return new Account(rawAccount.account_id, balance);
      });
      resolve(accounts);
    });
  });

  return promise;
}
