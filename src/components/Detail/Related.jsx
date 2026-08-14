import React from 'react'
import products from '../../data/Product'
import ProductCard from '../Home/ProductCard'

function Related({ product }) {
  const relatedProducts = products.filter(
      (item) => item.category === product?.category && item.id !== product?.id
    ).slice(0, 5)


     if (relatedProducts.length === 0) {
      return null
    }
  return (
    <section className='max-w-7xl mx-auto py-6 px-4'>
      <h2 className='text-3xl font-bold text-[#3b0133] text-center mb-6'>Related Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Related 