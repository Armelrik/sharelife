import { ArrowUpRight, Bath, Bed, HeartIcon, Square } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type Props = {
    property: {
        id: number;
        propertyName: string;
        location: string;
        bedrooms: number;
        bathrooms: number;
        size: number;
        price: number;
        imageUrl: string;
    };
};

const PropertyCard = ({property}: Props) => {
  return (
    <div className='overflow-hidden bg-white group rounded-lg cursor-pointer shadow-lg'>
        <div className="relative">
            <Image  src={property.imageUrl} alt={property.propertyName} width={300} height={300}
            className='w-full object-cover group-hover:scale-110 transition-all duration-300' />
            <h1 className='px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black w-fit text-white rounded-lg'>
                <span className="text-base font-bold">${property.price}</span> / mois
            </h1>
            <div className='flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-yellow-400 w-fit text-white rounded-md font-bold'>
                <Image src='/assets/icons/location.svg' alt='location' width={28} height={28} />
                <span className="text-base font-bold">{property.location}</span>
            </div>
        </div>
        <div className="p-5">
            <h1 className="mt-4 group-hover:underline text-gray-900 font-bold text-lg">
                {property.propertyName}
            </h1>
            <p className="text-sm">{property.location}</p>
            <div className="flex items-center mt-6 justify-between w-full lg:w-[80%]">
                <div className="flex items-center space-x-2">
                    <Bed className='text-yellow-400' />
                    <p className="text-xs text-gray-600">{property.bedrooms} Chambres</p> 
                </div>
                <div className="flex items-center space-x-2">
                    <Bath className='text-yellow-400' />
                    <p className="text-xs text-gray-600">{property.bathrooms} Douches</p> 
                </div>
                <div className="flex items-center space-x-2">
                    <Square className='text-yellow-400'/>
                    <p className="text-xs text-gray-600">{property.size} m2</p>
                </div>
            </div>
            <div className="w-full h-[1.2px] mt-4 mb-4 bg-gray-500 opacity-30"></div>
            <div className="flex items-center justify-between">
                <h1 className="text-xs text-gray-600">A louer</h1>
                <div className="flex items-center space-x-4 text-gray-500">
                    <ArrowUpRight className='text-yellow-400' />
                    <Square className='text-yellow-400' />
                    <HeartIcon className='text-yellow-400'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard