import React from 'react';
import styles from './Logo.scss';

const Logo = props =>
  <div className={styles['logo-wrapper']}>
    {/* <img src='' alt='Logo' /> */}
    <a href='#' className={styles.logo} style={props.style}>Fitness</a>
  </div>;

export default Logo;
