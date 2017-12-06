import React, {Component} from 'react'
import ServiceSection from '../../ServiceSection/ServiceSection'
import MotivationSection from '../../MotivationSection/MotiovationSection'
import styles from './Services.scss'

const Services = props =>
  <div className={styles.services}>
    <ServiceSection />
    <MotivationSection />
  </div>

export default Services
