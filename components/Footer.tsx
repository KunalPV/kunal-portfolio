import React from 'react'
import { Button } from './ui/button'
import ContactModel from './contact/ContactModel'

const Footer = () => {
  return (
    <div className='my-10 w-full flex flex-col justify-center items-center'>
      <div className='text-center flex flex-col gap-1'>
        <div className='text-lg'>Get to know more about me</div>
        <div className='text-3xl font-semibold'>Contact Me</div>
      </div>
      <div className='my-5'>
        <ContactModel />
      </div>
    </div>
  )
}

export default Footer