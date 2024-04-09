import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

const Experience = () => {
  return (
    <div className='w-full my-2'>
      <Card className='mx-28'>
        <CardHeader>
          <CardTitle className='pt-2 pl-2'>
            Experience
          </CardTitle>
        </CardHeader>

        <div className='w-full flex justify-center items-center'>
          <Separator className='w-[95%]' />
        </div>

        <CardContent className='mt-4 flex flex-col justify-center items-center'>
          <Card className='w-full flex flex-col items-center justify-center p-6'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex flex-col justify-start items-start'>
                <div className='text-lg font-medium'>Junior Software Developer</div>
                <div className='text-sm font-light'>Tequed Labs</div>
              </div>
              <div className='flex flex-col justify-end items-end'>
                <div className='text-lg font-medium'>Jan 2021 – Oct 2021</div>
                <div className='text-sm font-light'>Bengaluru, India</div>
              </div>
            </div>

            <Separator className='w-full my-2'  />

            <div>Developed, tested, and deployed new Web Application features using React and Node.js, resulting in a remarkable 60% surge in user base within just three months.</div>
          </Card>

          <Card className='w-full flex flex-col items-center justify-center p-6 mt-4'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex flex-col justify-start items-start'>
                <div className='text-lg font-medium'>Software Developer</div>
                <div className='text-sm font-light'>Gutslane</div>
              </div>
              <div className='flex flex-col justify-end items-end'>
                <div className='text-lg font-medium'>Jun 2020 – Nov 2020</div>
                <div className='text-sm font-light'>Bengaluru, India</div>
              </div>
            </div>

            <Separator className='w-full my-2'  />

            <div>Implemented caching and load balancing strategies using Java and Spring Boot, resulting in a 70% improvement in system scalability and ensuring a seamless user experience during peak traffic periods.</div>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default Experience