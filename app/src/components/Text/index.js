import React from 'react';
import styles from './style.scss';

const Text = props =>
  <p className={styles.Text}>{props.content}</p>;

export default Text;
