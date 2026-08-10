import React from 'react'
import products from "../../data/Product";
import ProductCard from "../Home/ProductCard";

function ShopProduct({ category }) {
    const filteredProducts = products.filter((product) => {
  return category === "all" || product.category === category;
});
  return (
   <section className='max-w-7xl mx-auto py-6 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {filteredProducts.map((product)=>{
                return <ProductCard key = {product.id} product={product}/> 
            })}
        </div>
   </section>
  )
}

export default ShopProduct