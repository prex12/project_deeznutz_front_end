import React from 'react'
import Individualspec from './Individualspec'

import OtherYouCanBuy from './other-you-can-buy'
import BuyNow from './BuyNow'


function Description(props) {
    
  return (
    <section className='flex px-10 lg:px-[6rem]'>
        <div className='grid grid-rows-2'>
            <div className='flex item-center w-full'>
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
            {/* end of picture section */}

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
            {/* end of Product detail i want to remove this from here and put it in lower grid as first item  */}
        </div>
        <div className='flex-col ml-4'>
            <BuyNow />
            {/* other suggested product that can go with current one */}
            <OtherYouCanBuy />
            {/*  */}
        </div>
    </section>
  )
}

export default Description