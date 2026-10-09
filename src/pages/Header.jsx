import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Time To Travel</Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search-btn" aria-label="Search"><FiSearch /></button>
          <button className="cart-btn" aria-label="Cart"><FiShoppingCart /></button>
          <button className="user-btn" aria-label="Profile"><FiUser /></button>
          <button className="primary-header-btn">Plan a trip</button>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;