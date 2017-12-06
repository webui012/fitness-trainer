import React from 'react'
import Text from '../Text/Text.js'
import styles from './PaymentItem.scss'

const PaymentItem = (props) => {
	
	return (
		<div className = {styles.paymentItem}>
			<div className ={styles.content}>
				<Text content = {props.content} />
			</div>
			<img className = {styles.image} src = {props.img} />

		</div>
	) 
}

  

export default PaymentItem