import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Imports
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/common/FloatingContact';

// Page Views
import Home from '../src/pages/Home'
import Services from './pages/services/Services';

import JobStrategy from './pages/services/JobStrategy';

import Testimonials from './pages/Testimonials'

import About from './pages/About'
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact'
import Benefits from './pages/Benefits'

export default function App() {
  return (
    <Router>
      <div className="bg-[#0A0F1D] text-slate-50 font-sans min-h-screen flex flex-col selection:bg-[#14b8a6] selection:text-white antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
            <Route path="/benefits" element={<Benefits />} />
            
            {/* Service routes */}
            <Route path="/services" element={<Services />} />

            <Route path="/services/:id" element={<JobStrategy />} /> 
            

   
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}