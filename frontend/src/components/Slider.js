import React, { useState, useEffect } from 'react';
import './Slider.css';

const videos = [
  './media/4460336-hd_1280_720_25fps.mp4',
  './media/19717370-hd_1920_1080_30fps.mp4',
  
  // Add more video paths here
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <video
        src={videos[currentIndex]}
        className="slider-video"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Slider;
