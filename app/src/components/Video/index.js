import React from 'react';
/*import { Player, PosterImage } from 'video-react';*/
import YouTube from '@u-wave/react-youtube';
/*import './style.scss'*/



/*
 const Video = (props) => {
    return (
        <Player
            autoPlay
            poster="/assets/poster.png"
            src="http://www.w3schools.com/html/mov_bbb.mp4"
        />
    );
};

export default Video*/



const Video = (props) => {
    return (
        <YouTube
            video={props.video}
            /*autoplay*/
            width="100%"
            height="700"
        />
    );
};



export default Video