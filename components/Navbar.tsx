import React from 'react'

import { ModeToggle } from './ui/ToggleButton'
import ContactModel from './contact/ContactModel'
import Logo from './Logo'


const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between px-4 py-3'>
      <div>
        <Logo />
      </div>
      <div className='w-[17%] px-4 flex justify-between items-center m-2 p-2'>
        <div>
          <ContactModel />
        </div>

        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar