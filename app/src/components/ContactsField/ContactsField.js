import React, { Component } from 'react';

import styles from './ContactsField.scss'


const ContactsField = (props) => 
    <div className={styles.text}>
        <p><span className={styles.textTitle}>{props.title}</span>
            {props.data}
        </p>
    </div>


export default ContactsField