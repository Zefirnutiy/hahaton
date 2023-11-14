package main

import (
	"context"
	"errors"
	"os"

	"github.com/jackc/pgx/v5"
)

var conn *pgx.Conn

func PostgresConnect() error {
	var err error

	conn, err = pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))

	return err
}

func isUserExist(email string) bool {
	var em string
	err := conn.QueryRow(context.Background(), "SELECT email FROM public.user WHERE email=$1", email).Scan(&em)

	
	if err != nil {
		return false
	}
	
	return true
}

func CreateUser(user User) error {

	if isUserExist(user.Email) {
		return errors.New("that user is exist")
	}

	var id int
	err := conn.QueryRow(context.Background(), "INSERT INTO public.user(name, phone, email) VALUES($1, $2, $3) RETURNING id", user.Name, user.Phone, user.Email).Scan(&id)

	return err
}

func CreateMessage(msg Message) error {
	_, err := conn.Exec(context.Background(), `INSERT INTO public.message("userId", text) VALUES($1, $2)`, msg.UserId, msg.Text)

	return err
}