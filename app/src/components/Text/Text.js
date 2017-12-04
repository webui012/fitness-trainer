import React from 'react';
import styles from './Text.scss';

const Text = props =>
  <p className={styles.Text}>{props.content}</p>;

export default Text;
