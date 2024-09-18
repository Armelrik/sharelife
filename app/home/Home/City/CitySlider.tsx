"use client"

import { cities } from '@/app/home/data/data';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CityCard from './CityCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlides: 1, //optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 3,
        slidesToSlides: 1, //optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlides: 1, //optional, default to 1.
    }
};

const CitySlider = () => {
  return (
    <Carousel arrows={true} autoPlay={true} autoPlaySpeed={3000} infinite responsive={responsive} >
        {cities.map((city) => {
            return (
                <div key={city.id}>
                    {/* city slider card */}
                    <CityCard city={city}/>
                </div>
            )
        })}
    </Carousel>
  )
}

export default CitySlider