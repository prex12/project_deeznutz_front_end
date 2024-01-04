import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='px-10 lg:px-[6rem]'>
        <div className='flex justify-between text-sm text-[#949494]'>
            <ul className='flex gap-x-2 cursor-pointer'>
                <li className='flex items-center gap-x-2 p-2 text-black hover:p-2 hover:bg-[#F68B1E]'><AiOutlineMenu />Shop by categories</li>
                <li className='ml-4 p-2'>Todays Deal</li>
                <li className='p-2'>Special Prices</li>
                <li className='p-2'>Favorite</li>
                <li className='p-2'>Recently viewed</li>
            </ul>
            <ul className='cursor-pointer'>
                <li className='flex items-center gap-x-2 p-2 text-black'>Cart<IoCartOutline /></li>
            </ul>
        </div>
    </div>
  )
}

export default Hero