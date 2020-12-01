/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal';
import video1 from '../../videos/video-1.mp4' 
import portrait from '../../images/roxana_potrait.jpg';
import './About.css';

function About() {

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
    <section className="about">
      <video src={video1} autoPlay loop muted />
      <div className="about-wrapper">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <h1 className="about-wrapper__info">About me</h1>
          </Fade>
      <div className='about__wrapper'>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className='about-wrapper__img'>
                <img className='about__img' alt="profile image" src={portrait}/>
              </div>
              <div className='about__text'>
                I'm a junior web developer and experienced product owner based in Perth, Australia. <br />
                My foray into programming started at a young age but only recently decided to take a leap from mining engineering to technology. <br />
                In my spare time I Iike to hike, kitesurf and play floorball.
              </div>
            </Fade>
            </div>

        </div>
      </section>  

  );
  
  } export default About;

