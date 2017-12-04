import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import Text from '../Text'
import Image from '../Image'
import Video from '../Video'
import './style.scss'


class Review extends Component {
    render() {
        const params = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: '.swiper-pagination'
            }
        };
        return (
            <Swiper {...params} className="swiper-wrapper">
                <div className="review-slide">
                    <Image  />
                    <Text />
                </div>
                <div className="review-slide">
                    <Image  />
                    <Text />
                </div>
                <div className="review-slide">
                    <Image  />
                    <Text />
                </div>
                <div className="review-slide">
                    <Image  />
                    <Text />
                </div>
                <div className="review-slide">
                    <Image  />
                    <Text />
                </div>
            </Swiper>
        )
    }
}

export default Review
