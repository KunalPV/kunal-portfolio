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
                <div className='text-lg font-medium'>Software Developer</div>
                <div className='text-sm font-light'>Diffblue</div>
              </div>
              <div className='flex flex-col justify-end items-end'>
                <div className='text-lg font-medium'>Oct 2023 – Nov 2024</div>
                <div className='text-sm font-light'>Oxford, UK</div>
              </div>
            </div>

            <Separator className='w-full my-2'  />

            <div className='w-full flex flex-col items-center justify-start'>
              <p>&diams; Designed and implemented microservices using Java and Spring Boot to process 100k+ financial transactions daily, reducing query latency by 20% through advanced PostgreSQL indexing.</p>
              <p>&diams; Deployed and monitored an inventory management system on AWS using Kubernetes and Docker, achieving seamless scaling for 2x peak traffic spikes and maintaining 99.9% uptime.</p>
              <p>&diams; Developed RESTful APIs supporting 10k+ daily cross-platform interactions, improving response times by 30% and enabling secure third-party integrations with OAuth2 authentication.</p>
            </div>
          </Card>


          <Card className='w-full flex flex-col items-center justify-center p-6'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex flex-col justify-start items-start'>
                <div className='text-lg font-medium'>Software Developer Intern</div>
                <div className='text-sm font-light'>Tequed Labs</div>
              </div>
              <div className='flex flex-col justify-end items-end'>
                <div className='text-lg font-medium'>Jan 2021 – Oct 2021</div>
                <div className='text-sm font-light'>Bengaluru, India</div>
              </div>
            </div>

            <Separator className='w-full my-2'  />

            <div className='w-full flex flex-col items-center justify-start'>
              <p>&diams; Deployed a containerized cloud-native monitoring system on AWS using Kubernetes and Docker, increasing resource efficiency by 30% through auto-scaling.</p>
              <p>&diams; Enhanced application responsiveness by implementing lazy loading and MongoDB aggregation, reducing load times by 45% and supporting 10k concurrent users efficiently.</p>
            </div>
          </Card>

          <Card className='w-full flex flex-col items-center justify-center p-6 mt-4'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex flex-col justify-start items-start'>
                <div className='text-lg font-medium'>Backend Developer Intern</div>
                <div className='text-sm font-light'>Gutslane</div>
              </div>
              <div className='flex flex-col justify-end items-end'>
                <div className='text-lg font-medium'>Jun 2020 – Nov 2020</div>
                <div className='text-sm font-light'>Bengaluru, India</div>
              </div>
            </div>

            <Separator className='w-full my-2'  />

            <div className='w-full flex flex-col items-center justify-start'>
              <p>&diams; Enhanced system scalability and user experience by implementing Redis caching and NGINX load balancing, boosting traffic handling capacity by 50% with minimal latency.</p>
              <p>&diams; Refactored key code modules and introduced asynchronous data pipelines, reducing page load times by 40% and ensuring maintainability for future feature expansions.</p>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default Experience