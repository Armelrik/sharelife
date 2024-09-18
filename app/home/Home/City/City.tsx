import SectionHeading from '@/app/home/Helper/SectionHeading'
import React from 'react'
import CitySlider from './CitySlider'

const City = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className="w-[80%] mx-auto">
            <SectionHeading heading='Explorer les proprietes par villes' />
            <div className="mt-10 md:mt-16">
                {/* SLider */}
                <CitySlider />
            </div>
        </div>
    </div>
  )
}

export default City