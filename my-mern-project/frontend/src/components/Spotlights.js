import React from 'react';
import './Spotlights.css'; // Ensure you import the CSS file
import { useTranslation } from 'react-i18next';

const Spotlights = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: t('navratriFestival'),
      description: t('navratriDescription'),
      image: "media/navratri.jpg",
    },
    {
      title: t('dasaraFestival'),
      description: t('dasaraDescription'),
      image: "media/dasara.jpg",
    },
    {
      title: t('diwaliFestival'),
      description: t('diwaliDescription'),
      image: "media/diwali.jpg",
    },
  ];

  return (
    <div className="spotlights-container">
      <h1 className="spotlights-title">{t('spotlightsTitle')}</h1>

      {/* Events Grid */}
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-tile" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
            </div>

            {/* Hover Overlay with more details */}
            <div className="event-overlay">
              <div className="overlay-content">
                <h3 className="overlay-title">{event.title}</h3>
                <p className="overlay-description">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Map Section */}
      <div className="map-section">
        <h2 className="map-title">{t('mapTitle')}</h2>
        <div className="map-container">
          <div className="map-placeholder">{t('mapPlaceholder')}</div>
        </div>
      </div>
    </div>
  );
};

export default Spotlights;
