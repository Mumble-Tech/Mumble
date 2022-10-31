package main

import (
	"api/database"
	"api/database/controllers"
	"api/middlewares"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	log "github.com/sirupsen/logrus"
)

func routerUse(router *gin.Engine) {
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"POST", "GET"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))
}

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
	routerUse(auth)
	err := auth.Run(":8080")
	if err != nil {
		return
	}
}

func main() {
	// database things
	database.Connect("postgresql://Deondre:password@localhost:5432/MumbleDB")
	database.Migrate()

	log.Println("Starting the server")
	tempServe()
}
