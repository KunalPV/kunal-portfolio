import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import DevPng from '../../public/developer-associate.png'
import SolPng from '../../public/solutions-architect-associate.png'
import CcpPng from '../../public/cloud-practitioner.png'
import Image from 'next/image'

const Certifications = () => {
  return (
    <div className='w-full my-2'>
      <Card className='mx-28'>
        <CardHeader>
          <CardTitle className='pt-2 pl-2'>
            Certifications
          </CardTitle>
        </CardHeader>

        <div className='w-full flex justify-center items-center'>
          <Separator className='w-[95%]' />
        </div>

        <CardContent className='mt-4 w-full grid grid-cols-2 gap-2'>
          <Card className='flex justify-between items-center p-4'>
            <div className='flex justify-start items-start flex-col gap-4 p-2'>
              <div className='font-medium'>AWS Certified Developer - Associate</div>
              <a href="https://www.credly.com/badges/493cc0a5-04c3-42b7-b8ad-d3909c144700/public_url">
                <Button variant="outline">Verify</Button>
              </a>
            </div>
            <div className='flex justify-start items-start flex-col'>
              <Image src={DevPng} alt='dev-png' width={120} height={120} />
            </div>
          </Card>

          <Card className='flex justify-between items-center p-4'>
            <div className='flex justify-start items-start flex-col gap-4 p-2'>
              <div className='font-medium'>AWS Certified Solutions Architect - Associate</div>
              <a href="https://www.credly.com/badges/bf3bc215-a5ba-4c69-aeb4-f92f871fd22d/public_url">
                <Button variant="outline">Verify</Button>
              </a>
            </div>
            <div className='flex justify-start items-start flex-col'>
              <Image src={SolPng} alt='dev-png' width={140} height={140} />
            </div>
          </Card>

          <Card className='flex justify-between items-center p-4'>
            <div className='flex justify-start items-start flex-col gap-4 p-2'>
              <div className='font-medium'>AWS Certified Cloud Practitioner</div>
              <a href="https://www.credly.com/badges/7321003f-698e-45fb-aaf5-319e5e103c94/public_url">
                <Button variant="outline">Verify</Button>
              </a>
            </div>
            <div className='flex justify-start items-start flex-col'>
              <Image src={CcpPng} alt='dev-png' width={120} height={120} />
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default Certifications