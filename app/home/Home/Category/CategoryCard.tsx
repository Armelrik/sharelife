import Image from 'next/image';
import React from 'react'

type Props = {
    type: {
        id: number;
        icon: string;
        type: string;
        number: number;
    }
}

const CategoryCard = ({type}: Props) => {
  return (
    <div className='rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300'>
        <Image src={type.icon} alt={type.type} width={50} height={50} />
        <div className="mt-12">
            <h1 className="text-lg font-bold">{type.type}</h1>
            <p className="mt-2 text-sm text-gray-700">{type.number} Proprietes</p>
        </div>
    </div>
  )
}

export default CategoryCard