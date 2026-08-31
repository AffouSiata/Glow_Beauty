import React from 'react'
import TestimonialCard from './TestimonialCard'
import testimonials from '../../../data/testimonials'


function Testimonials() {
  return (
    <section className='py-16'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-[#3b0133] text-3xl font-bold text-center'>What Our Customers Say</h2>
            <div className='flex flex-wrap justify-center gap-8 mt-12'>
               {testimonials.map((testimonial)=>{
                return(
                    <div key={testimonial.id}>
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                )
               })}
            </div>
        </div>
    </section>
  )
}

export default Testimonials