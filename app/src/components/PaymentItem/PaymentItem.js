import React from 'react'
import Text from '../Text/Text.js'
import Image from '../Image/Image.js'
import './PaymentItem.scss'

const PaymentItem = props =>
  <div className='payment-item'>
    <div className='payment-content'>
      <Text content={props.content} />
    </div>
    <Image imageClass='payment-img' path={props.img} />
  </div>
