import React from 'react';
import {SalesItem} from 'Components';
import SalesData from './SalesData';
import './Sales.scss';

const Sales = props => {
  return (
    <div className='sales-wrap'>
      {
        SalesData.map(item => <SalesItem key={item.id}
            salesHeadline={item.salesHeadline}
            content={item.content}
            expireDate={item.expireDate}
            salesImgCaption={item.salesImgCaption}
                               />
        )
      }
    </div>
  )
}
export default Sales