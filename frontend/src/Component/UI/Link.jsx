import React from 'react'

export default function Link({Href, children}) {
  return (
    <a className='link' href={Href}>
        {children}
    </a>
  )
}
