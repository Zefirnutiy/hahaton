package main

import (
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		panic(err.Error())
	}

	if err := PostgresConnect(); err != nil {
		panic(err.Error())
	}

	router := gin.Default()
	router.Use(cors.Default())

	auth := router.Group("/auth")
	{
		auth.POST("/sign-up", signUp)
	}
	chat := router.Group("/chat")
	{
		chat.POST("/send-msg", sendMessageInChat)
	}

	router.Run(":8080")
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

	owner := []string{"ssobnaissrgib@gmail.com"}
	if err := Sender(owner, "Пользователь " + user.Name + " " + user.Email + " зарегестрировался на мероприятие"); err != nil {
		log.Fatal(err)
		ctx.JSON(http.StatusInternalServerError, nil)
	}

	ctx.JSON(http.StatusOK, user)
	return
}

func sendMessageInChat(ctx *gin.Context){
	var message Message

	if err := ctx.BindJSON(&message); err != nil {
		ctx.JSON(http.StatusBadRequest, nil)
		return
	}

	if err := CreateMessage(message); err != nil {
		print("\n", err.Error())
		ctx.JSON(http.StatusInternalServerError, nil)
		return
	}

}

func sendEmails(){
	to := []string{
		"tot0na@yandex.ru", 
		"ibeliveikenflyasy@icloud.com",
		"maksimpanikhidin2004@mail.ru",
	}

	Sender(to, "Ребята, это я вам отправляю сообщение через всякие там голанги! <3")
}