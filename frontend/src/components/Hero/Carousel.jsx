import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import { kraftzone_img1 } from '../../assets/images'

const Carousel = () => {
    return (

        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        > 
            <SwiperSlide className='rounded-lg'>
                <img src={kraftzone_img1} />
                <h1 className='text-xl font-bold text-orange-600 px-2 mt-2'>Wohnungsauflösungen</h1>
                <p className='text-sm text-lime-900 px-2 mt-2' >
                Bei der Übergabe der Wohnung an den Wohnungseigentümer oder einen Nachmieter muss die Wohnung nicht nur vollständig gereinigt, sondern auch aufgeräumt gehalten werden.
                </p>
                <button className='p-2 text-white bg-orange-700 mt-3 hover:bg-green-900 rounded-lg mx-2'>Antrag</button>
            </SwiperSlide>
            <SwiperSlide className='rounded-lg'>
                <img src={kraftzone_img1} />
                <h1 className='text-xl font-bold text-orange-600 px-2 mt-2'>Entrümpelung Entsorgung</h1>
                <p className='text-sm text-lime-900 px-2 mt-2' >
                Wir bieten Ihnen preiswerte und schnelle Firmenauflösungen und Gewerbeauflösungen in ganz Berlin.
                </p>
                <button className='p-2 text-white bg-orange-700 mt-3 hover:bg-green-900 rounded-lg mx-2'>Antrag</button>
            </SwiperSlide>
            <SwiperSlide className='rounded-lg'>
                <img src={kraftzone_img1} />
                <h1 className='text-xl font-bold text-orange-600 px-2 mt-2'>Reinigung Entsorgung</h1>
                <p className='text-sm text-lime-900 px-2 mt-2' >
                Als professionelles Entsorgungsunternehmen entsorgen wir Ihren Bauschutt vorschriftsgemäß in ganz Berlin. Dank langjähriger Erfahrung arbeitet unser Team sicher, sauber und zuverlässig 
                </p>
                <button className='p-2 text-white bg-orange-700 mt-3 hover:bg-green-900 rounded-lg mx-2'>Antrag</button>
            </SwiperSlide>
            <SwiperSlide className='rounded-lg'>
                <img src={kraftzone_img1} />
                <h1 className='text-xl font-bold text-orange-600 px-2 mt-2'>Kunden die uns Vertrauen</h1>
                <p className='text-sm text-lime-900 px-2 mt-2' >
                Bei der Übergabe der Wohnung an den Wohnungseigentümer oder einen Nachmieter muss die Wohnung nicht nur vollständig gereinigt, sondern auch aufgeräumt gehalten werden.
                </p>
                <button className='p-2 text-white bg-orange-700 mt-3 hover:bg-green-900 rounded-lg mx-2'>Antrag</button>
            </SwiperSlide>
            <SwiperSlide className='rounded-lg'>
                <img src={kraftzone_img1} />
                <h1 className='text-xl font-bold text-orange-600 px-2 mt-2'>Kundenfreundlich & Seriös</h1>
                <p className='text-sm text-lime-900 px-2 mt-2' >
                Wir bieten Ihnen preiswerte und schnelle Firmenauflösungen und Gewerbeauflösungen in ganz Berlin.
                </p>
                <button className='p-2 text-white bg-orange-700 mt-3 hover:bg-green-900 rounded-lg mx-2'>Antrag</button>
            </SwiperSlide>
            <SwiperSlide className='rounded-lg'>
                <img src={kraftzone_img1} />
                <h1 className='text-xl font-bold text-orange-600 px-2 mt-2'>Keine Verstckten Kosten</h1>
                <p className='text-sm text-lime-900 px-2 mt-2' >
                Als professionelles Entsorgungsunternehmen entsorgen wir Ihren Bauschutt vorschriftsgemäß in ganz Berlin. Dank langjähriger Erfahrung arbeitet unser Team sicher, sauber und zuverlässig 
                </p>
                <button className='p-2 text-white bg-orange-700 mt-3 hover:bg-green-900 rounded-lg mx-2'>Antrag</button>
            </SwiperSlide>
        </Swiper>



    )
}

export default Carousel;