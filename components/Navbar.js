import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}
          <h1>Mpha</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Projects</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        
        <button type="button">Contact</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <XIcon className="h-8 w-8 text-blue-500" onClick={() => setToggleMenu(false)} />
          : <MenuIcon className="h-8 w-8 text-blue-500" onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About</a></p>
            <p><a href="#possibility">Services</a></p>
            <p><a href="#features">Projects</a></p>
           
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Contact</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;