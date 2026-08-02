import React from 'react'
import img2 from '../../assets/44.png'

function SpecialOffer() {
  return (
    <section className='py-16'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-[#3b0133] text-3xl font-bold text-center'>Special Offer</h2>
            <div className='flex items-center bg-[#fb85e945] rounded-2xl p-8 mt-12 gap-10 flex-wrap hover:shadow-xl transition-all duration-300' >
                <div>
                    <img src={img2} alt="Special Offer" className="w-50  object-contain"/>
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <h3 className='text-4xl font-bold text-black'>Flat 30% Off On Skincare</h3>
                    <p className='text-gray-500 mt-2'>Limited time offer. Shop the best skincare products now.</p>
                    <button className='w-fit bg-[#3b0133] border-2 text-white hover:bg-white hover:text-[#3b0133] hover:font-bold  border-[#3b013378] py-2 px-4 rounded-lg'>Shop Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialOffer