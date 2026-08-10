
import React from 'react'
import contactImg from '../../assets/contact.jpg'

function  ContactHero() {
  return (
    <section className=' relative w-full h-[500px]'>
        <img src={contactImg} alt="About" className='w-full h-full object-cover ' />
            <div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-center gap-4 text-center'>
                <h1 className='text-[#fb85ea] text-3xl md:text-5xl font-bold'>Contact Us</h1>
                <p className='text-white text-xl'>Get in touch with us today!</p>
            </div>
    </section>
  )
}

export default  ContactHero