import React from 'react'
import detailImg from '../../assets/shop.jpg'

function DetailInfo() {
  return (
    <section className='max-w-7xl mx-auto py-6 px-4'>
        <div className='flex gap-10'>
            <div className='w-1/2'>
                <img src={detailImg} alt="Detail" className='w-full h-[500px] object-cover' />
            </div>
            <div className='w-1/2'>

            </div>
        </div>
    </section>
  )
}

export default DetailInfo