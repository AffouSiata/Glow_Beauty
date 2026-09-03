import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Trash2 } from 'lucide-react'


function OrderSummary({subtotal,shipping,total}) {
    const { cart,setCart } = useContext(CartContext)
        const handleIncrease = (id) => {
            const updatedCart = cart.map(item => {
                if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
                }

                return item
            })

            setCart(updatedCart)
        }
        const handleDecrease = (id) => {
            const updatedCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity > 1 ? item.quantity - 1 : 1
                    }
                }
                return item
            })

            setCart(updatedCart)
        }
        const handleRemove = (id) => {
            const updatedCart = cart.filter(item => item.id !== id)

            setCart(updatedCart)
        }

    


  return (
    <>
    
        <section className='bg-[#f9f9f9] p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-[#3b0133] mb-6'>Résumé de la commande</h2>
            {cart.length === 0 ? (
                <div className='py-10 text-center'>
                    <p className='text-4xl mb-4'>🛒</p>
                    <p className='text-lg font-semibold text-[#3b0133]'>Votre panier est vide</p>
                    <p className='text-gray-600 mt-2'>Ajoutez des produits pour continuer votre commande.</p>
                </div>
            ) : (
            <>
                {cart.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col sm:flex-row sm:items-center gap-4 mb-6 p-4 border border-gray-200 rounded-lg'>
                            <img src={item.image} alt={item.name} className='w-20 h-20 object-cover rounded-lg'/>
                            <div className='flex-1'>
                                <h3 className='text-lg font-semibold text-[#3b0133]'>{item.name}</h3>
                                <p className='text-sm text-gray-600'>{item.price * item.quantity} FCFA</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button onClick={() => handleDecrease(item.id)}className='border border-gray-300 px-3 py-1 rounded hover:bg-gray-100'>-</button>
                                <span className='w-8 text-center font-medium'>{item.quantity}</span>
                                <button onClick={() => handleIncrease(item.id)} className='border border-gray-300 px-3 py-1 rounded hover:bg-gray-100'>+</button>
                            </div>
                            <button onClick={() => handleRemove(item.id)}className='text-red-500 hover:text-red-700 transition'><Trash2 size={20} /></button>
                        </div>
                    )
                })}

                <hr className='my-4' />
                <div className='mt-6 space-y-3'>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Sous-total</span>
                        <span className='font-semibold text-[#3b0133]'>{subtotal} FCFA</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Livraison</span>
                        <span className='font-semibold text-[#3b0133]'>{shipping} FCFA</span>
                    </div>
                    <hr className='my-4' />
                    <div className='flex justify-between items-center'>
                        <span className='text-xl font-bold text-[#3b0133]'>TOTAL</span>
                        <span className='text-xl font-bold text-[#fb85ea]'>{total} FCFA</span>
                    </div>
                </div>
            </>
        )}
        </section>
    </>
)
}

export default OrderSummary