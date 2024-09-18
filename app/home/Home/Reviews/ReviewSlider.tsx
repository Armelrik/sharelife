"use client"

import { userReviewData } from '@/app/home/data/data';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3,
        slidesToSlides: 1, //optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlides: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlides: 1,
    }
};

const ReviewSlider = () => {
  return (
    <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive} >
        {userReviewData.map((review) => {
            return (
                <div key={review.id}>
                    {/* city slider card */}
                    <ReviewCard review={review}/>
                </div>
            )
        })}
    </Carousel>
  )
}

export default ReviewSlider