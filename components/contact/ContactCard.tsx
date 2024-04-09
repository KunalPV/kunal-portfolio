import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Linkedin, Mail } from 'lucide-react'
import { Button } from '../ui/button'

const ContactCard = () => {

  return (
    <div className='w-full flex justify-center items-center'>
      <Card className='w-full'>
        <CardContent className='w-full flex justify-between items-center px-10 py-5'>
          <div className='flex justify-center items-center py-2'>
            <Button size="icon">
              <Mail className='h-4 w-4' />
            </Button>
            <a className='ml-2 text-xl font-medium underline underline-offset-8' href="mailto:kpv035@gmail.com">example@gmail.com</a>
          </div>

          <Separator orientation="vertical" className='h-10 ml-4 mr-2' />

          <div className='px-4 flex justify-center items-center py-2'>
            <Button size="icon">
              <Linkedin className='h-4 w-4' />
            </Button>
            <a className='ml-2 text-xl font-medium underline underline-offset-8' href="https://www.linkedin.com/in/kunal-pv/">linkedIn</a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactCard