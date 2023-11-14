package main

type User struct {
	Id    int    `json:-`
	Name  string `json:name`
	Phone string `json:phone`
	Email string `json:email`
}

type Message struct {
	Id 		int 	`json:-`
	UserId 	int 	`json:userId`
	Text 	string 	`json:text`
}