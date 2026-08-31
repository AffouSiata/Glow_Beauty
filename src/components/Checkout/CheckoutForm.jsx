import React,{useState, useContext} from 'react'
import PaymentMethod from './PaymentMethod'
import CartContext from '../../context/CartContext'

function CheckoutForm() {
    const [paymentMethod, setPaymentMethod] = useState('')
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

            const order = {
                customer: formData,
                paymentMethod: paymentMethod,
                products: cart
            }
            console.log('Commande :', order)
    }

  return (
    <form className='bg-[#f9f9f9] p-6 rounded-lg shadow-md' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold text-[#3b0133] mb-6'>Informations de livraison</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
                <label className='block text-sm font-medium text-[#3b0133] mb-2'>FirstName</label>
                <input type='text' name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Votre prénom' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
            </div>
            <div>
                <label className='block text-sm font-medium text-[#3b0133] mb-2'>LastName</label>
                <input type='text' name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Votre nom' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
            </div>
            <div className='md:col-span-2'>
                <label className='block text-sm font-medium text-[#3b0133] mb-2'>Address</label>
                <input type='text'name="address" value={formData.address} onChange={handleChange} placeholder='Votre adresse' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
            </div>
            <div>
                <label className='block text-sm font-medium text-[#3b0133] mb-2'>City</label>
                <input type='text'name="city" value={formData.city} onChange={handleChange} placeholder='Votre ville' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
            </div>
            <div>
                <label className='block text-sm font-medium text-[#3b0133] mb-2'>Phone</label>
                <input type='tel' name="phone" value={formData.phone} onChange={handleChange} placeholder='Votre numéro' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
            </div>
            <div className='md:col-span-2'>
                <label className='block text-sm font-medium text-[#3b0133] mb-2'>Email</label>
                <input type='email'name="email"  value={formData.email} onChange={handleChange} placeholder='Votre adresse email' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#fb85ea]'/>
            </div>

        </div>
        <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}/>
        <button type='submit' className='w-full mt-6 bg-[#3b0133] text-white py-3 px-4 rounded-lg border-2 border-[#3b0133] hover:bg-white hover:text-[#3b0133] transition font-semibold'>CONFIRMER LA COMMANDE</button>
    </form>
  )
}

export default CheckoutForm