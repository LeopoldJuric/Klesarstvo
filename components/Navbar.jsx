import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import logo from '../public/images/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY > 90) {
                setColor('#ffffff')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('white')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 border-b-2 border-black'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/' className='w-[200px] bg-white'>
                <img src={logo} className='p-4' alt=''/>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='#about' className='hover:text-slate-500'>O nama</Link>
                </li>
                <li className='p-4'>
                    <Link href='#usluge' className='hover:text-slate-500'>Usluge</Link>
                </li>
                <li className='p-4'>
                    <Link href='#proizvodi' className='hover:text-slate-500'>Proizvodi</Link>
                </li>
                <li className='p-4'>
                    <Link href='#gallery' className='hover:text-slate-500'>Galerija</Link>
                </li>
                <li className='p-4'>
                    <Link href='#kontakt' className='hover:text-slate-500'>Kontakt</Link>
                </li>
            </ul>

            <div onClick={handleNav} className='block cursor-pointer z-10 sm:hidden'>
                {nav 
                    ? ( <AiOutlineClose size={20} /> )
                    : ( <AiOutlineMenu size={20} style={{color: `${textColor}`}} /> )
                }
            </div>

            <div className={
                nav 
                    ? 'absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-left ease-in duration-300 sm:hidden'
                    : 'absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-left ease-in duration-300 sm:hidden'
                }
            >
                <ul>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 duration-200'>
                        <Link href='#about'>O nama</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 duration-200'>
                        <Link href='#proizvodi'>Proizvodi</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 duration-200'>
                        <Link href='#usluge'>Usluge</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 duration-200'>
                        <Link href='#galerija'>Galerija</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 duration-200'>
                        <Link href='#kontakt'>Kontakt</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar