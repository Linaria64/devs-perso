import './App.css';
import React from 'react';
import About from './pages/about';
import Contact from './pages/contact';
import Works from './pages/works';
import Pricing from './pages/pricing';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './img/Logo_lin-dev.png';
function App() {
  return (
     <Router>
      <div className="min-h-screen min-w-full  flex flex-col bg-cover bg-center text-white" style={{ backgroundImage: "url('/fond_noir_sobre_ia.png')"}}>
        <nav className=' flex gap-x-8  mx-auto p-5'>
          <div>
            <img src={logo} alt='Logo Lin_Dev avec un effet néon' className='rounded-lg w-28'/>
          </div>
        <div className=' bg-[#1B1B1E] bg-opacity-50 rounded-lg '>
            <ul className='flex gap-4 justify-center p-2 '>
            <li className='bg-[#333] p-3 rounded-lg'><Link to="/about">About</Link></li>
            <li className='bg-[#333] p-3 rounded-lg'><Link to="/about">Works</Link></li>
            <li className='bg-[#333] p-3 rounded-lg'><Link to="/works">Home</Link></li>
            <li className='bg-[#333] p-3 rounded-lg'><Link to="/pricing">Pricing</Link></li>
            <li className='bg-[#333] p-3 rounded-lg'><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <footer>
        <p>© Copyright 2024 Dorian_Soudan</p>
      </footer>
      </div>
    </Router>
    
  );
}

export default App;
