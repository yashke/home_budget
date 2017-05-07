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
)

func parseMbankFile(file multipart.File) (int64) {
  rawHtml := loadHtmlFromFile(file)
  fixedHtml := fixHtml(rawHtml)

  reader := strings.NewReader(fixedHtml)
  root, err := xmlpath.ParseHTML(reader)

  if err != nil {
    log.Fatal(err)
  }

  xpath := xmlpath.MustCompile("//table[3]//tr[5]//table//tr")
  iterator := xpath.Iter(root)
  var last *xmlpath.Node
  for iterator.Next() {
    last = iterator.Node()
  }
  return parseBalanceFromSummary(last.String())
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
