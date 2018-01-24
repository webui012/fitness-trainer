import React from 'react';
import PropTypes from 'prop-types';
import './TextBlock.scss';

const TextBlock = props =>
  <div className='text-block'>
    <h3 className='text-caption'>{props.header}</h3>
    {props.paragrafs.map(data =>
      <p key={data.id}>{data.paragraf}</p>
    )}
  </div>;

TextBlock.propTypes = {
  header: PropTypes.string,
  paragrafs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    paragraf: PropTypes.string,
  })),
};

export default TextBlock;
