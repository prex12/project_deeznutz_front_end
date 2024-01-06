import React from 'react'

function Description() {
  return (
    <section className='flex px-10 lg:px-[6rem]'>
        <div className='flex flex-col md:w-[60%]'>
            <div className='flex align-middle w-[100%]'>
                <div className='flex flex-col gap-2'>
                    <img className='w-[120px] p-5 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    <img className='w-[120px] p-5 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    <img className='w-[120px] p-5 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    <img className='w-[120px] p-5 border' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                    {/* {productList.map((product, index)=>{
                        return(
                            <img src={product.img} alt={product.alt} />
                            )
                    }) } */}
                </div>

                <div className='h-[500px] w-[500px]'>
                    <img className='h-[20rem] mx-auto my-[5rem]' src={require("../Assets/Images/phone.png")} alt="Big-img" />
                </div>
                
            </div> 

            <div className='flex flex-col'>
                <h3 className='font-bold'>Product Detail</h3>
                <h4 className='text-sm font-semibold'>Infinix HOT 30i 6.56" 4GB RAM/128GB ROM Android 12 - Black</h4>
                <p></p>
            </div>
        </div>
    </section>
  )
}

export default Description