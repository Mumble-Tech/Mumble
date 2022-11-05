package models

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type Video struct {
	gorm.Model
	Name     string `json:"name"`
	Username string `json:"username" gorm:"unique"`
	FileExt  string `json:"fileExt"`
}

// HashUsername  hide the username information
func (video *Video) HashUsername(username string) error {
	bytes, err := bcrypt.GenerateFromPassword([]byte(username), 14)
	if err != nil {
		return err
	}
	// Return the username HASH
	video.Username = string(bytes)
	return nil
}
