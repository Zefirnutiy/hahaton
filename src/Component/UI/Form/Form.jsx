import React, { useState, useEffect } from 'react';
import InputText from './InputText';
import Button from '../Button';
import axios from 'axios';

function Form(props) {
let data = {}
const phonePattern = /^((8|\+7)[- ]?)?((\d{3})?[- ]?)?[\d- ]{7,10}$/
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

useEffect(()=>{
    let formData = document.querySelectorAll('input')
    formData.forEach(input => {
        data[input.name] = sessionStorage.getItem(input.name)
    });
    console.log(data)
}, [data])

const [phone, setPhone] = useState(true)
const [email, setEmail] = useState(true)
const [message, setMessage] = useState(null)

const HandleChange = e =>{
    data[e.target.name] = e.target.value
    console.log( data[e.target.name])
    sessionStorage.setItem(e.target.name, e.target.value)
}
const emailIsValid = e =>{
    if(!emailPattern.test(e.target.value) && e.target.value !== ''){
        setEmail(false)
    }
    else{
        setEmail(true)
        data[e.target.name] = e.target.value
        sessionStorage.setItem(e.target.name, e.target.value)
    }
}

const phoneIsValid = e =>{
    console.log(e)

    if(!phonePattern.test(e.target.value) && e.target.value !== ''){
        setPhone(false)
    }

    else{
        setPhone(true)
        data[e.target.name] = e.target.value
        sessionStorage.setItem(e.target.name, e.target.value)
    }
}



const  http = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: true,
    headers: {
    'content-type': 'text/plain; charset=utf-8',
    },
    
})

const Enter = e => {
    console.log(data)
        http.post('/sign-up', data)
        .then(data => {
            if(!data.data.message){
                console.log(data)
                sessionStorage.clear()
                alert('Вы зарегестрированы')
            }

            else{
                setMessage(data.data.message)
            }
                console.log('ответ: ', data)
        })
        .catch((er) => {
            console.log(er)
        })
    } 
    return (
        <form className='form'>
            <InputText required placeholder={'Зубенко Михаил Петрович'} InputName={'name'} className='input_container' funcOnChang={HandleChange}>ФИО</InputText>
            <InputText required placeholder={'8-996-557-34-56'} InputName={'phone'} ClassName={!phone && 'no_correct '} funcOnChang={phoneIsValid}>Номер телефона</InputText>
            <InputText required placeholder={'zubenk@yandex.ru'}  InputName={'email'} ClassName={!email && 'no_correct'} funcOnChang={emailIsValid}>E-mail</InputText>
            
            <div className='checkbox_container'>
                <input required type='checkbox' className='checkbox' id="checkbox" />
                <label className='checkbox_container' for='checkbox'>Согласие на обработку данных</label>
            </div>

            <div className="button_form_bottom">
                <button className='btn white_fill' onClick={Enter} disabled={phone && email} type='submit'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>
        </form>
    );
}

export default Form;