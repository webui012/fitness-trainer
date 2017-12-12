import React from 'react';
import {Text} from 'Components';
import './SalesItem.scss';

const SalesItem = props =>
  <div className='itemWrap'>
    <div className='itemInfo'>
      <h1>{props.salesHeadline}</h1>
      <Text content={props.content} />
      <p className='expires'>Expires {props.expireDate}</p>
    </div>

    <div className='itemImg'>
      <div className='itemImgMask'></div>
      <p>{props.salesImgCaption}</p>
    </div>

  </div>

export default SalesItem
