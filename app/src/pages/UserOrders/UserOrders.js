import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVisibleOrders, getUserSelections } from '../../redux/reducers/userOrders';
import { setOrdersVisibilityFilter } from '../../redux/actions';
import OrderItem from '../../components/OrderItem/OrderItem';
import './UserOrders.scss';

class UserOrders extends Component {
  constructor(props) {
    super(props);
  }

  // Select items render
  renderSelections = selections => {
    return selections.map((select, i) => {
      const { type, options } = select;

      return (
        <div key={i} className='select-item'>
          <span>{type}</span>
          <select onChange={this.handleSelect}>
            {this.renderOptions(options)}
          </select>
        </div>
      )
    })
  };

  // Render options for each select item
  renderOptions = options => {
    return options.map((o, i) =>
      <option key={i} value={o.value}>{o.value}</option>
    )
  };

  // Orders list render
  renderOrders = orders => {
    return orders.map((order, i) =>
      <OrderItem id={order.id}
                 key={i}
                 date={order.date}
                 price={order.price}
                 payment={order.payment}
                 status={order.status}
                 service={order.service}/>)
  };

  handleSelect = e => {
    switch (e.target.value) {
      case 'По цене':
        this.props.setOrdersVisibilityFilter('SORT_BY_PRICE');
        break;
      case 'По id':
        this.props.setOrdersVisibilityFilter('SORT_BY_ID');
        break;
      case 'Оплачен':
        this.props.setOrdersVisibilityFilter('SHOW_PAYED');
        break;
      case 'Ожидает оплаты':
        this.props.setOrdersVisibilityFilter('SHOW_UNPAYED');
        break;
    }
  };

  render() {
    const { orders, selections } = this.props;

    return (
      <div className='orders-wrapper'>
        <div className='orders-select-wrapper'>
          {this.renderSelections(selections)}
        </div>

        <div className='orders-body'>
          {this.renderOrders(orders)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selections: getUserSelections(state),
    orders: getVisibleOrders(state)
  }
};

export default connect(mapStateToProps, { setOrdersVisibilityFilter })(UserOrders);
