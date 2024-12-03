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
              <span className='font-semibold'>Cloud & Devops:</span> AWS (Certified Developer, Solutions Architect, Practitioner), Kubernetes, Docker, Terraform, CI/CD.
            </div>
            <div>
              <span className='font-semibold'>Fullstack:</span> Java, JavaScript, TypeScript, Golang, React.js, Next.js, Solidity, C++, C, Node.js Express.js, Spring Boot, Django, GraphQL.
            </div>
            <div>
              <span className='font-semibold'>Operating System & Database:</span> Linux, Windows Server for Cloud, Python, PowerShell, MySQL, MongoDB, Firebase, PostgreSQL.
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default Skills