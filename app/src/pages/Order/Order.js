import React from 'react';
import {OrderSection, OrderFilter} from 'Components';
import OrderData from './OrderData';

const Order = props => {
    return (
        <div className='sales-wrap'>
            {
                OrderData.form.map(item => <OrderSection key={item.id}
                                                         orderHeadline={item.orderHeadline}
                                                         content={item.content}
                                                         price={item.price}
                                                         data={item.data}
                                                         orderNumber={item.orderNumber}
                    />
                )
            }
            {
                OrderData.form.map(item => <OrderSection key={item.id}
                                                         orderHeadline={item.orderHeadline}
                                                         content={item.content}
                                                         priceOnes={item.priceOnes}
                                                         dataOne={item.dataOne}

                    />
                )
            }
            {

                OrderData.order.map(item => <OrderFilter key={item.id}
                                                         week={item.week}
                                                         month={item.month}
                                                         years={item.years}
                                                         day={item.day}
                                                         other={item.other}
                                                         training={item.trailing}
                                                         nutritionPlans={item.nutritionPlans}
                                                         poor={item.poor}
                                                         midlle={item.midlle}
                                                         rich={item.rich}
                    />
                )
            }

        </div>
    )
}

export default Order
