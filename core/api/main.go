package main

import (
	// s"api/auth"
	"api/database"
	"api/database/controllers"
	"api/middlewares"

	"github.com/gin-gonic/gin"

	log "github.com/sirupsen/logrus"
)

func initRouter() *gin.Engine {
	router := gin.Default()
	api := router.Group("/api")
	{
		api.POST("/token", controllers.GenerateToken)
		api.POST("user/register", controllers.RegisterUser)
		secured := api.Group("/secured").Use(middlewares.Auth())
		{
			secured.GET("/ping", controllers.Ping)
		}
	}

	return router
}

func tempServe() {
	auth := initRouter()
	auth.Run(":8080")
}

func main() {
	// database things
	database.Connect("postgresql://Deondre:password@localhost:5432/MumbleDB")
	database.Migrate()

	log.Println("Starting the server")
	tempServe()
}
