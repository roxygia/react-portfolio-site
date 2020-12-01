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


      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Roxana Gianazza © 2020</small>
          <div className='social-icons'>

            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/roxana-gianazza2020/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a> 
            <a
              className='social-icon-link'
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
