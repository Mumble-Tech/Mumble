package main

import (
	"context"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"net"
	"net/http"
	"os"

	"github.com/Mumble-Tech/Mumble/core/api/logger"

	"github.com/gorilla/mux"
)

func getRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / request\n")
	io.WriteString(w, "This is my website!\n")
}

func createUserRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got /create/user\n")

	ctx := r.Context()

	// URL parameters -- Nothing will be done with this yet
	hasFirst := r.URL.Query().Has("first")
	first := r.URL.Query().Get("first")
	hasSecond := r.URL.Query().Has("second")
	second := r.URL.Query().Get("second")
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Printf("could not read body: %s\n", err)
	}

	fmt.Printf("%s: got / request. first(%t)=%s, second(%t)=%s, body:\n%s\n",
		ctx.Value(ctx),
		hasFirst, first,
		hasSecond, second,
		body)

}

func tempServe() {
	router := mux.NewRouter()
	router.HandleFunc("/", getRoot)
	router.HandleFunc("/create/user", createUserRoute)

	ctx := context.Background()
	server := &http.Server{
		Addr:    ":3333",
		Handler: router,
		BaseContext: func(l net.Listener) context.Context {
			ctx = context.WithValue(ctx, ctx, l.Addr().String())
			return ctx
		},
	}

	err := server.ListenAndServe()
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
		os.Exit(1)
	}
}

func main() {
	tempServe()
}
