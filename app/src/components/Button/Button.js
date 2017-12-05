import React from 'react'
import {Button} from 'react-bootstrap'
import styles from './Button.scss'

function ButtonTraining(props){
  return(
    <Button className = {styles.button} bsSize = 'large' bsStyle = 'success'>{props.text}</Button>
    )
}

export default ButtonTraining
