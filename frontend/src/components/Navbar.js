// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Ensure you have this file for Navbar styles
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from 'react-i18next';
import i18n from './i18n.js'; // Import the i18n instance
import { useTheme } from './ThemeContext.js'; // Import ThemeContext

const Navbar = () => {
  const { t } = useTranslation();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { theme, toggleTheme } = useTheme(); // Use the theme and toggleTheme from ThemeContext

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Use i18n for language change
  };

  return (
    <nav className={`navbar ${theme}`}> {/* Fixed template literal syntax */}
      <div className="navbar-logo">
        <span className="navbar-logo-text">Digital Heritage</span>
      </div>
      <div className="navbar-buttons">
        <div className="dropdown">
          <button className="button dropdown-button">
            {t('language')}
            <svg viewBox="0 0 360 360">
              <path
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
          </button>
          <div className="dropdown-content">
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('en')}>English</a>
            <a href="#" className="dropdown-link" onClick={() => handleLanguageChange('hi')}>Hindi</a>
          </div>
        </div>

        <button className="button theme-toggle-button" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀'} {/* Change icon based on theme */}
        </button>

        <div className="user-info">
          {isAuthenticated && (
            <p>{t('user')}: {user.name}</p>
          )}
          {isAuthenticated ? (
            <button className="button login-logout-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              {t('logOut')}
            </button>
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