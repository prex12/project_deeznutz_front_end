import React from 'react'
import { Link } from 'react-router-dom'
import ShopItem from './shopitem'

const Prices = () => {
  return (
    <div className=' lg:mt-4 lg:px-[6rem] lg:pb-20'>
      <div className='flex justify-between align-middle'>
        <h3 className='font-semibold'>Special Prices</h3>
        <Link to='TodaysDeals' className='underline text-orange-500'>see all</Link>
      </div>
      <ShopItem />
    </div>
  )
}

export default Prices