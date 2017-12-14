import React from 'react';
import {
  Text,
  Image
} from 'Components';
import PropTypes from 'prop-types';
import './PaymentItem.scss';

const PaymentItem = props => { 
  <div className='payment-item'>
    <div className='payment-content'>
      <Text content={props.content} />
    </div>
    <Image imageClass='payment-img' path={props.img} />
  </div>
};

PaymentItem.propTypes = {
	content: PropTypes.string,
	img: PropTypes.string
}


export default PaymentItem