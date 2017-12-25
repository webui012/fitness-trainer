import React from 'react';
import { connect } from 'react-redux';
import { getAllOrders } from '../../redux/reducers/AdminOrders';
import OrderItem from '../../components/OrderItem/OrderItem';
import './AdminOrders.scss';

const AdminOrders = ({ orders }) => (
  <div className='orders-wrapper'>
    {orders.map((o, i) => <OrderItem title={o.title} desc={o.desc} price={o.price} img={o.img}/>)}
  </div>
);


function mapStateToProps(state) {
  return {
    orders: getAllOrders(state)
  }
}

export default connect(mapStateToProps, null)(AdminOrders);
