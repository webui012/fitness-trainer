import React from 'react';
import styles from './Logo.scss';

const Logo = props =>
  <div className={styles['logo-wrapper']}>
    {/* <img src='' alt='Logo' /> */}
    <span className={styles.logo} style={props.style}>Fitness</span>
  </div>;

export default Logo;
