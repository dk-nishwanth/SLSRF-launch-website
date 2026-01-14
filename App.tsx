
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MarqueeSection from './components/MarqueeSection';
import Frontier from './components/Frontier';
import WhoBelongs from './components/WhoBelongs';
import Transforms from './components/Transforms';
import WhatSetsApart from './components/WhatSetsApart';
import Speakers from './components/Speakers';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const handleReveal = () => {
      const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-skew, .reveal-fade';
      const reveals = document.querySelectorAll(selectors);
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Initial check
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-[#f2921d] selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MarqueeSection />
        <Frontier />
        <WhoBelongs />
        <Transforms />
        <WhatSetsApart />
        <Speakers />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;
