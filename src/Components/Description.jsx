import React from 'react'
import Individualspec from './Individualspec'
import { Link } from 'react-router-dom'

function Description(props) {
  return (
    <section className='flex px-10 lg:px-[6rem] mt-3'>
        <div className='flex flex-col md:w-[60%] gap-4 '>
            <div className='flex align-middle w-[100%]'>
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

                <div className='ml-2 w-[100%] border '>
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
            <div className='flex justify-between align-middle'>
                <p className='text-base font-semibold w-[70%]'>Infinix HOT 30i 6.56" 4GB RAM/128GB ROM Android 12 - Black</p>
                <Link className='text-sm underline text-orange-500'>See Similar Products</Link>
            </div>
        </div>
    </section>
  )
}

export default Description