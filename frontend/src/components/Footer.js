import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>{t('aboutDigitalHeritage')}</h3>
          <p>{t('digitalHeritageDescription')}</p>
        </div>
        <div className="footer-section contact">
          <h3>{t('contactUs')}</h3>
          <p>
            <i className="fas fa-envelope"></i> info@digitalheritage.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 1234567890
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Digital Heritage | {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;
