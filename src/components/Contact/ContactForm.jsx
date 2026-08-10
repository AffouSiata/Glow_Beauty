import React from 'react'
import contactImg from '../../assets/4.jpeg'

function ContactForm() {
  return (
    <section className='max-w-7xl mx-auto py-6 px-4'>
        <div className='flex flex-col lg:flex-row gap-10 py-7'>
            <div className='w-full lg:w-1/2'>
                <img src={contactImg} alt="Contact" className='w-full h-[500px] rounded-2xl object-cover shadow-lg'/>
            </div>
            <div className='w-full lg:w-1/2 px-8 flex flex-col justify-center'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Send us a message</h2>
                <form>
                    <div className='mb-4'>
                        <label className='block text-[#3b0133] font-medium mb-2'>Name</label>
                        <input type='text' id='name' className=' w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#fb85ea] ' />
                    </div>
                    <div className='mb-4'>
                        <label className=' block text-[#3b0133] font-medium mb-2'>Email</label>
                        <input type='email' id='email' className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#fb85ea]' />
                    </div>
                    <div className='mb-4'>
                        <label className='  block text-[#3b0133] font-medium mb-2'>Message</label>
                        <textarea id='message' rows={4} className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#fb85ea]'></textarea>
                    </div>
                    <button className='w-full bg-[#3b0133] border-2 text-white hover:bg-white hover:text-[#3b0133] hover:font-bold  border-[#3b013378] py-2 px-4 rounded-lg'>Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactForm