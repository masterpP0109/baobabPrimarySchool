import React from 'react'
import Hero from '../components/Academics/Hero'
import AcdemicExcellence from '../components/Academics/AcdemicExcellence'
import Excellence from '../components/Academics/Excellence'
import StudentsProgress from '../components/Academics/StudentsProgress'
import Testimonials from '../components/Home/Testimonials'

const Academics = () => {
  return (
    <div>
       <Hero/>
       <AcdemicExcellence/>
       <Excellence/>
       <StudentsProgress/>
       <Testimonials/>
    </div>
  )
}

export default Academics
