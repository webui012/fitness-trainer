import React from 'react'
import Text from '../Text/Text.js'
import styles from './SalesItem.scss'

const SalesItem = props =>

  <div className ={styles.itemWrap}>

    <div className ={styles.itemInfo}>
    	<h1>{props.salesHeadline}</h1>
    	<Text content = {props.content}/>
    	<p className = {styles.expires}>Expires {props.expireDate}</p>
    </div>

    <div className ={styles.itemImg}>
    	<div className ={styles.itemImgMask}>
    	</div>
    	<p>{props.salesImgCaption}</p>
   	</div>

  </div>

export default SalesItem