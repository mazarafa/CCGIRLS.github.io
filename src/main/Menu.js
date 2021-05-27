import {Link} from 'react-router-dom';
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./../assets/x.svg";
import { ReactComponent as MenuIcon } from "./../assets/menu.svg";
import { ReactComponent as Logo } from "./../assets/logo.svg";
import "./menu.css";

const Menu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
      
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <Logo className="logo" />
  
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <Link to="/">ABOUT</Link>
  
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to="/Blog">BLOG</Link>
  
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to="/Participar">PARTICIPAR</Link>
  
              </li>
            </ul>
          </div>
  
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>
     
    );
};



export default Menu;
