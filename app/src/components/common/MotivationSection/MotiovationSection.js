import React, {Component} from 'react'
import Button from '../../common/Button/Button';
import './style.scss'

class MotivationSection extends React.Component{
  render(){
    return (
      <section className="motivation-section">
        <h3>Стань лучше прямо сейчас!</h3>
        <Button text="Начать тренироваться" classStyle="service-button"/>
      </section>
    )
  }
}

export default MotivationSection