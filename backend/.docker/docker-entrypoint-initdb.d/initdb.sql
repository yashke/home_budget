CREATE TABLE account_balances (
  account_id CHAR(26) NOT NULL,
  balance_in_cents INTEGER NOT NULL,
  currency CHAR(3) NOT NULL,
  created_at TIMESTAMP NOT NULL
) WITH (OIDS=FALSE);
