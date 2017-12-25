import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllOrdersSelector } from '../../redux/reducers/AdminOrders';
import OrderItem from '../../components/OrderItem/OrderItem';
import './AdminOrders.scss';


class AdminOrders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='orders-wrapper'>
        <div className='orders-select-wrapper'>
          <div className='select-item sort-select'>
            <span>Сортировка</span>
            <select name=''>
              <option value='По цене'>По цене</option>
              <option value='По дате'>По дате</option>
              <option value='По id'>По id</option>
            </select>
          </div>
          
          <div className='select-item payment-select'>
            <span>Оплата</span>
            <select name=''>
              <option value='Приват 24'>Приват 24</option>
              <option value='WebMoney'>WebMoney</option>
              <option value='PUMB Online'>PUMB Online</option>
            </select>
          </div>
          
          <div className='select-item status-select'>
            <span>Статус</span>
            <select name=''>
              <option value='Оплачен'>Оплачен</option>
              <option value='Не оплачен'>Не оплачен</option>
            </select>
          </div>
        </div>
        <div className='orders-body'>
          {this.props.orders.map((o, i) => 
            <OrderItem id={o.id} 
                       date={o.date} 
                       price={o.price}     
                       payment={o.payment}     
                       status={o.status} 
                       customer={o.customer} 
                       service={o.service}/>)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orders: getAllOrdersSelector(state)
  }
}

export default connect(mapStateToProps, null)(AdminOrders);
