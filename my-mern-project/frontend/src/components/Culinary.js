import React from 'react';
import { useTranslation } from 'react-i18next';
import './Culinary.css';

const Culinary = () => {
  const { t } = useTranslation();

  const dishes = [
    {
      name: t('biryani'),
      description: t('biryaniDescription'),
      image: '/media/biryani.jpg',
    },
    {
      name: t('paneerTikka'),
      description: t('paneerTikkaDescription'),
      image: '/media/paneer_tikka.jpg',
    },
    {
      name: t('samosa'),
      description: t('samosaDescription'),
      image: '/media/samosa.jpg',
    },
    // Add more dishes as needed
  ];

  return (
    <div className="culinary-container">
      <h1>{t('culinary')}</h1>
      <div className="culinary-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="culinary-card">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culinary;