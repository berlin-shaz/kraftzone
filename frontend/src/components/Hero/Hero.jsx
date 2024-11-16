import React from 'react'
import Carousel from './Carousel'

import { cleaning, houseCleaning } from '../../assets/images'

function Hero() {
  return (
    <div>

      <section>

        <div className='flex max-sm:flex-col flex-row justify-between bg-cover bg-center items-center min-h-screen'
        style={{ backgroundImage: `url(${cleaning})`}}
        >
          <div className=' p-20'>
            <h1 className='max-sm:text-5xl text-8xl font-bold text-orange-700 uppercase lg:px-8 px-2'>
              <span className='text-black'>Kraft</span>Zone
            </h1>
            <p className='text-lg lg:px-10 px-3 text-black'>Wir entsorgen Ihre Last</p>
          </div>
          <div className='min-h-fit p-10 flex items-center min-w-0'>
            <Carousel />
          </div>
        </div>
        {/* <div className='flex flex-col justify-center gap-1 bg-slate-700 min-h-screen'> */}
        {/* <div className='max-sm:mt-16 mt-14 bg-white'>
            <h1 className='max-sm:text-4xl text-8xl font-bold text-orange-700 uppercase lg:px-8 px-2'>
              <span className='text-black'>Kraft</span>Zone
              </h1>
            <p className='text-lg text-white lg:px-10 px-3'>Wir entsorgen Ihre Last</p>
          </div>
          <div className='flex justify-center items-center lg:px-10'>
          <Carousel />
          </div> */}
        {/* <div className='lg:p-10 p-3'>
            <h1 className='text-2xl font-semibold text-orange-600'>Wir entrümpeln & entsorgen in Berlin und Umgebung</h1>
            <p className='text-lg text-white text-wrap mt-6'>Wir bieten unseren Kunden maßgeschneiderte Dienstleistungen kostengünstige Aufräumarbeiten inklusive Entsorgung für private und gewerbliche Zwecke. Kraftzone erledigt Reinigungsarbeiten jeglicher Art in Berlin professionell und transparent.</p>
          </div> */}

        {/* </div> */}

      </section>

    </div>
  )
}

export default Hero