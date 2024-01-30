import React from 'react'

function OtherYouCanBuy() {
  return (
    <div className='px-4 py-3'>
        <p className='text-sm text-slate-400'>You can also buy</p>
        <div className='flex items-start justify-between mt-2'>
            <img className='w-[10rem] p-3 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
            <p className='font-semibold text-md'>Infinix Hot 30i Screen Protector </p>
            <p className='font-semibold text-md'>#5000</p>
        </div>
        <div className='flex justify-between mt-3'>
            <p className='text-sm text-slate-400'>Total Price</p>
            <p className='text-lg font-semibold'>#113,000</p>
        </div>
        <button className='border border-orange-500 w-full py-5 hover:bg-orange-500'>Checkout now</button>
    </div>
  )
}

export default OtherYouCanBuy