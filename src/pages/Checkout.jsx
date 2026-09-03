import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../components/Home/Header'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import OrderSummary from '../components/Checkout/OrderSummary'
import Footer from '../components/Footer'
import CartContext from '../context/CartContext'



function Checkout() {
    const { cart } = useContext(CartContext)
    const subtotal = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

    const shipping = cart.length > 0 ? 2000 : 0
    const total = subtotal + shipping
    if (cart.length === 0) {
         return <Navigate to="/shop" replace />
    }
    return  (
        <>
            <Header />

            <section className='max-w-7xl mx-auto py-10 px-4'>
                <h1 className='text-3xl font-bold text-[#3b0133] text-center mb-10'>Votre commande et paiement</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <OrderSummary subtotal={subtotal} shipping={shipping}total={total}/>
                    <div>
                        <CheckoutForm subtotal={subtotal} shipping={shipping}total={total}/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}





export default Checkout