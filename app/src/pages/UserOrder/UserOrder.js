import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVisibleOrders } from '../../redux/reducers/UserOrder';
import { setVisibilityFilter } from '../../redux/actions';
import UserOrderItem from '../../components/UserOrderItem/UserOrderItem';
import './UserOrder.scss';

class UserOrder extends Component {
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
                break;
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
            <div className='user-orders-wrapper'>
                <div className='user-orders-select-wrapper'>

                    <div className='user-select-item sort-select'>
                        <span>По названию</span>
                        <select onChange={this.handleSelect} name='sort'>
                            <option value='По цене'>По цене</option>
                            <option value='По id'>По id</option>
                        </select>
                    </div>

                    <div className='user-select-item status-select'>
                        <span>Статус</span>
                        <select onChange={this.handleSelect} name='status'>
                            <option value='Все'>Все</option>
                            <option value='Оплачен'>Оплачен</option>
                            <option value='Ожидает оплаты'>Ожидает оплаты</option>
                        </select>
                    </div>

                    <div className='user-select-item user-payment-select'>
                        <span>Оплата</span>
                        <select onChange={this.handleSelect} name='payment'>
                            <option value='Все'>Все</option>
                            <option value='Приват 24'>Приват 24</option>
                            <option value='WebMoney'>WebMoney</option>
                            <option value='PUMB Online'>PUMB Online</option>
                        </select>
                    </div>

                </div>

                <div className='user-orders-body'>
                    {this.props.orders.map((o, i) =>
                        <UserOrderItem id={o.id}
                                   key={i}
                                   date={o.date}
                                   price={o.price}
                                   payment={o.payment}
                                   status={o.status}
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

export default connect(mapStateToProps, { setVisibilityFilter })(UserOrder);
