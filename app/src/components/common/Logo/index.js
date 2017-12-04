import React from 'react'
import './style.scss'

const Logo = props => {
  return (
    <div className='logo-wrapper'>
      <span className='logo' style={props.style}>Fitness</span>
    </div>
  )
}

export default Logo
