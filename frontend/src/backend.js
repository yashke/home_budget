import superagent from 'superagent';
import { each } from 'lodash';
import promisifySuperagent from 'superagent-promise';

var promisedRequester = promisifySuperagent(superagent, Promise);

export function addFiles(files) {
  var request = promisedRequester.post("/account_balances");
  each(files, (file) => {
    request.field("file[]", file);
  });
  request.then((response) => {
    console.dir(response);
  });
}
