import React from 'react';
import YouTube from '@u-wave/react-youtube';
import './Video.scss';

const Video = props => {
  return (
    <YouTube
        className={props.className}
        video={props.videoId}
        autoplay />
  )
}

export default Video
