import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';
import video1 from '../../videos/video-1.mp4' 
import Fade from 'react-reveal';

function HeroSection() {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <Fade left={isDesktop} bottom={isMobile} duration={4000} delay={2000} distance="40px">
      <h1>Hi, I'm Roxana Gianazza</h1>
      <p>and this my portfolio site</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/projects'
        >
          See Projects
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path='/about-me'
          // onClick={console.log('hey')}
        >
          See Bio <i class="far fa-address-card"></i>
        </Button>
      </div>
      </Fade>
    </div>
  );
}

export default HeroSection;