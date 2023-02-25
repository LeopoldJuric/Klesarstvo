import Link from 'next/link'
import React from 'react'

function Hero({heading, message}) {
  return (
    <div id='about' className='flex items-center justify-center h-screen mb-6 bg-fixed bg-center bg-cover hero-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
      <div className='p-5 text-white z-[2] md:ml-[-14rem]'>
        <h2 className='text-5xl font-bold'>
          {heading}
        </h2>
        <p className='py-5 text-xl'>
          {message}
        </p>
        <div className='p-4 border rounded'>
          Tekst o nama
        </div>
      </div>
    </div>
  )
}

export default Hero