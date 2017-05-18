package main

import (
  "mime/multipart"
  "bytes"
  "strings"
  "io"
  "golang.org/x/net/html"
  "gopkg.in/xmlpath.v2"
  "log"
  "regexp"
  "strconv"
  "time"
)

func parseMbankFile(file multipart.File) (AccountBalance) {
  rawHtml := loadHtmlFromFile(file)
  fixedHtml := fixHtml(rawHtml)

  reader := strings.NewReader(fixedHtml)
  root, err := xmlpath.ParseHTML(reader)

  if err != nil {
    log.Fatal(err)
  }

  accountId := fetchAccountId(root)
  balanceInCents := fetchClosingBalance(root)
  lastDay := fetchBalanceDate(root)

  accountBalance := AccountBalance{AccountId: accountId, BalanceInCents: balanceInCents, BalanceCurrency: "PLN", LastDay: lastDay}

  return accountBalance
}

func fetchClosingBalance(root *xmlpath.Node) (int64) {
  xpath := xmlpath.MustCompile("//table[3]//tr[5]//table//tr")
  iterator := xpath.Iter(root)
  var last *xmlpath.Node
  for iterator.Next() {
    last = iterator.Node()
  }
  return parseBalanceFromSummary(last.String())
}

func fetchAccountId(root *xmlpath.Node) (string) {
  xpath := xmlpath.MustCompile("//table[3]//tr[3]//table//tr[4]//td[2]")
  value, _ := xpath.String(root)
  return value
}

func fetchBalanceDate(root *xmlpath.Node) (time.Time) {
  xpath := xmlpath.MustCompile("//table[3]//tr[1]//h5")
  balanceDateString, _ := xpath.String(root)
  balanceDateRegexp := regexp.MustCompile("do \\d{2}-\\d{2}-\\d{4}")
  balanceWideDateString := balanceDateRegexp.FindString(balanceDateString)
  balanceDate := strings.Replace(balanceWideDateString, "do ", "", 1)
  date, _ := time.Parse("02-01-2006", balanceDate)
  return date
}

func loadHtmlFromFile(file multipart.File) (string) {
  buffer := bytes.NewBuffer(nil)
  io.Copy(buffer, file)
  file.Close()

  return string(buffer.Bytes())
}

func fixHtml(document string) (string) {
  reader := strings.NewReader(document)
  root, err := html.Parse(reader)

  if err != nil {
    log.Fatal(err)
  }

  var fixingBuffer bytes.Buffer
  html.Render(&fixingBuffer, root)
  return fixingBuffer.String()
}

func parseBalanceFromSummary(summaryContent string) (int64) {
  balanceRegexp := regexp.MustCompile("\\d+,\\d+")
  balanceString := balanceRegexp.FindString(summaryContent)
  balanceInCentsString := strings.Replace(balanceString, ",", "", 1)
  balanceInCents, _ := strconv.ParseInt(balanceInCentsString, 10, 64)
  return balanceInCents
}
