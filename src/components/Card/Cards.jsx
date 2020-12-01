import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image1 from '../../images/img-techforme.JPG';
import image2 from '../../images/img-traveld.JPG';
import image3 from '../../images/img-shecodesnews.JPG';
import image4 from '../../images/img-python-data.JPG';
import Fade from 'react-reveal';

function Cards() {
  return (
    <div className='cards' id="projects">
      <Fade bottom duration={2000} delay={1000} distance="30px">
      <h2>Check out my latest projects! </h2></Fade>
      <div className='cards__container'>
      <Fade bottom duration={2000} delay={1000} distance="30px">
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={image1}
              text='Directory to connect minorites in tech to providers of opportunities in a convenient single location'
              label='DRF React Heroku'
              path='https://techforme.herokuapp.com/'
            />
            <CardItem
              src={image2}
              text='Crowfunding website for group travel targeted at millenial and young professionals'
              label='DRF React Heroku'
              path='https://whispering-thicket-63800.herokuapp.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='News website that allows users to read the latest stories, and authors to create them.'
              label='Django'
              path='https://github.com/roxygia/she-codes-news'
            />
            <CardItem
              src={image4}
              text='Data science 101: Processing and Visualising Weather Data'
              label='Python Plotly'
              path='https://github.com/roxygia/Python/tree/master/project'
            />
          </ul>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Cards;
