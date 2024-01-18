import React, { useState } from 'react'
import Individualspec from './Individualspec'
import { Link } from 'react-router-dom'


function Description(props) {
    const [value, setValue] = useState("")
    const [count, setCount] =useState(0)


    const handleSelect = (e) =>{
        setValue(e.target.value)
    }

    const increase=()=>{
        setCount(prevCount=>prevCount + 1)
    }
    const decrease=()=>{
        setCount(prevCount=>{
            if (prevCount === 0 || prevCount < 0){
                return prevCount
            }else{
                return(prevCount - 1);
            }
        })
    }
  return (
    <section className='flex px-10 lg:px-[6rem]'>
        <div className='flex flex-col md:w-[70%] gap-4 '>
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
            {/* buy product section */}
            <div>
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
                <div className='flex gap-2 mt-3'>
                    <form className='text-sm gap-2 border px-2 py-1 focus:outline-none'>
                        <label htmlFor="selectSize">Size:</label>
                        <select id="selectSize" value={value} onChange={handleSelect} >
                            <option value="64GB"> 64GB</option>
                            <option value="32GB"> 32GB</option>
                        </select>
                    </form>
                    <div className='flex item-center gap-0 px-2 py-1 border text-base'>
                        <button className='px-2 font-bold' onClick={increase}>+</button>
                        <p>{count}</p>
                        <button className=' px-2 font-bold' onClick={decrease}>-</button>
                    </div>
                </div>
                <button className='mt-3 bg-orange-500 w-full py-5'>Buy now</button>
            </div>
            {/* other suggested product that can go with current one */}
            <div className='px-4 py-3'>
                <p className='text-sm text-slate-400'>You can also buy</p>
                <div className='flex items-start justify-between mt-2'>
                    <img className='w-[10rem] p-3 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    <p className='font-semibold text-md'>Infinix Hot 30i Screen Protector </p>
                    <p className='font-semibold text-md'>#5000</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-sm text-slate-400'>Total Price</p>
                    <p className='text-lg font-semibold'>#113,000</p>
                </div>
                <button className='border border-orange-500 w-full py-5 hover:bg-orange-500'>Checkout now</button>
            </div>
            {/*  */}
            

        </div>
    </section>
  )
}

export default Description