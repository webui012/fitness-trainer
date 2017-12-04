import React, {Component} from 'react'
import ServiceSection from '../../common/ServiceSection/ServiceSection'
import MotiovationSection from '../../common/MotivationSection/MotiovationSection'
import './style.scss'

class Services extends React.Component{
  render(){
    return (
      <div className="services">
        <ServiceSection/>
        <MotiovationSection/>
      </div>
    )
  }
}

export default Services