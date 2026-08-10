import React from 'react'
import shopImg from '../../assets/shop1.jpg'

function ShopHero() {
  return (
    <section className=' relative w-full h-[500px]'>
        <img src={shopImg} alt="Shop" className='w-full h-full object-cover bg-black' />
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center  gap-4'>
            <h1 className='text-[#fb85ea] text-3xl font-bold'>Shop</h1>
            <p className='text-[#ffffff] text-1xl'>Discover our passion for beauty and skincare.</p>
        </div>
    </section>
  )
}

export default ShopHero