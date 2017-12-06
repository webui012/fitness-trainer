import React, { Component } from 'react'
import './NutritionBlock.scss'
import Text from "../Text/Text";

const NutritionBlock = props => {
    return (
        <div className='title'>
                <ul className='work-list'>
                    <li className='work-list-item'>
                        <i class="fa fa-sliders " aria-hidden="true"></i>
                        <a href='#' className='work work-link'>Персонализация</a>
                        <Text />
                    </li>
                </ul>

        </div>
    )
}
export default NutritionBlock
