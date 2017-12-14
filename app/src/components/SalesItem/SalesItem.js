import React from 'react';
import PropTypes from 'prop-types';
import './SalesItem.scss';

const SalesItem = props => {
  return (
    <div className='itemWrap'>
      <div className='itemInfo'>
        <h1 className='infoHeader'>{props.salesHeadline}</h1>
        <p className='infoContent'>{props.content}</p>
        <p className='expires'>Expires {props.expireDate}</p>
      </div>

      <div className='itemImg'>
        <div className='itemImgMask'></div>
        <h1>{props.salesImgCaption}</h1>
      </div>

    </div>
  )
}
SalesItem.propTypes = {
  salesHeadline: PropTypes.string,
  content: PropTypes.string,
  expireDate: PropTypes.string,
  salesImgCaption: PropTypes.string
}

export default SalesItem
