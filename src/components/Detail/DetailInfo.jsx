import React from 'react'
import { useState , useContext} from 'react'
import CartContext from '../../context/CartContext'


function DetailInfo({ product }) {
    const [activeTab, setActiveTab] = useState('description')
    const [quantity, setQuantity] = useState(1)

    const { cart, setCart } = useContext(CartContext)


    const handleAddToCart = () => {
      const productFound = cart.find(item => item.id === product.id)

        if (productFound) {
          const updatedCart = cart.map(item => {
            if (item.id === product.id) {
              return {
                ...item,
                quantity: item.quantity + quantity
              }
            }

            return item
          })

          setCart(updatedCart)
              
        }
        else {
          const newProduct = {...product, quantity: quantity}
            setCart([...cart, newProduct])
            
        } 
    }



  return (
    <section className='max-w-7xl mx-auto py-6 px-4'>
        <div className='flex gap-10'>
            <div className='w-1/2'>
                <img src={product?.image}  alt={product?.name}  className='w-full h-[500px] object-contain rounded-2xl shadow-lg' />
            </div>
            <div className='w-1/2 p-5'>
                <h2 className='text-3xl font-bold mb-4'>{product?.name}</h2>
                <p className='text-gray-600 mb-6'>{product?.description}</p>
                <div className='flex gap-20 items-center mb-6'>
                  <p className='text-gray-600 '>Price: ${product?.price?.toFixed(2)}</p>
                  <div className='flex items-center gap-3'>
                    <span className='text-[#3b0133] font-medium'>Quantity:</span>
                    <button className='border px-3 py-1 rounded text-[#fb85ea]'  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                      <span className='w-6 text-center'>{quantity}</span>
                    <button className='border px-3 py-1 rounded text-[#fb85ea]' onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>
                <button className='w-50 bg-[#3b0133] border-2 text-white hover:bg-white hover:text-[#3b0133] hover:font-bold  border-[#3b013378] py-2 px-4 rounded-lg' onClick={handleAddToCart}>Add to cart</button>
                <div className='min-h-[200px]'>
                  <div className='flex gap-8 mt-8 '>
                    <button className={`pb-3 font-semibold ${activeTab ==='description' ? 'border-b-2 border-[#fb85ea] text-[#fb85ea]' : 'text-[#3b0133]'}`} onClick = {()=> setActiveTab('description')}>Description</button>
                    <button className={`pb-3 font-semibold ${activeTab ==='additional-info' ? 'border-b-2 border-[#fb85ea] text-[#fb85ea]' : 'text-[#3b0133]'}`} onClick = {()=> setActiveTab('additional-info')}> Additional Information</button>
                    <button className={`pb-3 font-semibold ${activeTab ==='reviews' ? 'border-b-2 border-[#fb85ea] text-[#fb85ea]' : 'text-[#3b0133]'}`} onClick = {()=> setActiveTab('reviews')}>Reviews</button>
                  </div>
                      {activeTab === 'description' && (
                      <div className='py-5'>
                        <p className='text-gray-600'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia vitae eveniet provident quidem at ea tempore dolores facere ratione eaque..
                        </p>
                      </div>
                    )} 
                    {activeTab === 'additional-info' && (
                      <div className='py-5'>
                        <p className='text-gray-600 mb-2'>
                          Brand: GlowBeauty
                        </p>

                        <p className='text-gray-600 mb-2'>
                          Category: Skincare
                        </p>

                        <p className='text-gray-600 mb-2'>
                          Size: 50ml
                        </p>

                        <p className='text-gray-600'>
                          Availability: In Stock
                        </p>
                      </div>
                    )} 
                    {activeTab === 'reviews' && (
                      <div className='py-5'>
                        <p className='text-gray-600 mb-2'>
                          User1: Great product! Highly recommend.
                        </p>

                        <p className='text-gray-600 mb-2'>
                          User2: Not satisfied with the results.
                        </p>

                        <p className='text-gray-600 mb-2'>
                          User3: Excellent quality and fast shipping.
                        </p>
                      </div>
                    )}     
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default DetailInfo