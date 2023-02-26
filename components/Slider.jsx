import Image from 'next/image'
import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'
import SimpleImageSlider from 'react-simple-image-slider'
import url1 from '../public/images/gallery/IMG-20230121-WA0004.jpg'
import url2 from '../public/images/gallery/IMG-20230121-WA0006.jpg'
import url3 from '../public/images/gallery/IMG-20230121-WA0007.jpg'
import url4 from '../public/images/gallery/IMG-20230121-WA0008.jpg'
import url5 from '../public/images/gallery/IMG-20230121-WA0009.jpg'

function Slider() {

    const images = [
        url1,
        url2,
        url3,
        url4,
        url5
      ];


  return (
    <div id='gallery' className='max-w-[1240px] mx-auto py-2'>
        <h1 className='text-2xl font-bold text-center p-8'>Galerija</h1>
        <div className='relative flex justify-center p-4'>
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
                navStyle={2}
                autoPlay={true}
                autoPlayDelay={3.5}
            />
        </div>
            <button className='pattern text-white m-auto flex p-4 rounded duration-300 hover:text-white/50'>
                <Link href='/galerija'>
                    Prikaži još
                </Link>
            </button>
        </div>
  )
}

export default Slider