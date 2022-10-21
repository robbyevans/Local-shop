
import React from 'react'
import { Link } from 'react-router-dom'

const MainBar = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          LocalShop
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
        <Link to='/mlog-in' onClick={closeMobileMenu}>
                Merchant
        </Link>
       <Link to='/alog-in' onClick={closeMobileMenu}>
                 Admin
         </Link>
          <Link className='links' to='/signup'>
           Clerk
          </Link>
          <Link to='/clog-in' onClick={closeMobileMenu}>
                Clerk
         </Link>
        </ul>
      </nav>
    </header>
  )
}

export default MainBar
