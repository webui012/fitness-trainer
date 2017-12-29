import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVisibleOrders } from '../../redux/reducers/AdminOrders';
import { setVisibilityFilter } from '../../redux/actions';
import OrderItem from '../../components/OrderItem/OrderItem';
import './AdminOrders.scss';

class AdminOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'По цене'
    }
  }

  handleSelect = (e) => {
    switch (e.target.value) {
      case 'По цене':
        this.props.setVisibilityFilter('SORT_BY_PRICE')
        break;
      case 'По id':
        this.props.setVisibilityFilter('SORT_BY_ID')
        break;;
      case 'Оплачен':
        this.props.setVisibilityFilter('SHOW_PAYED')
        break;
      case 'Ожидает оплаты':
        this.props.setVisibilityFilter('SHOW_UNPAYED')
        break;
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className='orders-wrapper'>
        <div className='orders-select-wrapper'>

          <div className='select-item sort-select'>
            <span>Сортировка</span>
            <select onChange={this.handleSelect} name='sort'>
              <option value='По цене'>По цене</option>
              <option value='По id'>По id</option>
            </select>
          </div>

          <div className='select-item status-select'>
            <span>Статус</span>
            <select onChange={this.handleSelect} name='status'>
              <option value='Все'>Все</option>
              <option value='Оплачен'>Оплачен</option>
              <option value='Ожидает оплаты'>Ожидает оплаты</option>
            </select>
          </div>
          
          <div className='select-item payment-select'>
            <span>Оплата</span>
            <select onChange={this.handleSelect} name='payment'>
              <option value='Все'>Все</option>
              <option value='Приват 24'>Приват 24</option>
              <option value='WebMoney'>WebMoney</option>
              <option value='PUMB Online'>PUMB Online</option>
            </select>
          </div>

        </div>

        <div className='orders-body'>
          {this.props.orders.map((o, i) =>
            <OrderItem id={o.id}
                       key={i}
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

const mapStateToProps = state => {
  return {
    orders: getVisibleOrders(state)
  }
}

export default connect(mapStateToProps, { setVisibilityFilter })(AdminOrders);
