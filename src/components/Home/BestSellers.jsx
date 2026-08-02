import React from 'react'
import ProductCard from './ProductCard'
import products from '../../data/Product'

function BestSellers() {
  const bestSellers = products.filter((product) => product.isBestSeller)

  return (
    <div className='w-full py-12 bg-[#fffaf8]'>
      <div className='mt-4  text-center py-6 '>
        <h2 className='text-3xl font-bold text-[#3b0133]'>Best Sellers</h2>
        <p className='text-gray-500 mt-2'>Discover our customers' favorite beauty products.</p>
      </div>
      <div className='flex max-w-7xl mx-auto gap-6 justify-center flex-wrap py-6  rounded-xl'>
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default BestSellers