import React from 'react';
import styles from './Image.scss';

const Image = props =>
  <img className={props.class} src={props.path} alt={props.description} />;

export default Image;
