import React, {Component} from 'react'
import Button from  './../Button/Button';
import styles from './MotiovationSection.scss'

class MotivationSection extends React.Component{
  render(){
    return (
      <section className={styles[`motivation-section`]}>
        <h3>Стань лучше прямо сейчас!</h3>
        <Button text='Начать тренироваться' classStyle={styles[`service-button`]}/>
      </section>
    )
  }
}

export default MotivationSection