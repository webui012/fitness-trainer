import React from 'react';
import YouTube from '@u-wave/react-youtube';
import './Video.scss'
/*import { Player, PosterImage } from 'video-react';*/




/*
const Video = (props) =>
      <Player
            autoPlay
            aspectRatio="auto"
            /!*poster="/assets/poster.png"*!/
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
export default Video*/




const Video = (props) =>

    <YouTube className="youtube"
             video="ptJWKnQmPWI"
             autoplay
             /*width='100%'
             height="950"*/
    />


 export default Video

