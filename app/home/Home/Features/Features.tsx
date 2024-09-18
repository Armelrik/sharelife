import { buildings } from '@/app/home/data/data'
import SectionHeading from '@/app/home/Helper/SectionHeading'
import React from 'react'
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100' >
        <div className="w-[80%] mx-auto">
            <SectionHeading heading='Les appartements par amenagements' />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14">
                {buildings.map((item,i)=> {
                    return(
                        <div className="" key={item.id} data-aos='fade-left' data-aos-delay={`${i * 100}`}>
                            <FeaturesCard building={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Features