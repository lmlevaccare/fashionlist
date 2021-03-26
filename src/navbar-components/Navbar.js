
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

 

    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };

    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }

    };
  
 

    return (
      <>
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            Fashion.List
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}></Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/profile" className="nav-links" onClick={closeMenu}>
                Fashion.Profile
                <i className="fas fa-caret-down" />
                {dropdown && <Dropdown />}
              </Link>
              {/* {dropdown && <Dropdown />} */}
            </li>
            <li className="nav-item">
              <Link to="/task" className="nav-links" onClick={closeMenu}>
                Fashion.Wishes
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/task" className="nav-links" onClick={closeMenu}>
               Add.Wish.Item
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/account" className="nav-links" onClick={closeMenu}>
                User.Account
              </Link>
            </li>
            <li>
              <Link
                to="/newsignup"
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                Sign.Up
              </Link>
            </li>
          </ul>
          <NavBtn />
        </nav>
      </>
    );
    
}

export default Navbar