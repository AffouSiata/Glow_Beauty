import React from 'react'
import { Star,Heart } from "lucide-react";

function ProductCard({ product }) {
  if (!product) return null

  return (
    <div className=' relative w-56 rounded-xl shadow-lg overflow-hidden bg-[#3b01330a] hover:scale-105 transition duration-300 cursor-pointer'>
      <img src={product.image} alt={product.name} className='mt-5 w-full h-32 object-contain' />
      <div className='absolute top-2 right-2'>
        <Heart size={20} fill="white" color="#fb85ea" />
      </div>
      <div className='p-4'>
        <h3 className='text-lg text-center font-semibold text-[#3b0133]'>{product.name}</h3>
        <div className='flex justify-between items-center'>
            <p className=' py-3 text-sm text-gray-500'>{product.category}</p>
            <div className='flex gap-1'>
                <Star size={16} fill="#fb85ea" color="#fb85ea" />
                <Star size={16} fill="#fb85ea" color="#fb85ea" />
                <Star size={16} fill="#fb85ea" color="#fb85ea" />
                <Star size={16} fill="#fb85ea" color="#fb85ea" />
                <Star size={16} fill="#fb85ea" color="#fb85ea" />
                <Star size={16} fill="#fb85ea" color="#fb85ea" />
            </div>
        </div>
         <p className=' text-center font-bold text-[#3b0133]'>{product.price} FCFA</p>
        
      </div>
      <div className='px-4 pb-4'>
        <button className='w-full bg-[#3b0133] border-2 text-white hover:bg-white hover:text-[#3b0133] hover:font-bold  border-[#3b013378] py-2 px-4 rounded-lg'>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
