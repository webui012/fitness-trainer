import React from 'react'
// import Slider from '../Slider'
import styles from './style.scss'

const Main = props =>
  <div className={styles.main}>
    {props.children}
  </div>

export default Main
