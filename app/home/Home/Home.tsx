"use client"

import React, { useEffect } from 'react'
import CategoryPage from './Category/CategoryPage'
import CategoryBanner from './Category/CategoryBanner'
import Property from './Property/Property'
import City from './City/City'
import Features from './Features/Features'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Hero from '../Hero/Hero'

const Home = () => {

  useEffect(() => {
    const initAOS = async ()=> {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      })
    }

    initAOS();

  },[])

  return (
    <div className='overflow-hidden'>
      <Hero />
      <CategoryBanner />
      <CategoryPage />
      <Property />
      <City />
      <Features />
      <Reviews />
      <Blog />
    </div>
  )
}

export default Home