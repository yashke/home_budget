package main

import (
  "net/http"
  "mime/multipart"
  "fmt"
  "os"
  "encoding/json"
  "github.com/gorilla/mux"
  "github.com/jinzhu/gorm"
  _ "github.com/jinzhu/gorm/dialects/postgres"
)

type DbConfig struct {
  username string
  password string
  dbname string
}

func main() {
  db := initializeDb()
  defer db.Close()
  router := mux.NewRouter()
  router.HandleFunc("/account_balances", addDbToHttpHandler(db, welcomeHandler))
  http.Handle("/", router)
  http.ListenAndServe("0.0.0.0:80", nil)
}

func addDbToHttpHandler(db *gorm.DB, withDbHandler func(*gorm.DB, http.ResponseWriter, *http.Request)) http.HandlerFunc {
  return func(writer http.ResponseWriter, request *http.Request) {
    withDbHandler(db, writer, request)
  }
}

func welcomeHandler(db *gorm.DB, writer http.ResponseWriter, request *http.Request) {
  request.ParseMultipartForm(32 << 20)
  form := request.MultipartForm
  uploadedFiles := form.File["file[]"]
  serializedAccountBalances := []serializedAccountBalance{}

  for i, _ := range uploadedFiles {
    accountBalance := parseUploadedFile(uploadedFiles[i])
    db.Create(&accountBalance)
    serializedAccountBalance := serializeAccountBalance(accountBalance)
    serializedAccountBalances = append(serializedAccountBalances, serializedAccountBalance)
  }

  jsonResponse, _ := json.Marshal(serializedAccountBalances)
  writer.Write(jsonResponse)
}

func parseUploadedFile(uploadedFile *multipart.FileHeader) (AccountBalance) {
  file, _ := uploadedFile.Open()
  return parseMbankFile(file)
}

func loadDbConfig() string {
  hostname := os.Getenv("POSTGRES_HOSTNAME")
  username := os.Getenv("POSTGRES_USER")
  password := os.Getenv("POSTGRES_PASSWORD")
  dbname := os.Getenv("POSTGRES_DB")

  configLine := fmt.Sprintf("host=%s user=%s dbname=%s sslmode=disable password=%s",
    hostname,
    username,
    dbname,
    password,
  )

  return configLine
}

func initializeDb() *gorm.DB {
  dbConfig := loadDbConfig()
  db, err := gorm.Open("postgres", dbConfig)
  if err != nil {
    panic(err)
  }
  db.AutoMigrate(&AccountBalance{})
  return db
}
