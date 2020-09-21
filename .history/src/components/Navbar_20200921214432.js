import React from "react";

function Navbar() {
  return (
    <header>
      <a href='/' className='logo'>
        LOGO
      </a>
      <ul className='links'>
        <a href='#'>
          <li className='link'>Home</li>
        </a>
        <a href='#'>
          <li className='link'>About</li>
        </a>
        <a href='#'>
          <li className='link'>Services</li>
        </a>
        <a href='#'>
          <li className='link'>Contact</li>
        </a>
      </ul>
    </header>
  );
}

export default Navbar;
