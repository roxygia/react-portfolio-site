import React from 'react';
import About from '../About/About';
import Cards from '../Card/Cards';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HeroSection from '../Hero/HeroSection';



function Home() {

  return (
    <>
      <HeroSection />
      <About />
      <Cards/>
      <Contact />
      <Footer />

    </>
  );
}

export default Home;
