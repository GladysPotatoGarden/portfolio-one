import React, { useState } from 'react';
import './Header.css'
import hamburger from './assets/hamburger.svg'
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav>
      <h1 className='logo'>Quincy Zientek</h1>
        <ul className={`nav-links ${menuOpen ? 'nav-links-visible' : ''}`}>
          <li>
            <a className='link' href="#">About</a>
          </li>
          <li>
            <a className='link' href="#">Projects</a>
          </li>
          <li>
            <a className='link' href="#">Resume</a>
          </li>
          <li>
            <a className='link' href="#">Contact</a>
          </li>
        </ul>
        <img className='hamburger-icon' src={hamburger} alt="" onClick={toggleMenu} />
      </nav>
    </header>
  );
}



export default Header;
