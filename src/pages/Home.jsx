import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import Whychoose from '../components/Whychoose'
import SpecialOffer from '../components/SpecialOffer'


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <BestSellers />
      <Whychoose />
      <SpecialOffer />
    </>
  )
}

export default Home