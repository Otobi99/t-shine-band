import React from 'react';
import ThreeScene from './components/ThreeScene';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Shows from './components/Shows';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <ThreeScene />
      <Header />
      <Hero />
      <About />
      <Music />
      <Shows />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;