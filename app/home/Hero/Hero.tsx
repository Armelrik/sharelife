import React from 'react'
import SearchBox from '../Helper/SearchBox'

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
        <video src="/assets/video.mp4" autoPlay loop controls={false} muted className='w-full h-full relative object-cover'/> 
        
        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* CONTENT */}
        <div className="flex justify-center items-center flex-col absolute top-[40%] left-[15%] right-[15%]">
            <h1 data-aos='fade-left' className="text-center text-white text-opacity-80 text-lg sm:text-lg uppercase font-extrabold">
                Le meilleur du logement a Paris
            </h1>
            <h1 data-aos='fade-right' data-aos-delay='200' className='text-center font-semibold text-3xl sm:text-5xl text-yellow-400 mt-4'>
                Trouver votre logement de reves
            </h1>
            <p data-aos='fade-up' data-aos-delay='300' className="mt-4 text-center text-sm sm:text-base text-gray-200">
                Nous avons plus de 150 apartements, maison et residences
            </p>

            <div data-aos='zoom-in' data-aos-delay='450' className="mt-12 w-full">
                <SearchBox />
            </div>
        </div>

    </div>
  )
}

export default Hero