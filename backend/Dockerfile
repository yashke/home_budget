FROM golang:1.8
MAINTAINER Jan Filipowski <jachuf@gmail.com>

EXPOSE 80

WORKDIR /go
COPY . /go

RUN go get github.com/gorilla/mux

CMD ["go", "run", "/go/src/home_budget/main.go"]
