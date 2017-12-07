import React from 'react'
import YouTube from '@u-wave/react-youtube';
import Text from '../Text/Text.js'
import Image from '../Image/Image.js'

import './PersonalTraining.scss'

const PersonalTraining = () =>
  <section className='PersonalTraining'>
    <YouTube video='duXyGlVSacM' className='video' />
    <Text />
    <div className='online-img'>
      <Image />
      <Image />
      <Image />
    </div>
    <Text />
  </section>

export default PersonalTraining
