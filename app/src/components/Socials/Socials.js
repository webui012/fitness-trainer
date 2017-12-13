import React, {Component} from 'react';
import './Socials.scss';
import SocialsData from './SocialsData'

const Socials = props => {
  const socials = SocialsData.socials
  return (
    <div className='socials'>
      {socials.map((social, i) => {
        return (
          <a key={i} href={social.url} className='social-link'>
            <img src={social.icon} alt={social.name} />
          </a>
        )
      })}
    </div>
  )
}

export default Socials;
