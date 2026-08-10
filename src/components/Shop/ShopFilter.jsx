import React from 'react'

function ShopFilter({ setCategory }) {
  return (
    <section className='max-w-7xl mx-auto py-6 px-4'>
        <h2 className="text-3xl font-bold text-[#3b0133] text-center mb-6">Shop by Category</h2>
        <div className='flex flex-wrap justify-center gap-4 '>
            <button className='bg-[#3b0133] text-white px-5 py-2 rounded-full ' onClick={()=>setCategory('all')}>All</button>
            <button className='border border-[#3b0133] text-[#3b0133] hover:bg-[#3b0133] hover:text-white px-5 py-2 rounded-full' onClick={()=>setCategory('Skincare')}>Skincare</button>
            <button className='border border-[#3b0133] text-[#3b0133] hover:bg-[#3b0133] hover:text-white px-5 py-2 rounded-full' onClick={()=>setCategory('Makeup')}>Makeup</button>
            <button className='border border-[#3b0133] text-[#3b0133] hover:bg-[#3b0133] hover:text-white px-5 py-2 rounded-full' onClick={()=>setCategory('Haircare')}>Haircare</button>
            <button className='border border-[#3b0133] text-[#3b0133] hover:bg-[#3b0133] hover:text-white px-5 py-2 rounded-full' onClick={()=>setCategory('Fragrance')}>Fragrance</button>
        </div>
    </section>
  )
}

export default ShopFilter