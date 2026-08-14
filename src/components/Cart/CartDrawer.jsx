import React from 'react'
import { X } from 'lucide-react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Trash2 } from 'lucide-react'

function CartDrawer({ isOpen, setIsOpen }) {
  const { cart, setCart } = useContext(CartContext)

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


    const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)
  

  return (
  <>
    {isOpen && (
        <div className='fixed inset-0 bg-black/40 z-10' onClick={() => setIsOpen(false)}></div>
    )}
        <div className={`fixed top-0 right-0 w-100 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex items-center justify-between bg-[#3b0133] p-6'>
                <h2 className='text-2xl font-bold text-white'>Your Cart</h2>
                <button onClick={() => setIsOpen(false)} className='text-white hover:text-[#fb85ea] transition'><X size={24} /></button>
            </div>
            <div className='p-6 pb-40 overflow-y-auto h-[calc(100%-180px)]'>
                {cart.map((item) => (
                    <div key={item.id} className='flex items-center  mb-5'>
                        <img src={item.image} alt={item.name} className='w-20 h-20 object-contain rounded-lg'/>
                        <div className='flex items-center gap-6 ml-auto'>
                           <div>
                                <h4 className='text-lg font-semibold text-[#3b0133]'>{item.name}</h4>
                                <p className='text-gray-600'>{item.price} FCFA</p>
                           </div>
                            <div className='flex items-center gap-2 '>
                                <button onClick={() => handleDecrease(item.id)} className='border px-2 py-1 rounded'>-</button>
                                <span className='w-6 text-center'>{item.quantity}</span>
                                <button onClick={() => handleIncrease(item.id)} className='border px-2 py-1 rounded'>+</button>
                            </div>
                            <button onClick={() => handleRemove(item.id)} className='text-red-500 text-sm mt-2 hover:underline'><Trash2 size={18} /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-0 left-0 w-full p-6 bg-white border-t'>
                <div className='flex justify-between items-center mb-4'>
                    <p className='text-lg font-bold text-[#3b0133]'>Total:</p>
                    <p className='text-xl font-bold text-[#fb85ea]'>{total} FCFA</p>
                </div>
                <button className='w-full bg-[#3b0133] border-2 text-white hover:bg-white hover:text-[#3b0133] hover:font-bold  border-[#3b013378] py-2 px-4 rounded-lg'>Checkout</button>
            </div>
        </div>
  </>
    
  )
}

export default CartDrawer