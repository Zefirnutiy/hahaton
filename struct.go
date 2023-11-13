package main

type User struct {
	Id    int    `json:-`
	Name  string `json:name`
	Phone string `json:phone`
	Email string `json:email`
}
