import React from 'react';
import './OrderItem.scss';

const OrderItem = ({ id, date, service, price, payment, status, customer }) => (
  <div className='order-item'>
    <header className='order-header'>
      <span className='order-id'>#{id}</span>
      <span className='order-date'>{date}</span>
    </header>
    <main className='order-body'>
      <span className='order-service'>Услуга: {service}</span>
      <span className='order-price'>Цена: {price}$</span>
      <span className='order-status'>Оплата: {payment}</span>
      <span className='order-status'>Статус: {status}</span>
      <span className='order-customer'>{customer}</span>
    </main>
  </div>
);

export default OrderItem;
