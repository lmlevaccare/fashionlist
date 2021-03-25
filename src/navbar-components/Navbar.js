
import React, { useState } from "react";
import "../index.css"
import "../navbar.css"
import { NavBtn } from "./NavBtn";

import Dropdown from "./Dropdown";
import {Link} from "react-router-dom"

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown]=useState(false)

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
  

    return (
         <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMenu}>
         The Fashion List
      
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMenu}>
             
            </Link>
          </li>
          <li
            className='nav-item'
            // onMouseEnter={}
            // onMouseLeave={}
          >
            <Link
              to='/profile'
              className='nav-links'
              onClick={closeMenu}
            >
             Fashion.Profile<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/wishes'
              className='nav-links'
              onClick={closeMenu}
            >
              Fashion.Wishes
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/account'
              className='nav-links'
              onClick={closeMenu}
            >
             User.Account
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMenu}
            >
              Sign.Up
            </Link>
          </li>
        </ul>
        <NavBtn/>
      </nav>
    </>



    //   <>
    //     <nav className="newNavbar">
    //       <Link to="/" className="newNavbar-logo">
    //         LOGO
    //       </Link>
    //       <div className="menu-icon" onClick={handleClick}>
    //         <i className={click ? "fas fa-times" : "fas fa-bars"} />
    //       </div>
    //       <ul className={click ? "nav-menu active" : "nav-menu"}>
    //         <li className="nav-item">
    //           <Link to="/" className="nav-links" onClick={closeMenu}>
    //             Home
    //           </Link>
    //         </li>
           
    //         <li className="nav-item">
    //           <Link to="/profile" className="nav-links" onClick={closeMenu}>
    //             Fashion.Profile <i className= 'fas fa-caret-down'/>
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </>
    );
    
}

export default Navbar