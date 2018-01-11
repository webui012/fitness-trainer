import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import './ReviewSection.scss';


const ReviewSection = props => {
   const params = props.data.sliderParams,
        slides = props.data.slides


    return (
      <div>
        <h3 className='title-name'>{props.data.title}</h3>
        <Swiper {...params} className='swiper-wrapper'>
          {slides.map((slider, i) =>
            <div key={i} className='review-slide'>
              <div className='slide-content'>
                <span className='review-name'>{slider.name}</span>
                <p className='review-text'>{slider.text}</p>
              </div>
              <img className='review-avatar' src={slider.url} alt={slider.alt} />
            </div>)}
        </Swiper>
      </div>
    )
}

ReviewSection.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    alt: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string
};

export default ReviewSection;
