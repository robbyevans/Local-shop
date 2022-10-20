import React from 'react'

function MainBar() {
  return (
    <nav className='navbar'>
         <div className='container flex_space'>
         <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

         </div>
    </nav>
  )
}

export default MainBar