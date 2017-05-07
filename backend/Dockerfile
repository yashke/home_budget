FROM golang:1.8
MAINTAINER Jan Filipowski <jachuf@gmail.com>

EXPOSE 80

WORKDIR /go
COPY . /go

RUN go get github.com/gorilla/mux\
  golang.org/x/net/html\
  gopkg.in/xmlpath.v2

CMD ["go", "run", "/go/src/home_budget/main.go", "/go/src/home_budget/mbank_file_parser.go"]
