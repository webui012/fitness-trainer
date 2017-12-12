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
        {props.data.map((slider, i) =>
          <div key={i}>
            <img src={slider.url} alt={slider.alt} />
          </div>)}
      </Swiper>
    )
}

export default Slider
