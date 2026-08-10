import React from 'react'
import mission from '../../data/mission'


function MissionSection() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center py-6 text-[#3b0133]'>Our Mission</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 mt-12 '>
            {mission.map((item)=>{
                return(
                    <div key={item.id} className='text-center py-4 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:bg-[#f7e7cb] hover:-translate-y-2 transition-all duration-300'>
                        <h2 className='text-2xl font-bold text-[#fb85ea]'>{item.title}</h2>
                        <p className='text-lg mt-2'>{item.description}</p>
                    </div>
                )
            })}   
        </div>
    </section>
  )
}

export default MissionSection