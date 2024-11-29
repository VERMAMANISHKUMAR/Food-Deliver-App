import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

function Navbar() {
  const [menu, setMenu] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
    document.body.classList.toggle('light-mode', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <img src={assets.logo} alt="logo" />
      
      <ul className='navbar-menu'>
        <li onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active-nav' : ''}>Home</li>
        <li onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active-nav' : ''}>Menu</li>
        <li onClick={() => setMenu('Mobile-app')} className={menu === 'Mobile-app' ? 'active-nav' : ''}>Mobile-app</li>
        <li onClick={() => setMenu('Contact-us')} className={menu === 'Contact-us' ? 'active-nav' : ''}>Contact-us</li>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search-icon" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="basket" />
          <div className='dot'></div>
        </div>
        
        {/* ----------------- */}
        <button>Sign-in</button>
          


        {/* Dark mode toggle switch */}
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
