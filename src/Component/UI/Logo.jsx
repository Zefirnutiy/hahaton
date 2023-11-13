import React from 'react'
import LogoSvg from '../../Media/Image/logo.svg'

export default function Logo() {
  return (
    <a className='logo_link' href='/'>
        <img src={LogoSvg} alt="logo" />
    </a>
  )
}
