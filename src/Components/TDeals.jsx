import React from 'react'
import { Link } from 'react-router-dom'
import ShopItem from './shopitem'

function TDeals() {
  return (
    <div className=' lg:mt-4 lg:px-[6rem] pb-10'>
      <div className='flex justify-between align-middle'>
        <h3 className='font-semibold'>Today's Deals </h3>
        <Link to='TodaysDeals' className='underline text-orange-500'>see all</Link>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-10 mt-8'>
        <ShopItem />
      </div>
      
    </div>

  )
}

export default TDeals