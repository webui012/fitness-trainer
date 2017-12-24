import React from 'react';
import PropTypes from 'prop-types';
import './OrderSection.scss';

const OrderSection = props => {
    const {orderHeadline, content, price, priceOnes, data, dataOne,orderNumber, } = props;
    return (
        <div className='item-wrap-order'>
            <h3 className='caption-order'> Заказ № {orderNumber}</h3>
            <div className='item-img-order'>
                <div className='item-img-mask-order'></div>
            </div>

            <div className='item-info-order'>
                <table className='order-table'>
                    <tbody className='order-tbody'>
                    <tr className='order-tr'>
                        <th className='order-th' colSpan={3} >{orderHeadline}</th>
                    </tr>
                    <tr className='order-tr'>
                        <td className='order-td'>{data} {dataOne}</td>
                        <td className='order-td'>{content}</td>
                    </tr>
                    <tr className='order-tr'>
                        <td className='order-td'>{price} {priceOnes}</td>
                        <td className='order-td'>{content}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
OrderSection.propTypes = {
    orderHeadline: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.string,
    priceOnes: PropTypes.string,
    data: PropTypes.string,
    dataOne: PropTypes.string,
    orderNumber: PropTypes.number
}

export default OrderSection
