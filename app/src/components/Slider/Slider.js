import React from 'react';
import Swiper from 'react-id-swiper';

const Slider = props => {
  const { sliderParams, slides } = props.data;

  return (
    <Swiper {...sliderParams}>
      {slides.map((slider, i) =>
        <div key={i}>
          <img src={slider.url} alt={slider.alt} />
        </div>)}
    </Swiper>
  )
}

export default Slider
