// src/components/QuizResults.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './QuizResults.css'; // Add your styles for the quiz results

const QuizResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state ? location.state.score : 0;

  return (
    <div className="quiz-results-container">
      <div className="quiz-card">
        <h2>You completed your test!</h2>
        <p>Your score is: {score}/15</p>
        <div className="button-container">
          <button onClick={() => navigate("/quiz")}>Retry Quiz</button>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;

