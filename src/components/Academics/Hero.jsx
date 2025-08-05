import React from "react";
import { motion } from "framer-motion";
import { Home, Menu, User } from "lucide-react";
import {
  AcademicCapIcon,
  CreditCardIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div
      className="relative h-[50vh] md:h-[47vh] lg:h-[70vh] max-w-screen bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: "url('images/academicsbgimg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-800 opacity-80 z-10 text-gray-300"></div>

      {/* Header + Hero Content */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        {/* Header */}
        <Navbar />

        {/* Hero Content Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row 
        items-center justify-center w-full gap-[60px] flex-grow pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 3, y: 0 }}
            transition={{ delay: 0.4, duration: 1.8 }}
            className="text-white flex flex-col text-center
             md:text-left items-center md:items-start max-w-4xl gap-[35px] mb-36
             lg:mb-0 xl:ml-[-620px] w-full"
          >
            <h1 className="text-[28px] sm:text-[36px] xl:text-[60px] font-bold leading-none tracking-wide-50">
              Get to know how our
              <br />
              students are excelling
            </h1>
            <p
              className=" text-sm sm:text-lg text-nowrap w-[80vw] xs:text-[1rem] 
            xl:text-[1.5rem] font-normal xl:leading-[3rem] xl:tracking-wide-20 transition-all 
            duration-300 mt-4   md:text-xl  max-w-[800px] 
            leading-none  "
            >
              Nurturing the development of the child, enabling <br />
              pupils to develop their talents in academics, <br />
              sports, and arts.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-[150px] md:w-[200px] h-[20px] md:h-[70px] xs:pb-[1.7rem]  
                text-center p-2 md:p-5 mt-4 text-[0.5rem] xs:text-[0.7rem] sm:text-[0.8rem]
                md:text-[0.9rem] lg:text-[1rem] xl:text-[1.3rem] 
                  tracking-wide-3
                text-base sm:text-lg md:text-xl 
              lg:text-2xl text-[#184C77] rounded-[60px]
                bg-white hover:bg-slate-500 hover:text-white
                transition-all duration-300 tracking-wide-30"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
