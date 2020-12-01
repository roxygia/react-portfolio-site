import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-link-items'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about-me'>About</Link>
      </div>


      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Roxana Gianazza © 2020</small>
          <div class='social-icons'>

            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/roxana-gianazza2020/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a> 
            <a
              class='social-icon-link github'
              href='https://github.com/roxygia'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>
            
          </div>
          
        </div>
        
      </section>
      
    </div>
  );
}

export default Footer;
