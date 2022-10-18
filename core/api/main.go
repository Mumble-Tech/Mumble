package main

import (
	"api/auth"
	"api/util"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
	log "github.com/sirupsen/logrus"
)

// import ./util package
// import "github.com/"

// User is a struct that represents a user
type User struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

// define a reader which will listen for
// new messages being sent to our WebSocket
// endpoint
func reader(conn *websocket.Conn) {
	for {
		// read in a message
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		// print out that message for clarity
		log.Println(string(p))

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}

	}
}

func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	// upgrade this connection to a WebSocket
	// connection
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}

	log.Println("Client Connected")
	err = ws.WriteMessage(1, []byte("Hi Client!"))
	if err != nil {
		log.Println(err)
	}
	// listen indefinitely for new messages coming
	// through on our WebSocket connection
	reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/ws", wsEndpoint)
}

func socketServer() {
	fmt.Println("Hello World")
	setupRoutes()
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func getRoot(w http.ResponseWriter, r *http.Request) {
	log.Println("Got / Request")
	// fmt.Printf("got / request\n")
	io.WriteString(w, "This is my website!\n")
}

func createUserRoute(w http.ResponseWriter, r *http.Request) {
	log.Println("Got /create/user Request")

	body, err := io.ReadAll(r.Body)
	if err != nil {
		log.Println("Error reading body")
		http.Error(w, "can't read body", http.StatusBadRequest)
		return
	}

	// parse the body into a struct
	var u User
	err = json.Unmarshal(body, &u)
	if err != nil {
		log.Println("Error unmarshalling body")
		http.Error(w, "can't unmarshal body", http.StatusBadRequest)
		return
	}

	log.Printf("passw: %s", util.HashPassword(u.Password))
	// Create the user

	// print the body to the console
	log.Printf("user: %s", u.Username)
}

func tempServe() {
	router := mux.NewRouter()
	authRouter := router.PathPrefix("/auth").Subrouter()

	// jwt auth route login / signup handlers
	authRouter.HandleFunc("/signup", auth.SignupHandler)

	// route handler
	router.HandleFunc("/", getRoot)
	// Specific socket handler for socket server to the frontend.

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

	authRouter.HandleFunc("/signin", auth.SigninHandler)

	err := server.ListenAndServe()
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		log.Fatal("error starting server: %s\n", err)
		os.Exit(1)
	}
}

func main() {
	log.Println("Starting the server")
	socketServer()
	tempServe()
}
