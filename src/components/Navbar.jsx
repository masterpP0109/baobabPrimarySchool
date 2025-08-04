import { Link } from "react-router-dom";
import React from 'react'
import { HiMenu } from "react-icons/hi"
import { MdMenu } from "react-icons/md"



const Navbar = () => {
    const toggleMobileMenu = () =>{
        const mobileMenu = document.getElementById("mobileMenu");

        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden');
        }else {
        mobileMenu.classList.add('hidden')
       }
    }
  
  return (
    <div className="xs:mt-[15px] sm:mt-[20px] md:mt-[30px] lg:mt-[35px]  xl:mt-[40px] ">
      <header className="flex flex-wrap xl:gap-[40px] bg-transparent  sm:px-6 xl:px-[140px]  py-1 px-[30px]  justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff]">
        <img
          src="/images/logoBlue.png"
          alt="LOGO"
          className="w-[80px] sm:w-[100px]"
        />
        
        <ul className="hidden md:flex gap-4 sm:gap-6 xl:gap-[50px] items-center text-white text-sm sm:text-base lg:text-xl font-normal leading-none tracking-wide-20">
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Admissions">Admissions</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Academics">Academics</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Extracurriculars">Extracurricular</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            News
          </li>
        </ul>

      
      {/**Mobile menu */}
            <button onClick={toggleMobileMenu} className="text-3xl ml-[6em] p-2 md:hidden">
               <HiMenu className="text-2xl cursor-pointer text-[#184C77] "/>
            </button>
   
      
    
           {/*mobile menu - hidden by default */}
            <div id="mobileMenu" className=" hidden   fixed top-[0px] right-0 left-0 bg-black opacity-95 p-5 md:hidden rounded-b-2xl transition-all duration-300">
       <ul className=" flex flex-col  align-center gap-4 sm:gap-6 xl:gap-[50px] items-center text-white text-sm sm:text-base lg:text-xl font-normal leading-none tracking-wide-20">
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Admissions">Admissions</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Academics">Academics</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Extracurriculars">Extracurricular</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            News
          </li>
        </ul>

      <button onClick={toggleMobileMenu} className="text-3xl  mt-[-160px] left-0 p-2 md:hidden">
               <MdMenu className="text-2xl cursor-pointer text-white "/>
            </button>   
    
            </div>

        

        <input
          type="text"
          placeholder="Search"
          className="hidden md:block px-3 py-1.5 text-sm xl:w-[100px] text-black placeholder:text-white rounded-full border border-none bg-gray-200 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div>
        
        </div>
      </header>
    </div>
  );
};

export default Navbar;
