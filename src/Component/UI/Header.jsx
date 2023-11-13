import React from 'react'
import Link from './Link';
import Logo from './Logo';

export default function Header() {
    return (
        <header className='header'>
            <Link Href={'#description'}>Описание</Link>
            <Link Href={'#program'}>Программа</Link>
            <Logo/>
            <Link Href={'#reg'}>Регистрация</Link>
            <Link Href={'#chat'}>Чат</Link>
        </header>
    );
}
