import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
/*import {
  Text,
  Image
} from 'Components';*/
import './ReviewSection.scss';


const Review = props => {
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
                            <p  className='review-text'>{slider.text}</p>
                        </div>
                        <img className='review-avatar' src={slider.url} alt={slider.alt} />
                    </div>)}
            </Swiper>
        </div>
    )





/*  return (
      <Swiper {...params} className='swiper-wrapper'>
          {reviewsData.map((review, i) => {
              return (
                  <div key={i} className='review-slide'>
                      <div className='slide-content'>
                          <span className='review-name'>{review.name}</span>
                          <Text textClass='review-text' content={review.text} />
                      </div>
                      <Image imageClass='review-avatar' path={review.photo} />
                  </div>
              )
          })}
      </Swiper>
  )*/
}

export default Review
