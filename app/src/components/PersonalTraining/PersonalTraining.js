import React from 'react';
import YouTube from '@u-wave/react-youtube';
import {
  Text,
  Image
} from 'Components';

import './PersonalTraining.scss'

const PersonalTraining = () =>
  <section className='PersonalTraining'>
    <YouTube video='duXyGlVSacM' className='video' />
    <Text />
    <div className='online-img'>
      <Image />
      <Image />

    </div> <Image />
    <Text />
  </section>

export default PersonalTraining
