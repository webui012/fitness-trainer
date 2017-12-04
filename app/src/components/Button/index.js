import React, { Component } from 'react'
import './style.scss'


const Button = props => {
    return(
        <div className={styles.Button}>
            <button className="btn-motivation">{/*Начни тренироваться онлайн*/} {props.ButtonName}</button>
        </div>

    );
}

export default Button
