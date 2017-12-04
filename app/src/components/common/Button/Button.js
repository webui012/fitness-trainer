import React, {Component} from 'react'
import './style.scss'

class Button extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <button className='service-button'>
        {this.props.text}
      </button>
    )
  }
}

export default Button;