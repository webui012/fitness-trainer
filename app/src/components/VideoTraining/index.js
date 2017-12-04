import React from 'react'
import Video from 'react-video'

function VideoTraining(props){
  return (
    <Video className='video' videoId={props.videoId} />
    )
}

export default VideoTraining
