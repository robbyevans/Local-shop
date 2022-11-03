import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate =useNavigate()
  function handleClick(){
    navigate("/merchant")
  }
    return (
        <div>
             {/* top navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top merchant-navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#sidebar"
            ></span>
          </button>
          <h3 className='merchant-logo' onClick={handleClick}>
            Merchant
          </h3>
       
       
        </div>
      </nav>
        </div>
    );
}

export default NavBar;