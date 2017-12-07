import React from 'react'
import Video from '../Video/Video.js'
import Text from '../Text/Text.js'
import Image from '../Image/Image.js'

import './PersonalTraining.scss'

const PersonalTraining = () =>
  <section className={styles.PersonalTraining}>
    <Video />
    <Text />
    <div className='online-img'>
      <Image />
      <Image />
      <Image />
    </div>
    <Text />
  </section>

export default PersonalTraining
