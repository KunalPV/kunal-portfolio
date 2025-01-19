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
          <Card className='w-full flex flex-col items-center justify-center p-4'>
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

            <div className='w-full flex flex-col items-center justify-start gap-1'>
              <p>&bull; Contributed to the development of RESTful backend APIs in Java using Spring Boot, enabling seamless communication between the frontend and the MySQL database, improving response times by 20%.</p>
              <p>&bull; Optimized database queries by implementing indexing and efficient data models in MySQL, reducing query execution time by 25%, enhancing overall application performance.</p>
              <p>&bull; Collaborated with a team of 4 to debug and enhance backend modules, ensuring the timely delivery of updates for an e-commerce platform supporting 5k daily active users.</p>
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

            <div className='w-full flex flex-col items-center justify-start gap-1'>
              <p>&bull; Developed interactive user interfaces for a task management dashboard using React.js, integrating them with backend APIs built in Node.js, resulting in improved task tracking and a 15% increase in user satisfaction scores.</p>
              <p>&bull; Implemented a MongoDB database schema optimized for real-time data retrieval, enabling live updates for features like task assignments and progress tracking, reducing data latency by 20%.</p>
              <p>&bull; Contributed to the redesign of the application architecture by analyzing performance bottlenecks in API endpoints
              and recommending improvements, resulting in a 10% boost in backend efficiency.</p>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default Experience