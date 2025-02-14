import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FragrancePage from './pages/FragrancePage';
import AboutusPage from './pages/AboutusPage';
import SalePage from './pages/SalePage';
import CandlePage from './pages/CandlePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fragrance" element={<FragrancePage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/candle" element={<CandlePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;