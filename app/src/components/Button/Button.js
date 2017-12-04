import React, {Component} from 'react'
import styles from './Button.scss'

class Button extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <button className={styles[`service-button`]}>
        {this.props.text}
      </button>
    )
  }
}

export default Button;