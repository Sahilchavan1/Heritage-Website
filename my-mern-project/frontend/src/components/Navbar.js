import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from 'react-i18next';
import i18n from './i18n.js';
import { useTheme } from './ThemeContext.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      setMessage(`Welcome to Digital Heritage, ${user.name}!`);
      const timer = setTimeout(() => setMessage(''), 3000);
      axios.post('/api/user/login', {
        username: user.name,
        email: user.email,
        wishlist: []
      }).catch(error => {
        console.error("Error saving user data:", error);
      });
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, user]);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-logo">
        <span className="navbar-logo-text">Digital Heritage</span>
      </div>
      {message && <div className="popup-message">{message}</div>}
      <div className="navbar-buttons">
        <div className="dropdown">
          <button className="button dropdown-button">
            {t('language')}
            {/* Dropdown icon here */}
          </button>
          <div className="dropdown-content">
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('en')}>English</a>
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('hi')}>Hindi</a>
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('mr')}>Marathi</a>
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('gu')}>Gujarati</a>
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('te')}>Telugu</a>
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('fr')}>French</a>
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('ja')}>Japanese</a>
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('ru')}>Russian</a>
          </div>
        </div>

        <button className="button theme-toggle-button" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀'}
        </button>

        <div className="user-actions">
          {isAuthenticated ? (
            <>
              <button className="button" onClick={() => navigate('/dashboard')}>
                Dashboard
              </button>
              <button className="button login-logout-button" onClick={() => logout({ returnTo: window.location.origin })}>
                {t('logOut')}
              </button>
            </>
          ) : (
            <button className="button login-logout-button" onClick={() => loginWithRedirect()}>
              {t('logIn')}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
