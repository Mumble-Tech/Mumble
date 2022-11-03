package util

import (
	"api/database/models"
	"encoding/json"
)

func ToJson(val []byte) models.User {
	user := models.User{}
	err := json.Unmarshal(val, &user)
	if err != nil {
		panic(err)
	}
	return user
}
