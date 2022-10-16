package util

import (
	"fmt"

	socketio "github.com/googollee/go-socket.io"
)

// create server
func CreateSocketServer() *socketio.Server {
	server := socketio.NewServer(nil)

	return server
}

// connect
func Connect(s socketio.Conn) error {
	s.SetContext("")
	fmt.Println("connected: ", s.ID)
	return nil
}

// events
func SocketChat(s socketio.Conn, msg string) string {
	s.SetContext(msg)
	return "recv " + msg
}

// error
func SocketError(s socketio.Conn, e error) {
	fmt.Println("meet error:", e)
}

// disconnect
func SocketDisconnect(s socketio.Conn, reason string) {
	fmt.Println("closed", reason)
}
