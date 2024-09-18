import { Search, Settings2 } from 'lucide-react'
import React from 'react'

const SearchBox = () => {
  return (
    <div className='w-full md:w-[80%] mx-auto bg-white h-[4rem] rounded-lg sm:h-[5rem] flex px-4 sm:px-8 flex-col'>
        <div className="flex items-center justify-between h-full">
            <input type="text" className='sm:flex-[0.8] h-[60%] bg-gray-100 block rounded-lg outline-none px-4 placeholder:text-sm'
            placeholder='Saisir une addresse, ville ou code postal'
            />

            <div className="flex items-center flex-[0.2] ml-8 space-x-8">
                <div className="lg:flex hidden items-center cursor-pointer space-x-2">
                    <Settings2 />
                    {/* <Image src='./assets/icons/edit.svg' alt='outils' width={28} height={28} /> */}
                    <p className="text-gray-700 font-semibold text-sm">Details</p>
                </div>

                <div className="w-12 h-12 flex items-center">
                    <button type='button' className='sm:w-10 sm:h-10 bg-yellow-400 w-8 h-8 rounded-md p-1 hover:bg-yellow-700 transition-all duration-150 flex justify-center items-center'>
                        {/* <Image src='/assets/icons/search.svg' alt="Search" width={38} height={38}/> */}
                        <Search />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBox