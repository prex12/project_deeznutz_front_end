import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/navbar'
import Hero from '../Components/hero'


const Navlayout = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Outlet />
    </div>
  )
}

export default Navlayout