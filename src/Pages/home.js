import React from 'react'
import Navbar from '../Components/navbar'
import Hero from '../Components/hero'
import Carousel from '../Layouts/carousel'
import TDeals from '../Components/TDeals'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className='mt-4 px-10 lg:px-[6rem]'>
            <Carousel />
        </div>
        <TDeals />
    </div>
  )
}

export default Home