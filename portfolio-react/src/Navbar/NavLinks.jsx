import React from 'react'

function NavLinks(props) {
  return (
    <ul className='nav-links'>
      <li onClick={()=> props.isMobile && props.closeMobileMenu()}><a href="/">Home</a></li>
      <li><a href="/#about">About Me</a></li>
      <li><a href="/#projects">Projects</a></li>
      <li><a href="/#contact">Contact</a></li>
  </ul>
  )
}

export default NavLinks;