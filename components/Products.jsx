import React from 'react'

function Products() {
  return (
    <div id='proizvodi' className='max-w-[1240px] mx-auto p-2'>
        <h1 className='text-center text-2xl font-bold p-8'>Proizvodi</h1>
        <div className='md:flex'>
            <div className='flex justify-center items-center border-4 border-slate-500 shadow-lg text-center m-auto w-[420px] h-80 my-2 proizvod1-img text-white text-xl'>
                Proizvod 1
            </div>
            <div className='flex justify-center items-center border-4 border-slate-500 shadow-2xl text-center m-auto w-[420px] h-80 my-2 proizvod2-img text-white text-xl'>
                Proizvod 2
            </div>
        </div>
        <div className='md:flex'>
            <div className='flex justify-center items-center border-4 border-slate-500 shadow-lg text-center m-auto w-[420px] h-80 my-2 proizvod3-img text-white text-xl'>
                Proizvod 3
            </div>
            <div className='flex justify-center items-center border-4 border-slate-500 shadow-lg text-center m-auto w-[420px] h-80 my-2 proizvod4-img text-white text-xl'>
                Proizvod 4
            </div>
        </div>
    </div>
  )
}

export default Products