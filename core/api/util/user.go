/*
	Utilities only for creating, updating, and deleting users
*/

package util

import (
	"context"
	"encoding/json"
	"fmt"
	"server/prisma/db"
)

// create a user
func CreateUser(username string, password string) error {
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		panic(err)
	}

	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()

	fmt.Print("Creating user: ")

	ctx := context.Background()

	createdUser, err := client.Users.CreateOne(
		db.Users.Username.Set(username),
		db.Users.Passsword.Set(password),
		db.Users.ID.Increment(1),
	).Exec(ctx)
	if err != nil {
		return err
	}

	result, _ := json.MarshalIndent(createdUser, "", " ")
	fmt.Printf("Created User: %s\n", result)

	return nil
}
