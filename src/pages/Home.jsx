import React from 'react'
import Header from '../components/Home/Header'
import Hero from '../components/Home/Hero'
import Categories from '../components/Home/Categories'
import BestSellers from '../components/Home/products/BestSellers'
import Whychoose from '../components/Home/Whychoose'
import SpecialOffer from '../components/Home/special/SpecialOffer'
import Testimonials from '../components/Home/temoin/Testimonials'
import Newsletters from '../components/Home/Newsletter'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <BestSellers />
      <Whychoose />
      <SpecialOffer />
      <Testimonials />
      <Newsletters />
      <Footer />
    </>
  )
}

export default Home