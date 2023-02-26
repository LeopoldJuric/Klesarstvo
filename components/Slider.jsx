import React, { useState } from 'react'
import Link from 'next/link'
import SimpleImageSlider from 'react-simple-image-slider'

function Slider() {

    const images = [
        { url: "images/1.jpg" },
        { url: "images/2.jpg" },
        { url: "images/3.jpg" },
        { url: "images/4.jpg" },
        { url: "images/5.jpg" },
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
        <Link href='/galerija'>
            <button className='pattern text-white m-auto flex p-4 rounded duration-300 hover:text-white/50'>
                Prikaži još
            </button>
        </Link>
        </div>
  )
}

export default Slider