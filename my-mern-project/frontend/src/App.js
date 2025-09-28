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
import Dashboard from './components/Dashboard';
import Arts from './components/Arts';
import Quiz from './components/Quiz'; // Import Quiz
import ConfirmStart from './components/ConfirmStart'; // Import Confirm Start
import QuizQuestions from './components/QuizQuestions'; // Import Quiz Questions
import QuizResults from './components/QuizResults'; // Import Quiz Results
import Images from './pages/Images'; // Import the Images component
import Culinary from './components/Culinary';

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/quiz" element={<Quiz />} /> {/* Route for Quiz */}
        <Route path="/quiz/confirm" element={<ConfirmStart />} /> {/* Route for Confirm Start */}
        <Route path="/quiz/questions" element={<QuizQuestions />} /> {/* Route for Quiz Questions */}
        <Route path="/quiz/results" element={<QuizResults />} /> {/* Route for Quiz Results */}
        <Route path="/images" element={<Images />} /> {/* Add route for Images page */}
      </Routes>

      {/* Conditionally render Culinary and HeritageSites */}
      {location.pathname === '/' && <HeritageSites />}
      {location.pathname !== '/images' && <Culinary />}
     
      <Footer />
    </div>
  );
}

export default App;
