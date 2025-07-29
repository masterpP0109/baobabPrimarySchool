import React from 'react' 
  
  import Ftvcards from '../components/AboutUs/Ftvcards'
  
 

const AboutUs = () => {
  return (
    
    <>
      
    <div className='bg-blue-700 h-[90vh] '>
   
    <div className='flex flex-row container justify-between '>
    <div className='flex flex-col'>
      <h1 className='text-white text-7xl pl-[100px] mt-[120px] font-Galang'>About Us</h1>
      <p className='text-white text-xl pt-[60px] pl-[100px]  font-Galang'>Nurturing the development of the child ,enabling <br /> pupils to develop their talents in academics , <br />  sports ,and arts.</p>
      <button className="bg-white text-blue-500 ml-[98px] mt-[40px] w-[166px] h-[45px] rounded-full hover:bg-blue-200 transition duration-200">Apply Now</button>
      </div>
      <div>
        <img src="/images/Rectangle 52.png" alt="Child on Board" className='w-[500px] h-[500px] mt-[30px] ml-[30px]' />
      </div>
      </div>
         <div>
      <Ftvcards/>
      <Facilities/>
    </div>
    </div>


    <div>
      <h1 className='text-7xl text-black pl-[100px] mt-[200px] font-Galang'>Our Facilities</h1>
    </div>

 
    </>
  )
}

export default AboutUs
