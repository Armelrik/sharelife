"use client"

import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropertyCard from './PropertyCard';
import { properties } from '@/app/home/data/data';

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

const PropertySlider = () => {
  return (
    <Carousel arrows={true} autoPlay={true} autoPlaySpeed={3000} infinite responsive={responsive} >
        {properties.map((property) => {
            return (
                <div key={property.id}>
                    {/* city slider card */}
                    <PropertyCard property={property}/>
                </div>
            )
        })}
    </Carousel>
  )
}

export default PropertySlider