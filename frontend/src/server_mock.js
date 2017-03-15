import { createServer } from 'service-mocker/server';

const { router } = createServer();

router.post("/account_balances", (req, res) => {
  var responseBody = JSON.stringify({
    accounts: [
      {
        account_id: "0000 1111 2222 3333 4444 5555",
        balance_amount_cents: 123456,
        balance_currency: "zł"
      }
    ]
  });
  res.type('json');
  res.send(responseBody);
});
