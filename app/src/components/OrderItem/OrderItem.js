import React from 'react';
import './OrderItem.scss';

const OrderItem = ({ title, desc, price, img }) => (
  <div className='order-item'>
    <div className='order-img-wrapper'>
      <img src={img} alt='img' className='order-img'/>
    </div>
    <div className='order-content'>
      <h1 className='order-title'>{title}</h1>
      <span className='order-price'>{price}</span>
      <p className='order-description'>{desc}</p>
    </div>
  </div>
);

export default OrderItem;
