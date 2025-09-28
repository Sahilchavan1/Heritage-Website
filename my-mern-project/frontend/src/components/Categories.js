// src/components/Categories.js
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Categories.css';

const Categories = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleWheel = (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      };
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <div className="categories-container">
        <h2>{t('categories')}</h2>
        <div 
          className="cards-wrapper" 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="cards-container">
            <div className="card">
              <Link to="/vr-tour">
                <img src="media/ai-generated-8630221_1280.jpg" alt={t('vrTour')} />
                <h3>{t('vrTour')}</h3>
                <p>{t('exploreVirtualWorlds')}</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/ebooks">
                <img src="media/ai-generated-8363656_1280.png" alt={t('ebooks')} />
                <h3>{t('ebooks')}</h3>
                <p>{t('openWorldKnowledge')}</p>
              </Link>
            </div>
            
            <div className="card">
            <Link to ="/images">
              <img src="media/generated-7577945_1280.jpg" alt={t('images')} />
              <h3>{t('images')}</h3>
              <p>{t('oneLookMoments')}</p>
              </Link>
            </div>
            <div className="card">
              <img src="media/cinema-4153289_1280.jpg" alt={t('videos')} />
              <h3>{t('videos')}</h3>
              <p>{t('capturedMoments')}</p>
            </div>
            <div className="card">
              <img src="media/ai-generated-8846983_1280.jpg" alt={t('storyTalks')} />
              <h3>{t('storyTalks')}</h3>
              <p>{t('unsungStories')}</p>
            </div>
            <div className="card">
              <Link to="/quiz"> 
                <img src="media/ai-generated-8846983_1280.jpg" alt={t('quizzes')} />
                <h3>{t('quizzes')}</h3>
                <p>{t('testKnowledge')}</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/arts">
                <img src="media/ai-generated-8846983_1280.jpg" alt={t('artsCrafts')} />
                <h3>{t('artsCrafts')}</h3>
                <p>{t('exploreArt')}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Section */}
      <div className="spotlights-section">
        <a href="/spotlights">
          <img src="/media/sl.jpg" alt="Spotlight 3" className="spotlight-image" />
        </a>
      </div>
    </div>
  );
};

export default Categories;
