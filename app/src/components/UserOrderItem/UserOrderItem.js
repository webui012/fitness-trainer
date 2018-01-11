import React from 'react';
import './UserOrderItem.scss';

const UserOrderItem = ({ id, date, service, price, payment, status }) => (
    <div className='user-order-item'>
        <header className='user-order-header'>
            <span className='user-order-id'>#{id}</span>
            <span className='user-order-date'>{date}</span>
        </header>
        <main className='user-order-body'>
            <span className='user-order-service'>Услуга: {service}</span>
            <span className='user-order-price'>Цена: {price}$</span>
            <span className='user-order-status'>Оплата: {payment}</span>
            <span className='user-order-status'>Статус: {status}</span>
        </main>
    </div>
);

export default UserOrderItem;