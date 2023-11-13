package main

import (
	"net/http"

	// "github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	// "github.com/joho/godotenv"
)

func main() {
	Sender()
	// if err := godotenv.Load(); err != nil {
	// 	panic(err.Error())
	// }

	// if err := PostgresConnect(); err != nil {
	// 	panic(err.Error())
	// }

	// router := gin.Default()
	// router.Use(cors.Default())

	// auth := router.Group("/auth")
	// {
	// 	auth.POST("/sign-up", signUp)
	// }

	// router.Run(":8080")
}


func signUp(ctx *gin.Context){
	var user User
	
	if err := ctx.BindJSON(&user); err != nil{ 
		ctx.JSON(http.StatusBadRequest, nil)
		return
	}

	if err := CreateUser(user); err != nil {
		print("\n", err.Error())
		ctx.JSON(http.StatusInternalServerError, nil)
		return
	}

	ctx.JSON(http.StatusOK, user)
	return
}