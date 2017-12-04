import React from 'react'
import {Image} from 'react-bootstrap'

function ImageTraining(props){
  return (
    <Image className ='image' src={props.src} />
    )
}

export default ImageTraining
