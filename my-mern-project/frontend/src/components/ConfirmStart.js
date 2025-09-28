// src/components/ConfirmStart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmStart.css'; // Add your styles for the confirm start

const ConfirmStart = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    // Proceed to questions if the user confirms
    navigate("/quiz/questions");
  };

  return (
    <div className="confirm-start-container">
      <div className="confirm-overlay" /> {/* Overlay for better readability */}
      <div className="confirm-card">
        <h2 >Are you sure you want to start the quiz?</h2>
        <div className="confirm-buttons">
          <button onClick={handleStart} className="yes-button">Yes</button>
          <button onClick={() => navigate("/quiz")} className="no-button">No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmStart;

