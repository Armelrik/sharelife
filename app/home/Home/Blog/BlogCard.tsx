
import { CalendarIcon } from '@heroicons/react/20/solid';
import { MessageSquare } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type Props = {
    blog: {
        id: number;
        date: string;
        comment: string;
        title: string;
        shortDescription: string;
        image: string;
    }
}

const BlogCard = ({blog}: Props) => {
  return (
    <div className='rounded-md overflow-hidden bg-white' >
        <div>
            <Image src={blog.image} alt={blog.title} width={200} height={200} className='w-full' />
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <CalendarIcon className='text-yellow-400' width={24} height={24} />
                        <span className='text-sm text-gray-700'>{blog.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MessageSquare className='text-yellow-400' />
                        <span className='text-sm text-gray-700'>{blog.comment}</span>
                    </div>
                </div>
                <h1 className="mt-6 font-bold hover:underline cursor-pointer mb-2 text-lg line-clamp-1 text-gray-700">{blog.title}</h1>
                <p className="text-gray-500 text-base line-clamp-2">{blog.shortDescription}</p>
                <div className="mt-4 flex items-center space-x-2  cursor-pointer">
                    <span className="font-bold bg-yellow-400 hover:bg-yellow-800 rounded-lg p-2 text-base">Lire plus</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard