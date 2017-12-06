import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import './SliderNutrition.scss'

class SliderNutrition extends Component {
    render() {
        const params = {
            autoplay: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            spaceBetween: 0,
            speed: 1000,
            loop: true,
        };
        return (
            <Swiper {...params}>
                <div>
                    <img src='http://budapest2010.com/wp-content/uploads/2017/02/gWHD-n3Dirk.jpg' alt='slide1'/>
                </div>
                <div>
                    <img src='https://vfigure.ru/wp-content/uploads/2013/08/573eb723f30a31-min.jpg' alt='slide2'/>
                </div>
                <div>
                    <img src='http://www.healthydietbase.com/wp-content/uploads/2014/11/bigstock-Shaped-And-Healthy-Man-Holding-60234383-840x560.jpg' alt='slide3'/>
                </div>
            </Swiper>
        )
    }
}

export default SliderNutrition