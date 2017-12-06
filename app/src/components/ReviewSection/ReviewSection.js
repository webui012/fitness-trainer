import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import Text from './../Text/Text';
import Image from './../Image/Image';
/*import Video from '../Video'*/
import './ReviewSection.scss'


class Review extends Component {
    render() {
        const params = {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
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
