import React from "react";
import { motion } from "framer-motion";
import { Home, Menu, User } from "lucide-react";
import {
  AcademicCapIcon,
  CreditCardIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";


import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative h-[800px] ">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10 text-gray-300 "></div>

      {/* Header + Hero Content */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        {/* Header */}
       <Navbar/>

        {/* Hero Content Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 xl:px-[180px] gap-20 flex-grow pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 3, y: 0 }}
            transition={{ delay: 0.4, duration: 1.8 }}
            className="text-white text-center md:text-left max-w-4xl gap-20 mb-36 lg:mb-0 xl:ml-[-620px] w-[100%]"
          >
            <h1 className="text-[28px] sm:text-[36px] xl:text-[64px] font-normal leading-none tracking-wide-50 ">
              Baobab Primary School
            </h1>
            <p className="mt-4 text-sm sm:text-lg max-w-[600px] xl:text-[20px]  font-normal leading-none tracking-wide-20 w-[100%]">
              Nurturing the development of the child ,enabling <br />
              pupils to develop their talents in academics , <br />
              sports ,and arts.
            </p>

            <motion.button 
             whileHover={{ scale: 1.1 }} 
             whileTap={{ scale: 0.9}}
            className="w-[245px] h-[75px] top-9 p-5 mt-4 text-[25px] rounded-[60px] bg-[#184C77;] hover:bg-slate-500
            transition-all duration-300 tracking-wide-30">
              Apply Now
            </motion.button>
          </motion.div>
        </section>

        {/* Blue Rounded Bottom */}
        <section className="flex justify-center mb-[-2%] z-30">
          <div className="h-[120px] flex items-center px-10 w-[99%] max-w-[1550px] bg-[#184C77] rounded-full">
            <div className="flex items-center  w-[100%] justify-between px-20">
              <div className="flex items-center animate-bounce cursor-pointer gap-4">
                <div className="w-[70px] h-[70px] rounded-full border border-white flex items-center justify-center ">
                  <AcademicCapIcon className="w-9 h-9 text-white border-black rounded-full  " /> 
                </div>
                <div>
                  
                  <p className="text-white text-[18px]">Enroll With Us</p>
                </div>
              </div>

              <div className="flex items-center animate-bounce cursor-pointer gap-4">
                <div className="w-[70px] h-[70px] rounded-full border border-white flex items-center justify-center ">
                  <CreditCardIcon className="w-9 h-9 text-white border-black rounded-full  " />
                </div>
                <div>
                  {" "}
                  <p className="text-white text-[18px]">Pay Online</p>
                </div>
              </div>

              <div className="flex items-center animate-bounce cursor-pointer   gap-4">
                <div className="w-[70px] h-[70px] rounded-full border border-white flex items-center justify-center hover:shadow-[50] ">
                  <PhoneIcon className="w-9 h-9 text-white border-black  rounded-full   " />
                </div>
                <div>
                  {" "}
                  <p className="text-white text-[18px]">Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
