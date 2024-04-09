import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'


const Skills = () => {
  return (
    <div className='w-full my-2'>
      <Card className='mx-28'>
        <CardHeader>
          <CardTitle className='pt-2 pl-2'>
            Skills
          </CardTitle>
        </CardHeader>

        <div className='w-full flex justify-center items-center'>
          <Separator className='w-[95%]' />
        </div>

        <CardContent className='mt-4 w-full flex justify-around items-center'>
          <Card className='p-4'>
            <div>
              <span className='font-semibold'>Languages:</span> JavaScript, TypeScript, Java, Python, Solidity, C++, C, HTML/CSS, SQL, Flutter.
            </div>
            <div>
              <span className='font-semibold'>Technologies/Frameworks:</span> Github, ReactJS, NodeJS, ExpressJS, NextJS, TailwindCSS, Hardhat, MongoDB, REST, Mongoose, Firebase, Spring Boot, Linux, Docker, MySQL, Django, Redux.
            </div>
            <div>
              <span className='font-semibold'>Cloud:</span> EC2, S3, RDS, Faas with Lambda, Paas with Elastic Beanstalk, IaC using AWS CloudFormation, Terraform, CI/CD.
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default Skills