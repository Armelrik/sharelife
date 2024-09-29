
import Link from 'next/link'
import React from 'react'
import { UserNav } from './UserNav'
import { SearchModalCompnent } from '@/app/properties/components/SearchComponent'


export default function AllNav() {
  return (
    <nav className='w-full border-b'>
      <div className="flex item-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          {/* LOGO */}
            <div className="flex items-center space-x-2">
              <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-yellow-700 text-white font-bold flex items-center justify-center flex-col">
                S&L
              </div>
              <h1 className="text-yellow-400 font-bold text-sm sm:text-base md:text-xl">
                ShareLife
              </h1>
            </div>
        </Link>

          <SearchModalCompnent />

        <UserNav />

      </div>
    </nav>
  )
}
