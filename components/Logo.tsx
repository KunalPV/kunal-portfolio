"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Logo = () => {
  return (
    <div className='text-xl font-semibold p-2'>
      <Typewriter 
        words={['kunal.', 'ಕುನಾಲ್.', 'कुणाल.', 'クナル.', '쿠날.', 'Кунал.', '库纳尔.', 'kunal.']}
        loop={5}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
      />
    </div>
  )
}

export default Logo