import React, { Component } from 'react'
import {
  Logo,
  Navigation,
  Socials
} from 'Components';
import './Footer.scss'
import FooterData from './FooterData'

const Footer = () => {
  const logo = FooterData.logo,
        caption = FooterData.caption,
        socials = FooterData.socials,
        copyright = FooterData. copyright
  return (
    <footer className='footer'>
      <Logo data={logo} />
      <span className='logo-caption'>{caption}</span>
      <Navigation />
      <Socials data={socials} />
      <p className='copyright'>{copyright}</p>
    </footer>
  )
}

export default Footer
