import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'

function Slider({slides}) {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const SliderData = [
        {
            image:
            '/images/gallery/IMG-20230121-WA0004.jpg'
        },
    
        {
            image:
            '/images/gallery/IMG-20230121-WA0006.jpg'
        },
    
        {
            image:
            '/images/gallery/IMG-20230121-WA0007.jpg'
        },
    
        {
            image:
            '/images/gallery/IMG-20230121-WA0008.jpg'
        },
    
        {
            image:
            '/images/gallery/IMG-20230121-WA0009.jpg'
        },
    ]


  return (
    <div id='gallery' className='max-w-[1240px] mx-auto py-2'>
        <h1 className='text-2xl font-bold text-center p-8'>Galerija</h1>
        <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
            return (
                <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                    <FaArrowCircleLeft size={50} 
                        onClick={prevSlide}
                        className='absolute top-[50%] left-[5%] cursor-pointer select-none z-[2]' />
                    {index === current && (
                        <Image src={slide.image} alt='/' width='1440' height='300' className='w-full h-[700px]'/>
                    )}
                    <FaArrowCircleRight size={50}
                        onClick={nextSlide} 
                        className='absolute top-[50%] right-[5%] cursor-pointer select-none z-[2]' />
                </div>
            )
        })}
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