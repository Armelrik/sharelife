
import Navbar from '@/components/shared/Navbar'
import React, { ReactNode } from 'react'

export default function LayoutCreation({children}: {children: ReactNode}) {
  return (
    <div >
        <Navbar />
        <div className='mt-10'>
        {children}
        </div>
    </div>
  )
}
