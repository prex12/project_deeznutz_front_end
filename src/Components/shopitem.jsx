import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import productImage from "../Assets/Images/phone.png"
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { dealsData } from '../Utils/data/data'

function ShopItem() {
  const [click, setClick] = useState(false)
  const [productData, setProductData] = useState(dealsData)


  function isClicked() {
    setClick(prev => !prev)
  }
  return (
    <div className='grid grid-cols-4 gap-x-8 gap-y-10 mt-8'>
      {productData.map((product, index) => (
        <div key={index}>
          <div className='flex justify-between item-center'>
            <p className='text-[.8rem] px-1 bg-orange-200 text-orange-500'>20% Off</p>
            <button onClick={isClicked}>{click ? <FaHeart /> : <FaRegHeart />}</button>
          </div>

          <div className='flex flex-col gap-4 w-full'>
            <img src={productImage} alt="product img" />
            <div className='flex item-center justify-between px-1'>
              <p className='text-base font-semibold'>{product.name}</p>
              <p className='text-base font-semibold'>{product.price}</p>
            </div>
            <p className='px-1 text-[1rem] font-normal text-[#949494]'>{product.brand}</p>
            <button className='h-[2.5rem]  bg-[#F68B1E]'><Link to='products'>Buy now</Link></button>
          </div>
        </div>
      ))
      }
    </div>
  )
}


export default ShopItem