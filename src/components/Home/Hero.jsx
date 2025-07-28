import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon, CreditCardIcon, PhoneIcon } from "@heroicons/react/24/outline";


const Hero = ({ isHovering3D }) => {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero.webm"
        autoPlay muted loop playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10 text-gray-300"></div>

      {/* Header + Hero Content */}
      <div className="relative z-20 flex flex-col h-screen justify-between">
        {/* Header */}
      

        {/* Hero Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between flex-grow py-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.8 }}
            className="text-white text-center md:text-left w-full max-w-xl lg:max-w-2xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-wide">
              Baobab Primary School
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-snug max-w-prose">
              Nurturing the development of the child, enabling <br />
              pupils to develop their talents in academics, <br />
              sports, and arts.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-4 text-xl rounded-full bg-[#184C77] hover:bg-slate-500 transition-colors duration-300"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </section>

        {/* Blue Rounded Bottom */}
        <section className="flex justify-center mb-[-2%] z-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl bg-[#184C77] rounded-full h-32 relative overflow-hidden">
            {/* Shine effect */}
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-white bg-opacity-20 blur-xl animate-shine" />

            {/* Icons Row */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between h-full px-6 sm:px-12 md:px-20 gap-4">
              {[
                { Icon: AcademicCapIcon, text: "Enroll With Us" },
                { Icon: CreditCardIcon, text: "Pay Online" },
                { Icon: PhoneIcon, text: "Contact Us" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 animate-pulse cursor-pointer"
                >
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full border border-white flex items-center justify-center">
                    <item.Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
