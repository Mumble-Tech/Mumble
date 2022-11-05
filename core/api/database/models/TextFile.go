package models

import "gorm.io/gorm"

type TextFile struct {
	gorm.Model
	FileName string `json:"filename"`
}
