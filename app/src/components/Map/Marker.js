import React, { Component } from 'react';

const Marker = props => {
    return (
        <div className={props.textClass}>
            <span>{props.text}</span>
        </div>
    )
}

export default Marker;