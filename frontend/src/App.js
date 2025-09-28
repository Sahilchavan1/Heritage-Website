import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import VrTour from './components/VrTour'; 
import Spotlights from './components/Spotlights'; 
import HeritageSites from './components/HeritageSites';
import Footer from './components/Footer';

import { useTheme } from './components/ThemeContext';

function App() {
  const location = useLocation();
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
  };

  return (
    <div className="App" style={appStyle}>
      <Navbar />

      {location.pathname === '/' && (
        <>
          <Slider />
          <SearchBar />
        </>
      )}

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/vr-tour" element={<VrTour />} />
        <Route path="/spotlights" element={<Spotlights />} />
       
      </Routes>

      {location.pathname !== '/vr-tour' && location.pathname !== '/spotlights' && (
        <HeritageSites />
      )}

      <Footer />
    </div>
  );
}

export default App;
