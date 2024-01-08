import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[80px] w-full bg-white px-10 lg:px-[6rem]'>
      <Link to='/'>
        <img src={require('../Assets/Images/Ebuy.png')} alt='Ebuy logo' />
      </Link>

        <div className='relative flex items-center w-[24rem] h-[2rem]'>
          <CiSearch className='text-lg z-20 mx-4 cursor-pointer' />
          <input type='text' placeholder='Search products, brands and categories' className='absolute w-[100%] h-[100%] text-sm px-10 border border-[#E9E9E9] outline-none shadow-none focus:outline-none focus:border-2 focus:border-gray' />
        </div>

        <ul className='flex gap-4 font-bold cursor-pointer'>
          <li className=' hover:text-[#F68B1E]'>ENG</li>
          <li className='flex items-center gap-2 hover:text-[#F68B1E]'>Help<TfiHelpAlt /></li>
          <Link className='flex items-center gap-2 hover:text-[#F68B1E]'>Login/Sign in<FaRegUser /></Link>
        </ul>

        <Outlet />
    </div>
  )
}

export default Navbar