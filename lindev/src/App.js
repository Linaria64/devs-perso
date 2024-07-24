import './App.css';
import React from 'react';
import About from './pages/about';
import Contact from './pages/contact';
import Works from './pages/works';
import Pricing from './pages/pricing';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/works">Works</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;