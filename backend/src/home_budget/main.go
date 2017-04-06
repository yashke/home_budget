package main

import (
  "github.com/gorilla/mux"
  "net/http"
  "fmt"
)

func main() {
  router := mux.NewRouter()
  router.HandleFunc("/", welcomeHandler)
  http.Handle("/", router)
  http.ListenAndServe("0.0.0.0:80", nil)
}

func welcomeHandler(writer http.ResponseWriter, response *http.Request) {
  fmt.Println("Received request")
}
