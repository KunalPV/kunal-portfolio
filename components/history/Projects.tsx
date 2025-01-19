import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

const Projects = () => {
  return (
    <div className='w-full my-2'>
      <Card className='mx-28'>
        <CardHeader>
          <CardTitle className='pt-2 pl-2'>
            Projects
          </CardTitle>
        </CardHeader>

        <div className='w-full flex justify-center items-center'>
          <Separator className='w-[95%]' />
        </div>

        <CardContent className='mt-4 w-full grid grid-cols-3 gap-2'>
          <Card className='pt-4'>
            <CardContent className='flex flex-col justify-center items-center gap-2'>
              <div className='text-lg font-medium'>
                HowNetWorks
              </div>
              <a href="https://hownetworks.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button>Website</Button>
              </a>
              <div className='text-sm text-center pt-1'>
              Developed a fullstack web application to educate users on internet privacy concepts, featuring engaging interfaces, real-time data visualization, and scalable backend communication.
              </div>
            </CardContent>
          </Card>
          <Card className='pt-4'>
            <CardContent className='flex flex-col justify-center items-center gap-2'>
              <div className='text-lg font-medium'>
                KryptoInsight
              </div>
              <a href="https://github.com/KunalPV/KryptoInsight" target="_blank" rel="noopener noreferrer">
                <Button>Github</Button>
              </a>
              <div className='text-sm text-center pt-1'>
              Created a fullstack web3 application to streamline survey creation and incentivize participation with cryptocurrency rewards, combining responsive design with secure and efficient data handling.
              </div>
            </CardContent>
          </Card>
          <Card className='pt-4'>
            <CardContent className='flex flex-col justify-center items-center gap-2'>
              <div className='text-lg font-medium'>
                gofs
              </div>
              <a href="https://github.com/KunalPV/gofs" target="_blank" rel="noopener noreferrer">
                <Button>Github</Button>
              </a>
              <div className='text-sm text-center pt-1'>
              Designed an advanced command-line tool for efficient file searching and filtering, incorporating features like multithreaded traversal, pattern matching, and customizable output.
              </div>
            </CardContent>
          </Card>
          {/* <Card className='pt-4'>
            <CardContent className='flex flex-col justify-center items-center gap-2'>
              <div className='text-lg font-medium'>
              Places Directory
              </div>
              <a href="https://github.com/KunalPV/posts-app-backend">
                <Button>Github</Button>
              </a>
              <div className='text-sm text-center pt-1'>
              Developed an interactive web app that allows users to curate, share, and explore favourite locations through a community-driven directory and a visually appealing map view.
              </div>
            </CardContent>
          </Card> */}
          {/* <Card className='pt-4'>
            <CardContent className='flex flex-col justify-center items-center gap-2'>
              <div className='text-lg font-medium'>
              E-Shopping
              </div>
              <a href="https://github.com/KunalPV/eShopping">
                <Button>Github</Button>
              </a>
              <div className='text-sm text-center pt-1'>
                Designed and developed a responsive eCommerce platform using EJS templates, which facilitated dynamic content rendering and seamless integration of JavaScript logic.
              </div>
            </CardContent>
          </Card> */}
        </CardContent>

      </Card>
    </div>
  )
}

export default Projects