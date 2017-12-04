import React, { Component } from 'react'
import './style.scss'

const Logo = props => {
  return (
    <div className='logo-wrapper'>
      {/* <img src='' alt='Logo' /> */}
      <span className='logo' style={props.style}>Fitness</span>
    </div>
  )
}

export default Logo
