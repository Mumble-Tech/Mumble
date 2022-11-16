package models

import (
	"gorm.io/gorm"
)

type Scene struct {
	gorm.Model
	Name string `json:"name"`
}
