import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Checkout from './pages/Checkout'
import CartProvider from '../src/context/CartProvider '


function App() {
  return (
      <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </CartProvider>
    
   
   

  )
}

export default App