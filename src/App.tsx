/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Pages
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Financiacion from './pages/Financiacion';
import Consignacion from './pages/Consignacion';
import Permuta from './pages/Permuta';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad',
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/catalogo/:id" element={<Catalogo />} />
            <Route path="/financiacion" element={<Financiacion />} />
            <Route path="/consignacion" element={<Consignacion />} />
            <Route path="/permuta" element={<Permuta />} />
          </Routes>
        </main>

        <Footer />
        
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </Router>
  );
}
