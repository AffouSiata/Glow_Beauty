import React from 'react'
import features from '../../data/features'
import Feature from './Feature'


function Whychoose() {

  return (
    <section className='py-16'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-[#3b0133] text-3xl font-bold text-center'>Why Choose Us</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
                {features.map((feature,index)=>{
                    return (
                        <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:bg-[#f7e7cb] hover:-translate-y-2 transition-all duration-300">
                            <Feature feature={feature} />
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Whychoose