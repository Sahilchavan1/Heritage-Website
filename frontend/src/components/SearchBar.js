import React, { useState } from 'react';
import heritageSitesData from '../data/heritageSites.json'; // Import your JSON data
import './SearchBar.css'; // Update to your CSS file path
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSite, setSelectedSite] = useState(null); // State for the selected site
  const [likedSites, setLikedSites] = useState([]); // State for liked sites
  const [wishlistSites, setWishlistSites] = useState([]); // State for wishlist sites

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter the heritage sites based on the search term
    const filteredResults = heritageSitesData.filter((site) =>
      site.name.toLowerCase().includes(term) ||
      (typeof site.location === 'object' && 
        (site.location.city.toLowerCase().includes(term) || 
        site.location.state.toLowerCase().includes(term)))
    );

    setSearchResults(filteredResults);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]); // Clear search results
  };

  const handleSiteClick = (site) => {
    setSelectedSite(site); // Set the selected site
  };

  const closeModal = () => {
    setSelectedSite(null); // Clear the selected site
  };

  const toggleLike = (site) => {
    if (likedSites.includes(site)) {
      setLikedSites(likedSites.filter((s) => s !== site));
    } else {
      setLikedSites([...likedSites, site]);
    }
  };

  const toggleWishlist = (site) => {
    if (wishlistSites.includes(site)) {
      setWishlistSites(wishlistSites.filter((s) => s !== site));
    } else {
      setWishlistSites([...wishlistSites, site]);
    }
  };

  return (
    <div className="search-bar-container">
      <label className="search-label">{t('exploreNow')}</label>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder={t('search')}
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="clear-button" onClick={clearSearch}>
          &times; {/* Cross icon for clear */}
        </button>
      </div>

      {/* Search results grid */}
      {searchResults.length > 0 && (
        <div className="results-grid">
          {searchResults.map((site, index) => (
            <div key={index} className="site-card" onClick={() => handleSiteClick(site)}>
              <img src={site.image_type || '/default-image.jpg'} alt={site.name} />
              <h3>{site.name}</h3>
              <p>
                {typeof site.location === 'object' 
                  ? `${site.location.city}, ${site.location.state}` 
                  : site.location}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Site Details */}
      {selectedSite && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedSite.image_type || '/default-image.jpg'} alt={selectedSite.name} />
            <h2 className="modal-title">{selectedSite.name}</h2>
            <p className="modal-description">{selectedSite.description}</p>
            <p className="modal-location">
              {typeof selectedSite.location === 'object' 
                ? `${selectedSite.location.city}, ${selectedSite.location.state}` 
                : selectedSite.location}
            </p>
            <div className="modal-actions">
              <div className="like-btn" onClick={() => toggleLike(selectedSite)}>
                <span className="icon">👍</span> Like
              </div>
              <div className="wishlist-btn" onClick={() => toggleWishlist(selectedSite)}>
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

export default SearchBar;

