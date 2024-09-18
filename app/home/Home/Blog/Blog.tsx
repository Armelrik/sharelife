import { blogs } from '@/app/home/data/data'
import SectionHeading from '@/app/home/Helper/SectionHeading'
import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100' >
        <div className="w-[80%] mx-auto">
            <SectionHeading heading='Visiter notre Blog' />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center mt-14">
                {blogs.map((item,i)=> {
                    return(
                        <div key={item.id} data-aos='zoom-out' data-aos-delay={`${i * 100}`}>
                            <BlogCard blog={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Blog