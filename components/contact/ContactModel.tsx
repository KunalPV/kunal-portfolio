import React from 'react'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import ContactCard from './ContactCard'


const ContactModel = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className='bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium'>Contact</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className='flex flex-col justify-center items-center'>
            <DrawerTitle className='text-xl font-medium'>Contact Me.</DrawerTitle>
            <DrawerDescription className='text-lg font-medium'>Get in touch.</DrawerDescription>

            <div className='w-[480px]'>
              <ContactCard />
            </div>

          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default ContactModel