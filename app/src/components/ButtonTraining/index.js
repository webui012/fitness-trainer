import React from 'react'
import {Button} from 'react-bootstrap'

function ButtonTraining(props){
  return(
    <Button bsSize = 'large' bsStyle = 'success'>{props.text}</Button>
    )
}

export default ButtonTraining
