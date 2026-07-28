import React from 'react'
import skincare from '../assets/skincare.jpeg'
import makeup from '../assets/makeup.jpeg'
import haircare from '../assets/haircare.jpeg'
import fragrance from '../assets/fragance.jpeg'

function Categories() {
  const categories = [
    { name: "Skincare", image: skincare },
    { name: "Makeup", image: makeup },
    { name: "Haircare", image: haircare },
    { name: "Fragrance", image: fragrance }
  ]
  return (
    <div className='w-full'>
        <div className='text-3xl font-bold text-center py-6 text-[#3b0133]'> Shop By Category </div>
        <div className='flex max-w-7xl mx-auto gap-6 justify-center flex-wrap py-6'>
            {categories.map((category,index)=>{
              return (
                <div className='group relative w-72 h-52 overflow-hidden rounded-2xl shadow-md cursor-pointer'>
                  <img src={category.image} alt={category.name} className='w-full h-full object-cover ' />
                    <div className='absolute inset-0 bg-[#3b0133]/30 group-hover:bg-[#3b0133]/40 transition duration-300'></div>
                    <p className='absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition duration-300 group-hover:scale-110'>{category.name}</p>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Categories
