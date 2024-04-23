import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/navbar'
import Category from '../Components/category'


const Navlayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Category />
      </div>
      <Outlet />
    </>
    )
}

export default Navlayout