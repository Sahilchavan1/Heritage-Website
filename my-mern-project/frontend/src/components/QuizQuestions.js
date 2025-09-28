// src/components/QuizQuestions.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizQuestions.css'; // Add your styles for the quiz questions

const questions = [
  { question: "1. What is the Taj Mahal?", options: ["A monument", "A city", "A river", "A dance"], answer: "A monument" },
  { question: "2. Where is the Gateway of India located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Mumbai" },
  { question: "3. What is the national flower of India?", options: ["Rose", "Lotus", "Sunflower", "Marigold"], answer: "Lotus" },
  { question: "4. What is the capital of India?", options: ["New Delhi", "Mumbai", "Kolkata", "Bangalore"], answer: "New Delhi" },
  { question: "5. Which festival is known as the Festival of Lights?", options: ["Holi", "Diwali", "Eid", "Christmas"], answer: "Diwali" },
  { question: "6. What is the main language spoken in India?", options: ["Hindi", "English", "Bengali", "Tamil"], answer: "Hindi" },
  { question: "7. Which is the longest river in India?", options: ["Ganges", "Yamuna", "Brahmaputra", "Godavari"], answer: "Ganges" },
  { question: "8. Who is known as the Father of the Nation in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh"], answer: "Mahatma Gandhi" },
  { question: "9. Which dance form is associated with the state of Tamil Nadu?", options: ["Kathak", "Bharatanatyam", "Kathakali", "Odissi"], answer: "Bharatanatyam" },
  { question: "10. What is the currency of India?", options: ["Dollar", "Euro", "Rupee", "Yen"], answer: "Rupee" },
  { question: "11. Which monument is a symbol of love?", options: ["Gateway of India", "Red Fort", "Hawa Mahal", "Taj Mahal"], answer: "Taj Mahal" },
  { question: "12. Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V. V. Giri"], answer: "Dr. Rajendra Prasad" },
  { question: "13. What is the official language of India?", options: ["Hindi", "English", "Bengali", "Punjabi"], answer: "Hindi" },
  { question: "14. Which Indian festival celebrates the harvest?", options: ["Makar Sankranti", "Eid", "Diwali", "Holi"], answer: "Makar Sankranti" },
  { question: "15. Which is the highest mountain peak in India?", options: ["K2", "Kangchenjunga", "Nanda Devi", "Mount Everest"], answer: "Kangchenjunga" },
  { question: "16. What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
];

const QuizQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(600); // 10 minutes
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null)); // Track user answers
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(prev => prev - 1);
      } else {
        clearInterval(countdown);
        navigate("/quiz/results", { state: { score } });
      }
    }, 1000);
    
    return () => clearInterval(countdown);
  }, [timer, navigate, score]);

  const handleOptionClick = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option; // Save user answer for current question
    setUserAnswers(updatedAnswers);
    
    if (option === questions[currentQuestion].answer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      navigate("/quiz/results", { state: { score } });
    }
  };

  return (
    <div className="quiz-questions-container">
      <div className="quiz-card">
        <h2>Indian Heritage Quiz</h2>
        <div className="timer">
          Time Remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
        </div>
        <div className="questions-scroll-container">
          <div className="question">
            <h3>{questions[currentQuestion].question}</h3>
            <div className="options-container">
              {questions[currentQuestion].options.map(option => (
                <button 
                  key={option} 
                  onClick={() => handleOptionClick(option)} 
                  className={`option-button ${userAnswers[currentQuestion] === option ? 'selected' : ''} 
                    ${userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] === questions[currentQuestion].answer ? 'correct' : ''} 
                    ${userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] !== questions[currentQuestion].answer ? 'wrong' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button onClick={() => navigate("/quiz/results", { state: { score } })} className="submit-button btn btn-dark">Submit</button>
      </div>
    </div>
  );
};

export default QuizQuestions;
