import React from 'react'

function Maps () {
  return (
    <div>
        <h1 className='max-w-[1240px] m-auto p-4 text-3xl font-bold'>Naša lokacija</h1>
        <iframe className='m-auto flex justify-center py-4 w-full h-[40em]' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.6533956262474!2d17.151899215448616!3d45.97818187911032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4767ce3a5d326327%3A0xe00e6571accd6b45!2sUl.%20Ljudevita%20Gaja%2050B%2C%2048362%2C%20Klo%C5%A1tar%20Podravski!5e0!3m2!1sen!2shr!4v1675796645441!5m2!1sen!2shr" width="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Maps