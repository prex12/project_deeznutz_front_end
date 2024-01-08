import React from 'react'
import Individualspec from './Individualspec'
import { Link } from 'react-router-dom'

function Description(props) {
  return (
    <section className='flex px-10 lg:px-[6rem]'>
        <div className='flex flex-col md:w-[60%] gap-4 '>
            <div className='flex item-center w-[100%]'>
                <div className='flex flex-col gap-2 w-[20%]'>
                    <img className='border-orange-500 w-[120px] p-5 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    <img className='w-[120px] p-5 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    <img className='w-[120px] p-5 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    <img className='w-[120px] p-5 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    {/* {productList.map((product, index)=>{
                        return(
                            <img className='w-[120px] p-5 border' src={product.img} alt={product.alt} />
                            )
                    }) } */}
                </div>

                <div className='ml-2 w-[100%] border'>
                    <img className='h-[20rem] mx-auto my-[5rem]' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                </div>
            </div> 

            <div className='flex flex-col mt-3'>
                <h3 className='font-bold mb-2'>Product Detail</h3>
                <h4 className='text-sm font-semibold'>Infinix HOT 30i 6.56" 4GB RAM/128GB ROM Android 12 - Black {props.productFull}</h4>
                {/* {productList.map((product, index)=>{
                    return(
                        <Individualspec />
                    )
                }) } */}
                <Individualspec />
                <Individualspec />
                <Individualspec />
                <Individualspec />
            </div>
        </div>
        <div className='flex-col ml-4'>
            <div className='flex justify-between item-center'>
                <p className='text-base font-semibold w-[70%]'>Infinix HOT 30i 6.56" 4GB RAM/128GB ROM Android 12 - Black</p>
                <Link className='text-sm underline text-orange-500'>See Similar Products</Link>
            </div>
            <div className='mt-3 mb-3'>
                <p className='text-sm font-semibold'>Brand: {props.brand}</p>
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-medium text-xl'>₦{props.price}108,000</p>
                <p className='text-[#949494] text-sm'>Rating:</p>
            </div>
            <hr />
            <div>
                <p className='mt-1'>Color Available: Black.</p>
                <div className='mt-2 border-2 border-slate-300 rounded-full w-6 h-6'>
                    <div className='relative left-[1px] top-[1px] rounded-full bg-black w-[1.2rem] h-[1.2rem]'></div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Description