import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import productImage from "../Assets/Images/phone.png"
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { dealsData } from '../Utils/data/data'

function ShopItem() {
  const [click, setClick] = useState(false)
  // const [productData, setProductData] = useState(dealsData)


  function isClicked() {
    setClick(prev => !prev)
  }
  return (
    <>
      {dealsData.map((product, index) => (
        <div className='p-5 flex flex-col max-w-full  lg:h-[300px] items-center' key={index}>
          <div className='flex justify-between items-center w-full mb-1'>
            <p className='text-[.8rem] px-1 bg-orange-200 text-orange-500'>20% Off</p>
            <button onClick={isClicked}>{click ? <FaHeart /> : <FaRegHeart />}</button>
          </div>

          <div className='flex flex-col gap-4 h-[100%]'>
            <img className='w-[100%]' src={productImage} alt="product img" />
            <div className='flex item-center justify-between px-1'>
              <p className='text-[.7rem] lg:text-base lg:font-semibold'>{product.brand}</p>
              <p className='text-[.7rem] lg:text-base font-semibold'>{product.price}</p>
            </div>
            {/* <p className='px-1 text-[1rem] font-normal text-[#949494]'>{product.brand}</p> */}
            <button className='p-2 w-full  bg-[#F68B1E]'><Link to='products'>Buy now</Link></button>
          </div>
        </div>
      ))
      }
    </>
      
    
  )
}


export default ShopItem