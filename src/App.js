import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import CompetitionSelection from './CompetitionSelection';
import Competition1 from './competition1';
import Competition2 from './competition2';
import Participants1 from './participants1';
import Participants2 from './participants2';
import Winner1 from './winner1';
import Winner2 from './winner2';
import ErrorPage from './error';


function App() {


  const isAdmin1 = () => {
    const role = localStorage.getItem('userRole');
    return role === 'admin1';
  };

  const isAdmin2 = () => {
    const role = localStorage.getItem('userRole');
    return role === 'admin2';
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompetitionSelection" element={<CompetitionSelection />} />
        <Route path="/competition1" element={isAdmin1() ? <Competition1 /> : <Navigate to="/error" />} />
        <Route path="/participants1" element={isAdmin1() ? <Participants1 /> : <Navigate to="/error" />} />
        <Route path="/winner1" element={isAdmin1() ? <Winner1 /> : <Navigate to="/error" />} />
        <Route path="/competition2" element={isAdmin2() ? <Competition2 /> : <Navigate to="/error" />} />
        <Route path="/participants2" element={isAdmin2() ? <Participants2 /> : <Navigate to="/error" />} />
        <Route path="/winner2" element={isAdmin2() ? <Winner2 /> : <Navigate to="/error" />} />
        <Route path="/error" element={<ErrorPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
