import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderItem from '../../components/OrderItem/OrderItem';
import './UserOrders.scss';
import { Card, Icon, Image, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getVisibleOrders, getAdminSelections, getLoadingStatus } from '../../redux/reducers/orders';
import { fetchOrders, setOrdersVisibilityFilter } from '../../redux/actions';


class UserOrders extends Component {

  // Select items render
  renderSelections = selections =>
    selections.map((select, i) => {
      const { type, options } = select;

      return (
        <div key={i} className='select-item'>
          <span>{type}</span>
          <select onChange={this.handleSelect}>
            {this.renderOptions(options)}
          </select>
        </div>
      );
    });


  // Render options for each select item
  renderOptions = options =>
    options.map((o, i) =>
      <option key={i} value={o.value}>{o.value}</option>
    );

  // Orders list render
  renderOrders = orders => {
    return orders.map((order, i) => {
      let color = order.status ? 'green' : 'red'

      return (
        <Card key={order._id} color={color}>
          <Card.Content>
            <Card.Header># {order._id.substring(0,10)}</Card.Header>
            <Card.Meta>
              <span className='date'>{order.date.substring(0,10)}</span>
            </Card.Meta>

            <Card.Description>
              {order.serviceType}
            </Card.Description>
            <Card.Description>
              {order.trainingPurpose}
            </Card.Description>
          </Card.Content>
        </Card>
      )
    });
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
        this.props.setOrdersVisibilityFilter('SHOW_PAID');
        break;
      case 'Ожидает оплаты':
        this.props.setOrdersVisibilityFilter('SHOW_UNPAID');
        break;
    }
  };

  componentDidMount = () => {
    this.props.fetchOrders()
  }

  render() {
    const { orders, selections, isLoading } = this.props;

    return (
      <div className='orders-wrapper'>
        { isLoading && <Dimmer active inverted><Loader/></Dimmer>}
        {/* <div className='orders-select-wrapper'>
          {this.renderSelections(selections)}
        </div> */}

        <div className='orders-body'>
          {(orders.length == 0) && <h1>Нет заказов :(</h1>}
          {this.renderOrders(orders)}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  selections: getAdminSelections(state),
  orders: getVisibleOrders(state),
  isLoading: getLoadingStatus(state)
});

const mapDispatchToProps = {
  setOrdersVisibilityFilter,
  fetchOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
