import React from 'react'
import { Link } from 'react-router-dom'

function TDeals() {
  return (
    <div className='lg:mt-4 lg:px-[6rem]'>
        <h3>Today's Deals </h3>
        <Link to='TodaysDeals'></Link>
    </div>
  )
}

export default TDeals