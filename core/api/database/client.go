package database

import (
	"api/database/models"

	log "github.com/sirupsen/logrus"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Instance *gorm.DB
var dbError error

func Connect(connectionString string) {
	Instance, dbError = gorm.Open(postgres.Open(connectionString), &gorm.Config{})
	if dbError != nil {
		log.Fatal(dbError)
		panic("cannot connect to DB")
	}
	log.Info("Connected to Database!")
}

func Migrate() {
	// Migrate the models to the Database: TODO: Figure out how to write relations inside the GORM models
	err := Instance.AutoMigrate(&models.User{}, &models.JPG{}, &models.PDF{}, &models.Powerpoint{}, &models.TextFile{}, &models.Video{})
	if err != nil {
		return
	}
	log.Println("Database Migration Completed!")
}
