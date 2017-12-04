import React, {Component} from 'react'
import styles from './Button.scss'

const Button = props =>
  <button className={styles[`service-button`]}>
    {props.text}
  </button>

export default Button;
