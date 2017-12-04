import React from 'react';
import styles from './style.scss';

const Image = props =>
    <img className={styles.Image} src={props.path} alt={props.description} />;

export default Image;
