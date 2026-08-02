import React from 'react'

function TestimonialCard({ testimonial }) {
  return (
    <div className=' w-72 border border-gray-200  flex flex-col justify-center items-center gap-4  bg-[#3b01330a] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300'>
      <img src={testimonial.image} alt={testimonial.name} className='w-24 h-24 rounded-full object-cover' />
      <h3 className='text-lg font-bold text-[#3b0133]'>{testimonial.name}</h3>
      <p className='text-gray-600 text-center'>{testimonial.text}</p>
    </div>
  )
}

export default TestimonialCard