import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

function Socials() {
  return (
    <div className='max-w-[1240px] p-4 flex flex-col m-auto md:flex-row md:justify-around text-white'>
        <div className='pattern p-4 rounded flex flex-row justify-center shadow-lg md:flex-col'>
            <AiOutlineMail size={40} className='md:m-auto'/>
            <h1 className='text-xl ml-4 mt-1 md:m-0'>vaš_mail@gmail.com</h1>
        </div>

        <div className='pattern my-4 p-4 rounded flex flex-row justify-center shadow-lg md:flex-col md:my-0'>
            <BsTelephone size={34} className='md:m-auto'/>
            <h1 className='text-xl ml-4 mt-1 md:m-0'>+385 911 911 9111</h1>
        </div>

        <div className='pattern p-4 rounded flex flex-row justify-center shadow-lg md:flex-col'>
            <AiFillFacebook size={40} className='md:m-auto'/>
            <Link href='https://www.facebook.com/leopold.juric.7' className='text-xl ml-4 mt-1 md:m-0'>Facebook/Vaš_profil</Link>
        </div>
    </div>
  )
}

export default Socials