import React from 'react'
import YouTube from 'react-youtube'

function Video(props)  {
  const opts = {
      height: '1000',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        end: 222,
        loop: 1,
        playlist: props.id,
    }
  };

    return (
      <YouTube
        videoId={props.id}
        opts={opts}

      />
    );
  }

export default Video
