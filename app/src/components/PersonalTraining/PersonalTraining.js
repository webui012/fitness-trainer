import React from 'react';
import YouTube from '@u-wave/react-youtube';
import './PersonalTraining.scss'

const PersonalTraining = props  =>
  <section className='PersonalTrainin'>
    <YouTube video={props.data.videoId} className='video-online'  /* autoplay*//>
      <p  className='training-text'>{props.data.texting}</p>
      <img className='training-photo' src={props.data.photo}  />
  </section>

export default PersonalTraining
