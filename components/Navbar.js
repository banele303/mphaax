import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link'
import Image from "next/image"
import logo from "../public/logo2.png"
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])



  return (
    
    <div className={scrolled ? "scrolled" : " gpt3__navbar"}>
     
      
      <div className="gpt3__navbar-links">
        <div className="relative  md:h-[50px] h-[40px] w-[100px] md:w-[180px] text-blue flex items-center ">
        
         <Image src={logo} alt="logo" className='absolute '/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link href="/">Home</Link></p>
          <p><Link href="/services">Services</Link></p>
          <p><Link href="/projects">Projects</Link></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 px-[2rem] py-[.7rem] text-2xl sm:text-1xl font-semibold text-white  rounded-md cursor-pointer "> <Link href="/contact">Contact</Link></button>

      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <XIcon className="h-8 w-8 text-blue-500" onClick={() => setToggleMenu(false)} />
          : <MenuIcon className="h-8 w-8 text-blue-500" onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><Link href="/">Home</Link></p>
            <p><Link href="/services">Services</Link></p>
            <p><Link href="/projects">Projects</Link></p>
           
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <button className="px-[2rem] py-[.7rem] text-2xl sm:text-1xl font-semibold text-white  bg-gradient-to-r from-green-700 to-blue-200  rounded-md cursor-pointer "> <Link href="/contact">Contact</Link></button>

          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;