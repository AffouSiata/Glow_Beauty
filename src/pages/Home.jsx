import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <BestSellers />
    </>
  )
}

export default Home