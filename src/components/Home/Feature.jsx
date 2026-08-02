import React from 'react'
import features from '../../data/features'


function Feature({ feature }) {
      const Icon = feature.icon
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='text-2xl'>
            <Icon size={32} fill="#ffffff" color="#fb85ea"/>
        </div>
        <div className='ml-4'>
            <h3 className='text-lg font-bold text-[#3b0133] py-3'>{feature.title}</h3>
            <p className='text-gray-600'>{feature.description}</p>
        </div>
    </div>
  )
}

export default Feature