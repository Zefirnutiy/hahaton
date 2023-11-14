package main

import (
	"crypto/tls"
	"os"

	"gopkg.in/gomail.v2"
)

func Sender (recipients []string, msg string) error {

	for _, recipient := range recipients {

		m := gomail.NewMessage()
		
		m.SetHeader("From", "stellox84@gmail.com")
		
		m.SetHeader("To", recipient)
		
		m.SetHeader("Subject", "IT форум 'Супер гик'")
		
		m.SetBody("text/plain", msg)
		d := gomail.NewDialer("smtp.gmail.com", 587, "stellox84@gmail.com", os.Getenv("GOOGLE_PAS"))
		
		d.TLSConfig = &tls.Config{InsecureSkipVerify: true}
		
		err := d.DialAndSend(m);
		if err != nil {
			return err
		}

	}
  
	return nil
  }