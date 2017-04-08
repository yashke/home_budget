package main

import (
  "github.com/gorilla/mux"
  "net/http"
  "mime/multipart"
  "fmt"
)

func main() {
  router := mux.NewRouter()
  router.HandleFunc("/account_balances", welcomeHandler)
  http.Handle("/", router)
  http.ListenAndServe("0.0.0.0:80", nil)
}

func welcomeHandler(writer http.ResponseWriter, request *http.Request) {
  request.ParseMultipartForm(32 << 20)
  form := request.MultipartForm
  uploadedFiles := form.File["file[]"]

  for i, _ := range uploadedFiles {
    parseUploadedFile(uploadedFiles[i])
  }
}

func parseUploadedFile(uploadedFile *multipart.FileHeader) {
  file, _ := uploadedFile.Open()
  fmt.Println(file)
}
