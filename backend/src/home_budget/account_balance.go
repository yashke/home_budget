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
