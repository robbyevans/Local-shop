import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar({setClerkuser}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("clerk/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setClerkuser(null);
        navigate("/clog-in")
      }
    });
  }

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        <div className="title-wrapper">
          <h3 className='clerk-title'>Clerk Page</h3>
        </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
               
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className='icon'>{item.icon}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
               
              );
            })}
            <li><button onClick={handleLogoutClick}  className='nav-btn'>log out</button></li>
            
            
          </ul>
          
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
