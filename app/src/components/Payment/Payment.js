import React from 'react'
import Text from '../Text/Text.js'
import PaymentItem from '../PaymentItem/PaymentItem.js'
import './Payment.scss'


const Payment = () => {
	const headPayment = 'Оплата заказанного товара и услуг в нашем интернет-магазине  может производиться следующими способами:'
  const paymentItem1 = 'Способ №1 - Наличными Вы оплачиваете товар в офисе или курьеру после получения товара (только для Харькова). Оплата услуг проводится в офисе, согласно с программой тренировки.'
  const paymentItem2 = 'Способ №2 - Безналичный расчет. Для частных лиц:После приема заказа мы предоставим счет, который вы сможете оплатить со своего счета или в отделении любого банка (при этом вам придется оплатить услуги банка - обычно это 5% от суммы оплаты).Для юридических лиц (при оплате с НДС в г. Харьков):После приема заказа мы выставим вам счет для оплаты. Все необходимые документы (оригинал счета, расходная и налоговая накладные) будут предоставлены в офисе или высланы на email .Для выставления счета с НДС, Вам необходимо предоставить:1. Свидетельство регистрации юридического лица;2. Свидетельство плательщика НДС;3. Телефон для налоговых накладных;4. Email куда будет отправлен счет.Скан копии документов высылайте на email ……….Счет действителен в течении 5х банковских дней '
  const urlPaymentImg1 = 'http://www.freeiconspng.com/uploads/cash-payment-icon-5.png'
  const urlPaymentImg2 = 'http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Payment%20Methods%20Bank%20cards.ico'

	return (
		<div>
			<div className='paymentHead'>
				<Text content={headPayment} />
			</div>
			<PaymentItem content={paymentItem1} img={urlPaymentImg1} />
			<PaymentItem content={paymentItem2} img={urlPaymentImg2} />
		</div>
	)
}



export default Payment
