import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Runes from './components/Runes';
import Equipment from './components/Equipment';
import BestPartners from './components/BestPartners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Skills />
      <Stats />
      <Runes />
      <Equipment />
      <BestPartners />
      <Footer />
    </div>
  );
}

export default App;