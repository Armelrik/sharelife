import React from 'react'
import SearchBox from '../Helper/SearchBox'

const Hero = () => {
  return (
     <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url("/assets/images/hero.jpg")] bg-cover bg-center'>
     {/* <div className="w-full h-screen overflow-hidden relative">
        <video src="/assets/video.mp4" autoPlay loop controls={false} muted className='w-full h-full relative object-cover'/>  */}
        
        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* <p className="text-white font-bold relative top-[40%] left-[30%] m-5 text-center" >Le meilleur du logement a Paris</p> */}
        {/* CONTENT */}
        <div className="flex justify-center items-center flex-col absolute top-[40%] left-[15%] right-[15%]">
            <h1 className="text-center text-white text-opacity-80 text-lg sm:text-lg uppercase font-extrabold">
                Le meilleur du logement a Paris
            </h1>
            <h1 className='text-center font-semibold text-3xl sm:text-5xl text-yellow-400 mt-4'>
                Trouver votre logement de reves
            </h1>
            <p className="mt-4 text-center text-sm sm:text-base text-gray-200">
                Nous avons plus de 150 apartements, maison et residences
            </p>

            <div className="mt-12 w-full">
                <SearchBox />
            </div>
        </div>

    </div>
  )
}

export default Hero