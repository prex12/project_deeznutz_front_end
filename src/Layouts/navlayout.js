import React from 'react'
<<<<<<< HEAD
import { Outlet } from 'react-router-dom'
=======
import { Outlet } from 'react-router'
>>>>>>> refs/remotes/origin/route_setup
import Navbar from '../Components/navbar'
import Category from '../Components/category'


const Navlayout = () => {
  return (
    <>
      <div>
        <Navbar />
<<<<<<< HEAD
        <Category />
      </div>
      <Outlet />
    </>
=======
        <Hero />
        <Outlet />
    </div>
>>>>>>> refs/remotes/origin/route_setup
  )
}

export default Navlayout