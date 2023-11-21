import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
