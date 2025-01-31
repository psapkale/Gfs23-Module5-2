import React from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import HeroSection from './components/HeroSection/hero';
import ResponsiveCard from './components/Content1Section/content1';
import Testimonial from './components/TestimonialSection/testimmonial';
import Footer from './components/FooterSection/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ResponsiveCard />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App
