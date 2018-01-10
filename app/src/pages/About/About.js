import React from 'react';
import YouTube from '@u-wave/react-youtube';
import aboutData from './aboutData';
import './About.scss';

const About = props => {
  const { paragrafText, imageSrc, imageAlt, videoId } = aboutData;
  return (
    <section className='about'>
      <div className='container'>
        <h3 className='caption'>Биография</h3>
        <img src={imageSrc} className='photo' alt={imageAlt} />
        <p className='content first-paragraph'>{paragrafText}</p>
        <p className='content'>{paragrafText}</p>
        <YouTube video={videoId} className='video' />
      </div>
    </section>
  );
}

export default About;