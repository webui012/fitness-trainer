import React, {Component} from 'react'
import ServiceSection from '../../ServiceSection/ServiceSection'
import MotiovationSection from '../../MotivationSection/MotiovationSection'
import styles from './Services.scss'

const Services = props =>
  <div className={styles.services}>
    <ServiceSection />
    <MotiovationSection />
  </div>

export default Services
