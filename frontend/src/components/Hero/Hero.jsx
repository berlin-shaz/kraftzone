import React from 'react'
import Carousel from './Carousel'

import { kraftzone_img1 } from '../../assets/images'

function Hero() {
  return (
    <div>

      <section>

        <div className='flex flex-col justify-center gap-1 bg-slate-700 min-h-screen'>
          <div className='sm:mt-10 mt-1'>
            <h1 className='max-sm:text-4xl text-8xl font-bold text-orange-700 uppercase lg:px-8 px-2'>KraftZone</h1>
            <p className='text-sm text-white lg:px-10 px-3'>Wir entsorgen Ihre Last</p>
          </div>
          <div className='flex justify-center items-center lg:px-10'>
          <Carousel />
          </div>
          <div className='p-10'>
            <h1 className='text-2xl font-semibold text-orange-600'>Wir entrümpeln & entsorgen in Berlin und Umgebung</h1>
            <p className='text-lg text-white text-wrap mt-6'>Wir bieten unseren Kunden maßgeschneiderte Dienstleistungen kostengünstige Aufräumarbeiten inklusive Entsorgung für private und gewerbliche Zwecke. Kraftzone erledigt Reinigungsarbeiten jeglicher Art in Berlin professionell und transparent.</p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Hero