import React from 'react';
import {Text} from 'Components';
import PaymentItem from '../PaymentItem';
import PaymentData from './PaymentData';
import './Payment.scss';


const Payment = () => {
  
  return (
  <div>
    <div className='payment-head'>
      <Text content={PaymentData.headPayment} />
    </div>
    {
      PaymentData.paymentItem.map (item => <PaymentItem key={item.id}
                      content={item.paymentItem}
                      img={item.urlPaymentImg}
                      />
                    );
    }
  </div>
  )
}



export default Payment
