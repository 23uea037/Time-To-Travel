import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Tours from './pages/Tours';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <h3>Time To Travel</h3>
              <p>Curated journeys for memorable escapes.</p>
            </div>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/destinations">Destinations</a>
              <a href="/tours">Tours</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
