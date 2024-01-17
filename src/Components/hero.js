import React, { useState } from 'react'
import Carousel from '../Layouts/carousel'
import Category from './category'

const Hero = () => {
    
  return (
    <>
    <Category />
    <div className='px-10 lg:px-[6rem]'>
        <Carousel />
    </div>
    </>
  )
}

export default Hero