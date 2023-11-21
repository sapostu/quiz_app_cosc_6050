import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import WelcomePage from './components/WelcomePage/WelcomePage';
import QuizzesPage from './components/QuizzesPage/QuizzesPage';
import TakeQuizPage from './components/TakeQuizPage/TakeQuizPage';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/quizzes" element={<QuizzesPage/>} />
          <Route path="/takeQuiz" element={<TakeQuizPage/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
