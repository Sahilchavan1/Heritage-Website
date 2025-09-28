// src/components/Quiz.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'; // Add your styles for the quiz

const Quiz = () => {
  const totalQuestions = 15; // Total number of questions
  const timeLimit = 10; // Time limit in minutes

  return (
    <div className="quiz-container">
      <div className="quiz-overlay" /> {/* Overlay for better readability */}
      <div className="quiz-card">
        <h2 className="quiz-title">Indian Heritage Quiz</h2>
        <p className="quiz-info">Total Questions: {totalQuestions}</p>
        <p className="quiz-info">Time Limit: {timeLimit} minutes</p>
        <Link to="/quiz/confirm">
          <button className="start-button">Start</button>
        </Link>
        <Link to="/">
          <button className="exit-button">Exit</button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;

