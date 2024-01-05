import React from 'react'

function ShopItem() {
  return (
    <div className='flex flex-col w-[250px] h-[150px] bg-green-300'>
        <div className='flex justify-between align-middle'>
          <p className='text-sm bg-orange-300 text-orange-500'>20% Off</p>
          <p className='text-sm'><FaRegHeart /></p>
        </div>
    </div>
  )
}

export default ShopItem