"use client"

import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt'

type Props = {
    building: {
        id: number;
        title: string;
        description: string;
        image: string;
    }
}

const FeaturesCard = ({building} : Props) => {
  return (
    <Tilt className='rounded-lg shadow-md p-4 bg-white'>
        <div className="w-16 h-16 ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full">
            <Image src={building.image} alt={building.title} width={40} height={40} />
        </div>
        <div className="p-2">
            <p className="mt-6 text-yellow-400 font-bold text-xl">0{building.id}</p>
            <p className="text-lg text-gray-700 font-bold mt-2 mb-2">{building.title}</p>
            <p className="text-sm opacity-70 text-gray-700">{building.description}</p>
        </div>
    </Tilt>
  )
}

export default FeaturesCard