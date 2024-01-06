import React from 'react'
import { Link } from 'react-router-dom'
import ShopItem from './shopitem'

function TDeals() {
  return (
    <>
        <div className='flex justify-between align-middle lg:mt-4 lg:px-[6rem]'>
            <h3>Today's Deals </h3>
            <Link to='TodaysDeals' className='underline text-orange-500'>see all</Link>
        </div>
        <div  className='lg:mt-4 lg:px-[6rem]'>
            <ShopItem />
        </div>
    </>
    
  )
}

export default TDeals