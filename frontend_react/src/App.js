import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage';
import QuizzesPage from './components/QuizzesPage/QuizzesPage';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/quizzes" element={<QuizzesPage/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
