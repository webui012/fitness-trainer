import React, {Component} from 'react'
import ServiceSection from '../../ServiceSection/ServiceSection'
import MotiovationSection from '../../MotivationSection/MotiovationSection'
import styles from './Services.scss'

class Services extends React.Component{
  render(){
    return (
      <div className={styles.services}>
        <ServiceSection/>
        <MotiovationSection/>
      </div>
    )
  }
}

export default Services
