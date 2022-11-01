package wbsocket

import (
	"fmt"
	"golang.org/x/net/websocket"
	"os"
)

type AudioFile interface{}

func SendAudio(ws *websocket.Conn) {
	file, _ := os.ReadFile("a.txt")
	n, err := ws.Write(file)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(n, "bytes written")
}
