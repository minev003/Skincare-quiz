// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage'; // Разкоментирахме този ред
import ResultsPage from './pages/ResultsPage'; // И добавихме този

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/question/:id" element={<QuizPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;