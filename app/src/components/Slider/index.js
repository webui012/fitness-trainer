import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import './style.scss'

class Slider extends Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }
    return (
      <Swiper {...params}>
        <div>
          <img src='https://media.self.com/photos/5867a314bf5e49f716efe864/2:1/pass/workout-package_1.png' alt=''/>
        </div>

        <div>
          <img src='http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-498315681.jpg?itok=qqWRWFw9' alt=''/>
        </div>
      </Swiper>
    )
  }
}

export default Slider
