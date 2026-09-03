import React,{useState, useContext} from 'react'
import PaymentMethod from './PaymentMethod'
import CartContext from '../../context/CartContext'

function CheckoutForm({ subtotal, shipping, total }) {
    const [paymentMethod, setPaymentMethod] = useState('')
    const [orderConfirmed, setOrderConfirmed] = useState(false)
    const [orderNumber, setOrderNumber] = useState('')
    const [confirmedOrder, setConfirmedOrder] = useState(null)
    const [errors, setErrors] = useState({})
    const { cart, setCart } = useContext(CartContext)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        phone: '',
        email: ''
    })

        const handleChange = (e) => {
            const { name, value } = e.target
            setFormData({
                ...formData,
                [name]: value
            })
        }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!formData.firstName) {
            newErrors.firstName = 'Le prénom est obligatoire.'
        }

        if (!formData.lastName) {
            newErrors.lastName = 'Le nom est obligatoire.'
        }
        if (!formData.email) {
            newErrors.email = 'Lemail est obligatoire.'
        }
        if (!formData.address) {
            newErrors.address = "L’adresse est obligatoire."
        }
         if (!formData.phone) {
            newErrors.phone = "Le phone est obligatoire."
        }

        if (!formData.city) {
            newErrors.city = 'La ville est obligatoire.'
        }


        setErrors(newErrors)
        
        if (Object.keys(newErrors).length > 0) {
            return
        }
            const newOrderNumber = `CMD-${Date.now()}`
            const order = {
                customer: formData,
                paymentMethod: paymentMethod,
                products: cart,
                subtotal: subtotal,
                shipping: shipping,
                total: total
            }
            
            console.log('Commande :', order)
            setOrderNumber(newOrderNumber)
            setConfirmedOrder(order)
            setOrderConfirmed(true)
            setCart([])
            
            
    }

  return (
    <>
       {orderConfirmed ? (
            <div className='bg-[#f9f9f9] p-8 rounded-lg shadow-md text-center'>
                <div className='text-5xl mb-4'>✓</div>

                    <h2 className='text-2xl font-bold text-[#3b0133] mb-4'>Commande confirmée !</h2>
                    <p className='text-gray-600 mb-6'>Merci pour votre commande.</p>

                <div className='space-y-4'>
                    <div>
                        <p className='text-gray-600'>Numéro de commande</p>
                        <p className='text-xl font-bold text-[#3b0133]'>{orderNumber}</p>
                    </div>
                    <div>
                        <p className='text-gray-600'>Mode de paiement</p>
                        <p className='font-semibold text-[#3b0133]'>{confirmedOrder?.paymentMethod}</p>
                    </div>
                    <div>
                        <p className='text-gray-600'>Montant total</p>
                        <p className='text-xl font-bold text-[#fb85ea]'>{confirmedOrder?.total} FCFA</p>
                    </div>
                    <div>
                        <p className='text-gray-600'>Nombre d'articles</p>
                        <p className='font-semibold text-[#3b0133]'>{confirmedOrder?.products.length}</p>
                    </div>
                </div>
            </div>
        ):(
        <form className='bg-[#f9f9f9] p-6 rounded-lg shadow-md' onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold text-[#3b0133] mb-6'>Informations de livraison</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label className='block text-sm font-medium text-[#3b0133] mb-2'>FirstName</label>
                    <input type='text' name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Votre prénom' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
                    {errors.firstName && (
                        <p className='text-red-500 text-sm mt-1'>
                            {errors.firstName}
                        </p>
                    )}
                </div>
                <div>
                    <label className='block text-sm font-medium text-[#3b0133] mb-2'>LastName</label>
                    <input type='text' name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Votre nom' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
                    {errors.lastName && (
                        <p className='text-red-500 text-sm mt-1'>
                            {errors.lastName}
                        </p>
                    )}
                </div>
                <div className='md:col-span-2'>
                    <label className='block text-sm font-medium text-[#3b0133] mb-2'>Address</label>
                    <input type='text'name="address" value={formData.address} onChange={handleChange} placeholder='Votre adresse' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
                    {errors.address && (
                        <p className='text-red-500 text-sm mt-1'>
                            {errors.address}
                        </p>
                    )}
                </div>
                <div>
                    <label className='block text-sm font-medium text-[#3b0133] mb-2'>City</label>
                    <input type='text'name="city" value={formData.city} onChange={handleChange} placeholder='Votre ville' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
                    {errors.city && (
                        <p className='text-red-500 text-sm mt-1'>
                            {errors.city}
                        </p>
                    )}
                </div>
                <div>
                    <label className='block text-sm font-medium text-[#3b0133] mb-2'>Phone</label>
                    <input type='tel' name="phone" value={formData.phone} onChange={handleChange} placeholder='Votre numéro' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
                    {errors.phone && (
                        <p className='text-red-500 text-sm mt-1'>
                            {errors.phone}
                        </p>
                    )}
                </div>
                <div className='md:col-span-2'>
                    <label className='block text-sm font-medium text-[#3b0133] mb-2'>Email</label>
                    <input type='email'name="email"  value={formData.email} onChange={handleChange} placeholder='Votre adresse email' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
                    {errors.email && (
                        <p className='text-red-500 text-sm mt-1'>
                            {errors.email}
                        </p>
                    )}
                </div>

            </div>
            <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}  error={errors.paymentMethod}/>
            <button type='submit' className='w-full mt-6 bg-[#3b0133] text-white py-3 px-4 rounded-lg border-2 border-[#3b0133] hover:bg-white hover:text-[#3b0133] transition font-semibold'>CONFIRMER LA COMMANDE</button>
        
        </form>
        )}
    </>
  )
  
}

export default CheckoutForm