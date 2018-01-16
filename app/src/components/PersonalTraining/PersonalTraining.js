import React from 'react';
import YouTube from '@u-wave/react-youtube';
import PropTypes from 'prop-types';
import './PersonalTraining.scss';

const PersonalTraining = props => {
  const { videoId, texting, photo } = props.data;
  return (
    <section className='personal-training'>
      <YouTube video={videoId} className='video-online' autoplay />
      <p className='training-text'>{texting}</p>
      <img className='training-photo' src={photo} />
    </section>
  );
};

PersonalTraining.propTypes = {
  videoId: PropTypes.string,
  texting: PropTypes.string,
  photo: PropTypes.string,
};

export default PersonalTraining;
