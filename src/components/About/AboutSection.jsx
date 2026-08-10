import aboutSectImg from '../../assets/aboutsection.jpeg'


function AboutSection() {
  return (
   <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-12 py-9'>
            <div className='w-1/2'>
                <img src={aboutSectImg} alt="About Glow Beauty" className='w-full rounded-2xl object-cover shadow-lg' />
            </div>
            <div className='w-1/2 text-justify'>
                    <h2 className="text-3xl font-bold text-[#3b0133] mb-6">About Glow Beauty</h2>
                    <p className="text-gray-600 leading-8 mb-4 ">
                        Glow Beauty is dedicated to providing premium beauty and skincare
                        products that help you look and feel your best.Glow Beauty is dedicated to providing premium beauty and skincare
                        products that help you look and feel your best.Glow Beauty is dedicated to providing premium beauty and skincare
                        products that help you look and feel your best.Glow Beauty is dedicated to providing premium beauty and skincare
                        products that help you look and feel your best
                    </p>
                    <p className="text-gray-600 leading-8 mb-4">
                        Our mission is to make beauty accessible through high-quality,
                        carefully selected products and exceptional customer service.
                        Our mission is to make beauty accessible through high-quality,
                        carefully selected products and exceptional customer service.
                    </p>
            </div>
        </div>
   </section>
  )
}

export default AboutSection