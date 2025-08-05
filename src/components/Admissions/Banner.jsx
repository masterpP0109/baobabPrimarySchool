import React from 'react'
import Navbar from '../Navbar'

const Banner = () => {
  return (
    <div className='h-[95vh] relative bottom-10' style={{backgroundImage: "url('./images/admissionimg.png')", backgroundSize: 'cover'}}>
        <Navbar/>
        <h1 className='text-white text-6xl pl-[100px] mt-[150px] ml-16 font-[Galang]'>Start Your Journey Here <br /> Admissions at Baobab <br /> Primary School </h1>
        <p className='text-white text-2xl pt-[10px] ml-40 font-[Galang]tracking-wide-20 leading-loose'>“Step‑by‑step application guidance for domestic & <br /> international students.”</p>
        <button  className="bg-white text-[#184C77] ml-40 mt-[40px] w-[166px] h-[45px] rounded-full hover:bg-blue-200 transition duration-200">Apply Now</button>

        <div className='bg-transparent border-4 border-[#184C77] w-[26rem] h-40 ml-[63rem] rounded-3xl relative'>
            <div className='bg-[#184C77] w-[26rem] h-40 rounded-3xl mt-10 ml-10 relative'>
            </div>
        </div>
        <img src="./images/person.png" alt="" className='w-[550px] h-[550px] absolute -bottom-[90px] left-[60rem]'/>
    </div>
  )
}

export default Banner
