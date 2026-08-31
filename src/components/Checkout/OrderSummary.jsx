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
            {cart.map((item)=>{
                return (
                <div key={item.id} className='flex justify-between items-center mb-4'>
                    <div>
                        <h3 className='text-lg font-semibold text-[#3b0133]'>{item.name}</h3>
                        <p className='text-sm text-gray-600'>Quantité: {item.quantity}</p>
                    </div>
                    <p className='text-lg font-bold text-[#fb85ea]'>{item.price * item.quantity} FCFA</p>
                    <div className='flex items-center gap-2 '>
                        <button onClick={() => handleDecrease(item.id)} className='border px-2 py-1 rounded'>-</button>
                            <span className='w-6 text-center'>{item.quantity}</span>
                        <button onClick={() => handleIncrease(item.id)} className='border px-2 py-1 rounded'>+</button>
                    </div>
                    <button onClick={() => handleRemove(item.id)} className='text-red-500 text-sm mt-2 hover:underline'><Trash2 size={18} /></button>
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
        </section>
    </>
)
}

export default OrderSummary