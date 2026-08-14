import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Home/Header'
import Footer from '../components/Footer'
import DetailInfo from '../components/Detail/DetailInfo'
import Related from '../components/Detail/Related'
import products from '../data/Product'


function Detail() {
  
  const  {id}  = useParams()

  const product = products.find(
    (product) => product.id === Number(id)
  )

  console.log("Produit actuel :", product)
  
  return (
    <>
        <Header />
        <DetailInfo product={product}/>
        <Related product={product}/>
        <Footer />
    </>
  )
}

export default Detail