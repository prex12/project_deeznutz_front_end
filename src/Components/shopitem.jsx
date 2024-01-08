import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

function ShopItem() {
  const [click, setClick] = useState(false)

  function isClicked(){
    setClick(prev=> !prev)
  }
  return (
    <div className='flex flex-col gap-4 w-[14rem] '>
        <div className='flex justify-between item-center'>
          <p className='text-[.8rem] px-1 bg-orange-200 text-orange-500'>20% Off</p>
          <button onClick={isClicked}>{click?<FaHeart />:<FaRegHeart />}</button>
          
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <img src={require("../Assets/Images/phone.png")} alt="product img" />
          <div className='flex item-center justify-between px-1'>
            <p className='text-base font-semibold'>Infinix Hot 30i</p>
            <p className='text-base font-semibold'>#90,000</p>
          </div>
          <p className='px-1 text-[1rem] font-normal text-[#949494]'>6.6'" HD+, 4+4GB RAM /128GB ROM Android 12 - Black</p>
          <button className='h-[2.5rem]  bg-[#F68B1E]'>Buy now</button>
        </div>
    </div>
  )
}

export default ShopItem