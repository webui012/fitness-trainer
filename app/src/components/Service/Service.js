import React, {Component} from 'react'
import styles from './Service.scss'

const Service = props => {
    const imgSrc = `../../../images/${props.imgSrc}.png`;
    const imgSource = {
        backgroundImage: `url(${imgSrc})`
    }

    return (
      <div className={styles.service} style={imgSource}>
        <h2>{props.serviceName}</h2>
        <p>Learn more</p>
      </div>
    )
  }

export default Service;
