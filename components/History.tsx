import React from 'react'
import Education from './history/Education'
import Experience from './history/Experience'
import Skills from './history/Skills'
import Certifications from './history/Certifications'
import Projects from './history/Projects'

const History = () => {
  return (
    <div className='flex justify-around items-center flex-col'>
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Education />
    </div>
  )
}

export default History