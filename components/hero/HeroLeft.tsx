import React from 'react'
import heroSvg from '../../public/hero.svg'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Github, Linkedin } from 'lucide-react'

const HeroLeft = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center pt-10'>
      <div>
        <Image src={heroSvg} alt='hero-img' width={350} />
      </div>

      <div className='w-full flex justify-center items-center pt-5'>
        <div className='flex justify-center items-center pr-2'>
          <a href="https://github.com/KunalPV">
            <Button className='border-black' variant="outline" size="icon"><Github className='h-5 w-5' /></Button>
          </a>
        </div>
        <div className='flex justify-center items-center pr-2'>
          <a href="https://www.linkedin.com/in/kunal-pv/">
            <Button className='border-black' variant="outline" size="icon"><Linkedin className='h-5 w-5' /></Button>
          </a>
        </div>
        <div className='pl-2'>
          <a href="kunal_cv.pdf"  target="_blank" rel="noopener noreferrer">
            <Button className=''>Resume</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroLeft