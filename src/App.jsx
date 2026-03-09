import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-50 selection:bg-accent selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <Menu />
      <Gallery />
      <About />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
