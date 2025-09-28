import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import heritageSitesData from '../data/heritageSites.json';
import './HeritageSites.css';

const HeritageSites = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectedSite, setSelectedSite] = useState(null);

  const handleViewMore = () => setShowAll(true);
  const handleViewLess = () => setShowAll(false);
  const handleSiteClick = (site) => setSelectedSite(site);
  const closeModal = () => setSelectedSite(null);

  const visibleSites = showAll ? heritageSitesData : heritageSitesData.slice(0, 5);

  return (
    <div className="heritage-sites-container">
      <h1>{t('heritageSites')}</h1>
      <div className="sites-grid">
        {visibleSites.map((site, index) => (
          <div key={index} className="site-card" onClick={() => handleSiteClick(site)}>
            <img src={site.image_type || '/default-image.jpg'} alt={site.name} />
            <h3>{site.name}</h3>
            <p>{`${site.location.city}, ${site.location.state}`}</p>
            <p>{site.category}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <button className="view-more-btn" onClick={handleViewMore}>
          View More
        </button>
      )}
      {showAll && (
        <button className="view-less-btn" onClick={handleViewLess}>
          View Less
        </button>
      )}

      {selectedSite && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedSite.image_type || '/default-image.jpg'} alt={selectedSite.name} />
            <h2>{selectedSite.name}</h2>
            <p>{selectedSite.description}</p>
            <p>{`${selectedSite.location.city}, ${selectedSite.location.state}`}</p>
            <div className="modal-actions">
              <div className="like-btn">
                <span className="icon">👍</span> Like
              </div>
              <div className="wishlist-btn">
                <span className="icon">🌟</span> Wishlist
              </div>
            </div>
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeritageSites;