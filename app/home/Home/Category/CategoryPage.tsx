import { appartmentTypeData } from '@/app/home/data/data'
import SectionHeading from '@/app/home/Helper/SectionHeading'
import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryPage = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className="w-[80%] mx-auto">
            <SectionHeading heading="Nos type de proprietes" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center">
                {appartmentTypeData.map((item,i)=>{
                    return(
                        <div key={item.id} data-aos='zoom-in' data-aos-delay={`${i * 100}`} > {/* data-aos-anchor-placement='top-center' */}
                            <CategoryCard type={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default CategoryPage