import React from 'react'
import Navbar from '../Components/navbar'
import Hero from '../Components/hero'
import TDeals from '../Components/TDeals'
import Prices from '../Components/prices'
import Footer from '../Components/footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <TDeals />
        <Prices />
        <Footer />
    </div>
  )
}

export default Home