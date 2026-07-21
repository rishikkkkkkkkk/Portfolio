// ============================================================
// App.jsx — Root component
// All content sourced from src/data/content.js
// Sections: Navbar · Hero · About · Experience · Projects ·
//           Skills · Certifications · Contact · Footer
// ============================================================
import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e0f]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}