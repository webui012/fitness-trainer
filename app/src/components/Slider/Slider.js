import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import styles from './Slider.scss';

const Slider = props => {
    const params = {
      containerClass: styles.slider,
      paginationCustomizedClass: styles.pagination,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 0,
      speed: 1000,
      loop: true,
    }
    return (
      <Swiper {...params}>
        <div>
          <img src={props.slide1} alt='slide1' />
        </div>
        <div>
          <img src={props.slide2} alt='slide2' />
        </div>
        <div>
          <img src={props.slide3} alt='slide3' />
        </div>
      </Swiper>
    )
}

export default Slider
