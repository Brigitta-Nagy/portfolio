import React from 'react'
import NavLinks from './NavLinks'
import {RiMenu5Line} from "react-icons/ri"
import {RiCloseLine} from "react-icons/ri"
import { useState } from 'react'




function HamburgerMenu() {

  const[open, setOpen]= useState(false); 
  const hamburgerIcon =  <RiMenu5Line className='hamburger'
                         onClick={()=> setOpen(!open)}/>

  const closeIcon =  <RiCloseLine className='hamburger'
  onClick={()=> setOpen(!open)}/>                     

  const closeMobileMenu = ()=> setOpen(false); 


  return (
    <>
    <div className='header-container hamburgerMenu'>
    <div>HamburgerMenu</div>
    {open? closeIcon : hamburgerIcon}
    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </div>
    </>
  )
}

export default HamburgerMenu