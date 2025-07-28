import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  CreditCardIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className="relative h-[800px] w-full">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Header + Hero Content */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        {/* Hero Content Section */}
        <section className="container mx-auto px-4 sm:px-8 xl:px-[180px] flex flex-col lg:flex-row items-center justify-center gap-20 flex-grow pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="text-white text-center md:text-left w-full max-w-2xl mb-10 lg:mb-0"
          >
            <h1 className="text-[28px] sm:text-[36px] xl:text-[64px] font-normal leading-none tracking-wide-50 font-Galang">
              Baobab Primary School
            </h1>
            <p className="mt-4 text-sm sm:text-lg xl:text-[20px] font-normal leading-none tracking-wide-20 w-full max-w-lg mx-auto">
              Nurturing the development of the child, enabling <br />
              pupils to develop their talents in academics, <br />
              sports, and arts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="flex flex-col items-center w-full max-w-2xl"
          >
            <div className="h-[320px] w-full max-w-lg bg-center bg-cover bg-no-repeat rounded-[30px] mb-[-80px] bg-[url('images/curricularsBg.png')]"></div>
            <div className="w-full max-w-lg flex flex-col gap-4 bg-white rounded-[30px] p-6 shadow-md">
              <h5 className="text-[25px] font-semibold">Extracurricullars</h5>
              <h1 className="text-[45px] text-[#184C77] leading-tight">
                Explore Our
                <br />
                Extracurricular
              </h1>
              <p className="text-[18px] text-gray-700">
                Visit our classrooms, library, playground, and activity
                <br />
                rooms to see where learning and fun happen every
                <br />
                day
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[245px] h-[75px] top-9 p-5 mt-4 text-[25px] rounded-[60px] bg-[#184C77] hover:bg-slate-500 transition-all duration-300 tracking-wide-30"
              >
                Apply Now
              </motion.button>
            </div>
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
