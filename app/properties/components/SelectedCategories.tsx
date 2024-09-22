"use client"

import { Card, CardHeader } from '@/components/ui/card'
import { categoryItemsFr } from '@/constant/categoryItemsFr'
import Image from 'next/image'
import React, { useState } from 'react'

export default function SelectedCategories() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className='grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36'>
        <input type="hidden" name="categoryName" value={selectedCategory as string} />
        {categoryItemsFr.map((item) => (
            <div key={item.id} className="cursor-pointer">
                <Card className={selectedCategory === item.name ? 'border-yellow-400 border-b-2' : ""} onClick={() => setSelectedCategory(item.name)}>
                    <CardHeader>
                        <Image src={item.imageUrl} alt={item.name} height={32} width={32} className='w-8 h-8' />
                        <h3 className="font-medium">{item.title}</h3>
                    </CardHeader>
                </Card>
            </div>
        ))}
    </div>
  )
}
