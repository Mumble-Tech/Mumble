package models

import "gorm.io/gorm"

type Powerpoint struct {
	gorm.Model
	Location string `json:"location"` // Location is the path of the file
}

type PDF struct {
	gorm.Model
	Location string `json:"location"`
}

type PNG struct {
	gorm.Model
	Location string `json:"location"`
}

type JPG struct {
	gorm.Model
	Location string `json:"location"`
}

/*
	The way I would like to store all of this __ Reference ReferenceFiles.json __
*/
