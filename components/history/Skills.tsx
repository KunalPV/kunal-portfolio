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
          <Card className='p-4 flex flex-col justify-center gap-2'>
            <div>
              <span className='font-semibold'>Fullstack:</span> React.js, Next.js, Node.js Express.js, Vue.js, Spring Boot, Django, TailwindCSS, GraphQL.
            </div>
            <div>
              <span className='font-semibold'>Cloud Computing:</span> Lambda, EC2, S3, RDS, DynamoDB, CloudFormation, Elastic Beanstalk, EKS/ECS, CloudFront, Docker, VPC.
            </div>
            <div>
              <span className='font-semibold'>Programming Languages:</span> Java, JavaScript, Golang, TypeScript, Python, Solidity, C++, C, SQL.
            </div>
            <div>
              <span className='font-semibold'>Operating System & Database:</span> Linux, MySQL, MongoDB, Firebase, PostgreSQL.
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default Skills