import React from 'react';
import PropTypes from 'prop-types';
import './SalesItem.scss';

const SalesItem = props => {
  const { salesHeadline, content, expireDate, salesImgCaption } = props;
  return (
    <div className='item-wrap'>
      <div className='item-info'>
        <h1 className='info-header'>{salesHeadline}</h1>
        <p className='info-content'>{content}</p>
        <p className='expires'>Expires {expireDate}</p>
      </div>

      <div className='item-img'>
        <div className='item-img-mask'></div>
        <h1>{salesImgCaption}</h1>
      </div>

    </div>
  );
};

SalesItem.propTypes = {
  salesHeadline: PropTypes.string,
  content: PropTypes.string,
  expireDate: PropTypes.string,
  salesImgCaption: PropTypes.string,
};

export default SalesItem;
