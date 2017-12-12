import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import styles from './Slider.scss';

const Slider = props => {
  const params = props.data.sliderParams,
        slides = props.data.slides
    return (
      <Swiper {...params}>
        {slides.map((slider, i) =>
          <div key={i}>
            <img src={slider.url} alt={slider.alt} />
          </div>)}
      </Swiper>
    )
}

export default Slider
