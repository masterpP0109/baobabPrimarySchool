import React from 'react'
import AboutUs from '../components/Home/AboutUs'
import Hero from '../components/Home/Hero'
import Academics from '../components/Home/Academics'
import Excelling from '../components/Home/Excelling'
import Extracaricular from '../components/Home/Extracaricular'
import Testimonials from '../components/Home/Testimonials'


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Academics/>
      <Excelling/>
      <Extracaricular/>
      <Testimonials/>
      
    </div>
  )
}

export default Home
