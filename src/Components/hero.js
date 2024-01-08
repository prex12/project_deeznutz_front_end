import React, { useState } from 'react'
import Carousel from '../Layouts/carousel'
import Category from './category'

const Hero = () => {
    
  return (
    <div className='px-10 lg:px-[6rem]'>
        <Category />
        <div className='mt-4'>
            <Carousel />
        </div>
    </div>
  )
}

export default Hero