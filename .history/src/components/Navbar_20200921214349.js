import React from "react";

function Navbar() {
  return (
    <header>
      <a href='/' className='logo'>
        LOGO
      </a>
      <ul className='links'>
        <li className='link'>Home</li>
        <li className='link'>About</li>
        <li className='link'>Services</li>
        <li className='link'>Contact</li>
      </ul>
    </header>
  );
}

export default Navbar;
