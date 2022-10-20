import React, { useState }from 'react'
import { Link } from "react-router-dom"
import '../MainBar/MainBar.css'

function MainBar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
    <nav className='navbar'>
         <div className='container flex_space'>
         <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>
   
          <ul className={click ? "nav-menu active" : "nav-menu"}>
         <li>
         <Link to='/' onClick={closeMobileMenu}>
               LOCALSHOP
              </Link>
         </li>
         <li>
         <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
         </li>
         <li>
         <Link to='/merchant' onClick={closeMobileMenu}>
                Merchant
              </Link>
         </li>
         <li>
         <Link to='/admin' onClick={closeMobileMenu}>
                Admin
              </Link>
         </li>
         <li>
         <Link to='/clerk' onClick={closeMobileMenu}>
                Clerk
              </Link>
         </li>


          </ul>
         </div>
    </nav>
  )
}

export default MainBar