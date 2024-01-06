import React, { useState } from 'react'
import Carousel from '../Layouts/carousel'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCartOutline, IoGameControllerOutline } from "react-icons/io5";
import { FcSmartphoneTablet } from "react-icons/fc";
import { GiCookingPot, GiRunningShoe } from "react-icons/gi";
import { BiDrink, BiRun } from "react-icons/bi";
import { PiHoodieLight, PiCarLight } from "react-icons/pi";
import { FaRegHospital } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { TbBabyCarriage } from "react-icons/tb";

const Hero = () => {
    const[showCategory, setShowCategory] = useState(false)

    function handleCategory() {
        setShowCategory(prev=> !prev)
    }

  return (
    <div className='px-10 lg:px-[6rem]'>
        <div className='flex justify-between text-sm text-[#949494]'>
            <div className='flex gap-x-2 cursor-pointer'>
                <div>
                    <p className='relative flex items-center gap-x-2 p-2 text-black hover:p-2 hover:bg-[#F68B1E]' onClick={handleCategory}><AiOutlineMenu />Shop by categories</p>
                    {showCategory && 
                    <ul className='absolute bg-white shadow-md z-10 p-6 pb-12'>
                        <li className='flex items-center gap-x-2'><FcSmartphoneTablet />Phones & Tablets</li>
                        <li className='flex items-center gap-x-2 mt-2'><GiCookingPot />Appliances</li>
                        <li className='flex items-center gap-x-2 mt-2'><GiRunningShoe />Shoes</li>
                        <li className='flex items-center gap-x-2 mt-2'><BiDrink />Beverages</li>
                        <li className='flex items-center gap-x-2 mt-2'><PiHoodieLight />Fashion</li>
                        <li className='flex items-center gap-x-2 mt-2'><PiCarLight />Cars</li>
                        <li className='flex items-center gap-x-2 mt-2'><FaRegHospital />Health & Beauty</li>
                        <li className='flex items-center gap-x-2 mt-2'><TbBabyCarriage />Baby Products</li>
                        <li className='flex items-center gap-x-2 mt-2'><IoGameControllerOutline />Gaming</li>
                        <li className='flex items-center gap-x-2 mt-2'><BiRun />Sporting Goods</li>
                        <li className='flex items-center gap-x-2 mt-2'><CiCircleMore />Other Categories</li>
                    </ul>
                    }
                </div>

                <ul className='flex items-center'>
                    <li className='ml-4 p-2'>Todays Deal</li>
                    <li className='p-2'>Special Prices</li>
                    <li className='p-2'>Favorite</li>
                    <li className='p-2'>Recently viewed</li>
                </ul>
            </div>
            <ul className='cursor-pointer'>
                <li className='flex items-center gap-x-2 text-black'>Cart<IoCartOutline /></li>
            </ul>
        </div>
        <div className='mt-4'>
            <Carousel />
        </div>
    </div>
  )
}

export default Hero