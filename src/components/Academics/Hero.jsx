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
    <div className="relative h-[800px] bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: "url('images/academicsbgimg.png')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-800 opacity-80 z-10 text-gray-300"></div>

      {/* Header + Hero Content */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        {/* Header */}
        <Navbar />

        {/* Hero Content Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center w-full gap-[60px] flex-grow pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 3, y: 0 }}
            transition={{ delay: 0.4, duration: 1.8 }}
            className="text-white flex flex-col text-center md:text-left max-w-4xl gap-[35px] mb-36 lg:mb-0 xl:ml-[-620px] w-full"
          >
            <h1 className="text-[28px] sm:text-[36px] xl:text-[60px] font-bold leading-none tracking-wide-50">
              Get to know how our<br />
              students are excelling
            </h1>
            <p className="mt-4 text-sm sm:text-lg md:text-xl xl:text-[21px] max-w-[800px] leading-none tracking-wide-20 w-full">
              Nurturing the development of the child, enabling <br />
              pupils to develop their talents in academics, <br />
              sports, and arts.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-[245px] h-[60px] mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#184C77] rounded-[60px]
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
