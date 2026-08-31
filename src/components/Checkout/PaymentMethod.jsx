import React from 'react'

function PaymentMethod({ paymentMethod, setPaymentMethod }) {
    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-bold text-[#3b0133] mb-6'>Paiement</h2>
            <div className='space-y-3'>
                {/* Orange Money */}
                <label className='flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-[#fb85ea] transition'>
                    <input type='radio' name='payment' value='orange-money' className='accent-[#fb85ea]' checked={paymentMethod === 'orange-money'} onChange={(e) => setPaymentMethod(e.target.value)}/>
                    <span className='font-medium text-[#3b0133]'>Orange Money</span>
                </label>
                {/* Wave */}
                <label className='flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-[#fb85ea] transition'>
                    <input type='radio' name='payment' value='wave' className='accent-[#fb85ea] ' checked={paymentMethod === 'wave'} onChange={(e) => setPaymentMethod(e.target.value)}/>
                    <span className='font-medium text-[#3b0133]'>Wave</span>
                </label>
                {/* Paiement à la livraison */}
                <label className='flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-[#fb85ea] transition'>
                    <input type='radio' name='payment' value='delivery' className='accent-[#fb85ea]' checked={paymentMethod === 'delivery'} onChange={(e) => setPaymentMethod(e.target.value)}/>
                    <span className='font-medium text-[#3b0133]'>À la livraison</span>
                </label>
            </div>

         </div>
  )
}

export default PaymentMethod