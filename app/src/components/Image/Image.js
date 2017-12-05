import React from 'react';
import styles from './Image.scss';

const Image = props =>
  <img className={styles.Image} src="http://hochu.ua/images/articles/59576_0.jpg" alt={props.description} />;

export default Image;
