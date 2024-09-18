import { properties } from '@/app/home/data/data'
import SectionHeading from '@/app/home/Helper/SectionHeading'
import React from 'react'
import PropertyCard from './PropertyCard'

const Property = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className="w-[80%] mx-auto">
            <SectionHeading heading='Notre gamme de proprietes a votre choix' />
            <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
                {properties.map((item,i) => {
                    return(
                    <div key={item.id} data-aos='fade-up' data-aos-delay={`${i * 100}`}>
                        <PropertyCard property={item} />
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Property