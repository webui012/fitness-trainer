import React from 'react';
import styles from './Text.scss';

const Text = props =>
<p className={props.textClass}>{props.content}</p>;


export default Text;
