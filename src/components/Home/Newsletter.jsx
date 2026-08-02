import React from 'react'

import bgImage from '../../assets/hero2.jpeg'

function Newsletters() {
  return (
    <section className='w-full py-16 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='rounded-3xl  py-12 px-6 text-center'>
            <h2 className='text-4xl font-bold text-center text-[#3b0133]'>Join our Beauty community</h2>
            <p className='text-gray-600  mt-4 max-w-xl  mx-auto'>Be the first to know about new products, exclusive offers, and beauty tips.</p>
            <div className='flex justify-center mt-4 flex-col sm:flex-row gap-4 items-center'>
                <input type="email" placeholder=' Enter your email' className=' bg-white w-full sm:w-80 border  border-gray-300 rounded-full  py-3 px-6 focus:outline-none focus:ring-2  focus:ring-[#fb85ea]'/>
                <button className=' bg-[#3b0133] border-2 text-white hover:bg-white hover:text-[#3b0133]   border-[#3b013378] py-2 px-4 rounded-lg'>Subscribe</button>
            </div>
          </div> 
        </div>
    </section>
  )
}

export default Newsletters