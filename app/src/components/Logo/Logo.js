import React from 'react'
import styles from './Logo.scss'

const Logo = props => {
  return (
    <div className={styles[`logo-wrapper`]}>
      <span className={styles.logo} style={props.style}>Fitness</span>
    </div>
  )
}

export default Logo
