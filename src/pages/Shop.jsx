
import React from 'react'
import { useState } from "react";

import Header from '../components/Home/Header'
import Footer from '../components/Footer'
import ShopHero from '../components/Shop/ShopHero'
import ShopFilter from '../components/Shop/ShopFilter'
import ShopProduct from '../components/Shop/ShopProduct'



function Shop() {
    const [category, setCategory] = useState("all");
  return (
    <>
        <Header />
        <ShopHero />
        <ShopFilter setCategory={setCategory}/>
        <ShopProduct category={category}/>
        <Footer />
    </>
  )
}

export default Shop