"use client"

import { ArrowUpIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.scrollY > 300 ) setIsVisible(true)
            if(window.scrollY < 300 ) setIsVisible(false)
        };

        window.addEventListener("scroll", toggleVisibility);

    },[])

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    
  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
    {isVisible && <button onClick={scrollToTop} className='bg-yellow-400 text-white rounded-full w-12 h-12 flex items-center justify-center'>
        <ArrowUpIcon className='font-bold' width={28} height={28} />
    </button>

    }

    </div>
  )
}

export default ScrollToTop