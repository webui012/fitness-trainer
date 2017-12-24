import React from 'react';
import PropTypes from 'prop-types';
import './OrderFilter.scss';

const OrderFilter = props => {
    const {week, day, month, years, other, training, nutritionPlans, rich, poor, midlle, } = props;
    return (
        <div className='item-wrap-filter'>
            <select className='order-folter'>
                <option value='datas'>Сортировать по дате</option>
                <option value='day'>{day}</option>
                <option value='years'>{years}</option>
                <option value='week'>{week}</option>
                <option value='month'>{month}</option>
            </select>
            <select className='order-folter'>
                <option value='names'>Сортировать по названию</option>
                <option value='nutrition'>{nutritionPlans}</option>
                <option value='training'>{training}</option>
                <option value='other'>{other}</option>
            </select>
            <select className='order-folter'>
                <option value='names'>Сортировать по цене</option>
                <option value='poor'>{poor}</option>
                <option value='rich'>{rich}</option>
                <option value='midlle'>{midlle}</option>
            </select>
        </div>
    )
}
OrderFilter.propTypes = {
    week: PropTypes.string,
    day: PropTypes.string,
    month: PropTypes.string,
    years: PropTypes.string,
    nutritionPlans: PropTypes.string,
    training: PropTypes.string,
    other: PropTypes.string,
    poor: PropTypes.string,
    rich: PropTypes.string,
    midlle: PropTypes.string,

}

export default OrderFilter
