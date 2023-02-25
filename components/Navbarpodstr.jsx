import Link from 'next/link'
import React from 'react'

const Navbarpodstr = ({podstr}) => {

  return (
    <div className='fixed left-0 top-0 w-full text-center bg-black'>
        <div className='flex flex-col max-w-[1240px] m-auto p-4 text-white md:flex-row'>
            <Link href='/' className='w-[200px] bg-white pt-2 m-auto mb-3 md:m-0'>
                <img src='../images/logo.png' className='p-4' alt=''/>
            </Link>
            <div className='border-2 h-[100] ml-5'></div>
            <h1 className='text-5xl mt-2 md:p-4 md:mt-0'>
                {podstr}
            </h1>
        </div>
    </div>
  )
}

export default Navbarpodstr