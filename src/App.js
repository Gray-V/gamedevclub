// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
