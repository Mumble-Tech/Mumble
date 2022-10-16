package util

import (
	"fmt"

	socketio "github.com/googollee/go-socket.io"
	log "github.com/sirupsen/logrus"
)

// create server
func CreateSocketServer() *socketio.Server {
	server := socketio.NewServer()

	return server
}

// connect
func Connect(s socketio.Conn) error {
	s.SetContext("")
	log.Info("Connected to socket server")
	return nil
}

// events
func SocketChat(s socketio.Conn, msg string) string {
	s.SetContext(msg)
	return "recv " + msg
}

// error
func SocketError(s socketio.Conn, e error) {
	log.Error(e)
}

// disconnect
func SocketDisconnect(s socketio.Conn, reason string) {
	fmt.Println("closed", reason)
}
