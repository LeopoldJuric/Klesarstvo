import React, { useState } from 'react'

export default function Contact () {

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    try {
      await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(formData),
      }, alert("Upit poslan!"));
    } catch (err) {
      alert(err);
    }
  }


  return (
    <div id='kontakt' className='max-w-[1240px] m-auto p-4'>
        <h1 className='text-2xl min-w-[250px] font-bold text-center p-6 md:pt-6'>Pošaljite nam upit!</h1>
        <p className='text-black/30'>Sva polja označena sa <span className='text-3xl text-red-500/60'>*</span> su obavezna</p>
        <form
          method='post'
          onSubmit={handleOnSubmit}
          className='w-full m-auto'
        >
            <div className='flex'>
                <span className='text-3xl text-red-500'>*</span>
                <input 
                  className='border shadow-lg p-3 my-1 w-[50%] min-w-[150px]' 
                  type='text' 
                  placeholder='Ime'
                  name='name'
                  required
                />
                <span className='text-3xl text-red-500'>*</span>
                <input 
                  className='border shadow-lg p-3 my-1 w-[50%] min-w-[150px]' 
                  type='text'
                  placeholder='Prezime' 
                  name='surname'
                  required  
                />
            </div>

            <div className='flex'>
              <span className='text-3xl text-red-500'>*</span>
              <input 
                className='border border-blue shadow-lg p-3 w-full my-1 min-w-[300px]' 
                type='email'
                placeholder='Email'  
                name='email'
                required
              />
            </div>
            
            <div className='flex'>
              <span className='text-3xl text-red-500 opacity-0'>*</span>
              <input 
                className='border shadow-lg p-3 w-full my-1 min-w-[300px]' 
                type='phone'
                placeholder='Telefon'  
                name='phone'
              />
            </div>

            <div className='flex'>
              <span className='text-3xl text-red-500'>*</span>
              <textarea 
                className='border shadow-lg p-3 w-full my-1 min-w-[300px]' 
                cols='30' 
                rows='10'
                placeholder='Upit' 
                name='message'
                required 
              ></textarea>
            </div>

            <div className='inline'>
            <span className='text-3xl text-red-500'>*</span>
              <input 
                className='mr-2' 
                type='checkbox'
                required>
              </input>
              <label>
                OVIME DAJEM PRIVOLU DA "Klesarstvo Kirinec Dejan j.d.o.o" OBRAĐUJU MOJE OSOBNE PODATKE - IME I PREZIME, E-MAIL ADRESU I TELEFON U SVRHU ODGOVORA NA UPIT. VIŠE O ZAŠTITI OSOBNIH PODATAKA MOŽETE SAZNATI NA SLJEDEĆEM LINKU.
              </label>
            </div>
            <button className='m-auto flex border shadow-lg p-3 mt-3 min-w-[300px] text-justify' type='submit'>Pošalji</button>
        </form>
    </div>
  )
}

