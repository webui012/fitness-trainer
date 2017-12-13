import React, { Component } from 'react'
import {
  Logo,
  Navigation,
  Socials
} from 'Components';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo />
      <span className='logo-caption'>Find your perfect body!</span>
      <Navigation />
      <Socials />
      <p className='copyright'>&copy;2017 All Rights Reserved</p>
    </footer>
  )
}

export default Footer
