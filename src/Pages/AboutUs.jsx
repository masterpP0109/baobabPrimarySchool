import React from 'react' 
  import Navbar from '../components/Home/Navbar'
  import Ftvcards from '../components/AboutUs/Ftvcards'
import Facilities from '../components/AboutUs/Facilities'
  
 

const AboutUs = () => {
  return (
    
    <>
      
    <div className='bg-blue-700 h-[90vh] relative -z-0'>
    <Navbar/>
    <div className='flex flex-row container justify-between'>
    <div className='flex flex-col'>
      <h1 className='text-white text-6xl pl-[100px] mt-[80px] ml-16 font-[Galang]'>About Us</h1>
      <p className='text-white text-xl pt-[60px] ml-40 font-[Galang]tracking-wide-20 leading-loose'>Nurturing the development of the child ,enabling <br /> pupils to develop their talents in academics , <br />  sports ,and arts.</p>
      <button className="bg-white text-blue-500 ml-40 mt-[40px] w-[166px] h-[45px] rounded-full hover:bg-blue-200 transition duration-200">Apply Now</button>
      </div>
      <div>
        <img src="/images/Rectangle 52.png" alt="Child on Board" className='w-[493px] h-[506px] mt-[30px] absolute right-60 -z-10'/>
      </div>
      </div>
      <Ftvcards/>
    </div>
      <Facilities/>   


 
    </>
  )
}

export default AboutUs
