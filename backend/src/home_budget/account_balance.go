package main

import (
  "github.com/jinzhu/gorm"
  _ "github.com/jinzhu/gorm/dialects/postgres"
)

type AccountBalance struct {
  gorm.Model
  AccountId string `gorm:"size:255"`
  BalanceInCents int64
  BalanceCurrency string `gorm:"size:3"`
}
