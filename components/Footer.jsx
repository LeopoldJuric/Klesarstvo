import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-black p-4 text-center text-white'>
        <p>
            Izrada web stranice: 
            <Link href='https://nevenjuric.com.hr' className='text-[#66CC66]'>
                &nbsp;Neven Jurić d.o.o
            </Link>
        </p>
    </div>
  )
}

export default Footer