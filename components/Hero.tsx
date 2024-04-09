import React from 'react'
import HeroLeft from './hero/HeroLeft'
import HeroRight from './hero/HeroRight'

const Hero = () => {
  return (
    <div className='w-full flex justify-start items-start'>
      <div className='w-[40%] flex items-center justify-center'>
        <HeroLeft />
      </div>
      <div className='w-[60%]'> 
        <HeroRight />
      </div>
    </div>
  )
}

export default Hero