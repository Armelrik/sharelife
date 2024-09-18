
import Image from 'next/image'
import React from 'react'

const CategoryBanner = () => {
  return (
    <div className='pt-4 bg-yellow-400'>
        <p className="text-xl font-bold text-center text-gray-700">Nos partenaires</p>
        <div className="w-[80%] mx-auto pt-8 pb-8 flex items-center justify-between">
            <div className='w-[120px]'>
                <Image src='/assets/logo1.png' alt='Partner' className='rounded-lg opacity-30 hover:opacity-70 hover:scale-110 transition-all duration-300' width={130} height={80} />
                 <p className='pt-2 pr-2 text-gray-700 text-center'></p>
            </div>
            <div className='w-[120px]'>
                <Image src='/assets/logo2.png' alt='Partner' className='rounded-lg opacity-30 hover:opacity-70 hover:scale-110 transition-all duration-300' width={130} height={80} />
                 <p className='pt-2 pr-2 text-gray-700 text-center'></p>
            </div>
            <div className='w-[120px]'>
                <Image src='/assets/logo3.png' alt='Partner' className='rounded-lg opacity-30 hover:opacity-70 hover:scale-110 transition-all duration-300' width={130} height={80} />
                 <p className='pt-2 pr-2 text-gray-700 text-center'></p>
            </div>
            <div className='w-[120px]'>
                <Image src='/assets/logo4.png' alt='Partner' className='rounded-lg opacity-30 hover:opacity-70 hover:scale-110 transition-all duration-300' width={130} height={80} />
                 <p className='pt-2 pr-2 text-gray-700 text-center'></p>
            </div>
        </div>
    </div>
  )
}

export default CategoryBanner