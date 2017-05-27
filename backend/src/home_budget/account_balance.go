package main

import (
  "github.com/jinzhu/gorm"
  _ "github.com/jinzhu/gorm/dialects/postgres"
  "time"
)

type AccountBalance struct {
  gorm.Model
  AccountId string `gorm:"size:255"`
  LastDay time.Time
  BalanceInCents int64
  BalanceCurrency string `gorm:"size:3"`
}

type serializedAccountBalance struct {
  AccountId string `json:"accountId"`
  BalanceInCents int64 `json:"balanceInCents"`
  BalanceCurrency string `json:"balanceCurrency"`
  LastDay time.Time `json:"lastDay"`
}

func serializeAccountBalance(accountBalance AccountBalance) (serializedAccountBalance) {
  serialized := serializedAccountBalance{}
  serialized.AccountId = accountBalance.AccountId
  serialized.BalanceInCents = accountBalance.BalanceInCents
  serialized.BalanceCurrency = accountBalance.BalanceCurrency
  serialized.LastDay = accountBalance.LastDay
  return serialized
}
