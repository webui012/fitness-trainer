import React, {Component} from 'react'
import Service from '../Service/Service';

import khudaev from '../../images/khudaev.png'
import khudaev1 from '../../images/khudaev1.png'
import khudaev2 from '../../images/khudaev2.png'
import styles from './ServiceSection.scss'

class ServiceSection extends React.Component{
  render(){
    return (
      <section className={styles[`service-section`]}>
        <Service serviceName="Персноальная тренировка 1 на 1" imgSrc="khudaev"/>
        <Service serviceName="Индивидуальная программа" imgSrc="khudaev1"/>
        <Service serviceName="Правильное питание" imgSrc="khudaev2"/>
        <Service serviceName="Заказать на девичник" imgSrc="khudaev"/>
      </section>
    )
  }
}

export default ServiceSection