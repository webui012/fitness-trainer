import React from 'react';

const Image = props =>
  <img className={props.imageClass} src={props.path} alt={props.description} />;

export default Image;
