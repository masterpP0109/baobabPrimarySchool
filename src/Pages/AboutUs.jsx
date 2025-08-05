import React from 'react' 
import Navbar from '../components/Navbar'
import Ftvcards from '../components/AboutUs/Ftvcards'
import Facilities from '../components/AboutUs/Facilities'
import Mission from '../components/AboutUs/Mission'
import Teacher from '../components/AboutUs/Teacher'
import Testimonials from '../components/Home/Testimonials'
  
 

const AboutUs = () => {
  return (
    
    <>
      
    <div className='bg-[#184C77] h-[90vh] relative bottom-10'>
    <Navbar/>
    <div className='flex flex-row container justify-between '>
    <div className='flex flex-col'>
      <h1 className='text-white text-6xl pl-[100px] mt-[80px] ml-16 font-[Galang]'>About Us</h1>
      <p className='text-white text-2xl pt-[60px] ml-40 font-[Galang]tracking-wide-20 leading-loose'>Nurturing the development of the child ,enabling <br /> pupils to develop their talents in academics , <br />  sports ,and arts.</p>
      <button className="bg-white text-[#184C77] ml-40 mt-[40px] w-[166px] h-[45px] rounded-full hover:bg-blue-200 transition duration-200">Apply Now</button>
      </div>
      <div>
        <img src="/images/Rectangle52.png" alt="Child on Board" className='w-[493px] h-[506px] mt-[30px] absolute right-60 '/>
      </div>
      </div>
      <Ftvcards/>
    </div>  
    <Facilities/>
    <Mission/>
    <Teacher/>
    <Testimonials/>



 
    </>
  )
}

export default AboutUs





