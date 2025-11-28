import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <StructuredData />
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
