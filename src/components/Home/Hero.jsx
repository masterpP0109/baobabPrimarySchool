import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  CreditCardIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";




//Custo Cursor

const Hero = () => {
  



  return (
    <div className="relative xl:h-[95vh] max-w-screen">
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
      <div className="absolute inset-0 bg-black opacity-70 z-10 text-gray-300"></div>

      {/* Header + Hero Content */}
      <div className="relative z-20 flex  flex-col h-full xs:max-w-screen justify-between">
        {/* Header */}
      <Navbar/>

        {/* Hero Content Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between flex-grow py-10">
          <motion.div
            initial={{ opacity: 0, x: -240 }}
            animate={{ opacity: 3, x: 0 }}
            transition={{ delay: 0.4, duration: 1.8 }}
            className="text-white text-center md:text-left w-full max-w-screen lg:max-w-2xl"
          >
            <h1 className="text-[28px] xs:text-[2rem] w-full sm:text-[36px] xl:text-[3rem] font-normal leading-none tracking-wide-50">
              Baobab Primary School
            </h1>
            <motion.p className="mt-4 text-sm sm:text-lg text-nowrap w-[80vw] xs:text-[1rem] 
            xl:text-[1.5rem] font-normal xl:leading-[3rem] xl:tracking-wide-20 "
            initial={{ filter: "blur(10px)", opacity: 0, y: 20}}
            animate={{ filter: "blur(0)", opacity: 1, y:0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            >
              Nurturing the development of the child, enabling <br />
              pupils to develop their talents in academics, <br />
              sports, and arts.
            </motion.p>

            <Link to="/Admissions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[200px] h-[50px] xs:pb-[3rem]  p-5 mt-4 xl:text-[1.3rem] rounded-[60px] bg-[#184C77] hover:bg-slate-500
              transition-all duration-300 tracking-wide-30"
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* Blue Rounded Bottom */}
        <section className="flex justify-center mb-[-2%] z-30">
          <div className="container relative mx-auto px-4 overflow-hidden sm:px-6 lg:px-8 h-[110px] w-full sm:max-w-[80vw] md:max-w-[73vw] bg-[#184C77] rounded-full">
            {/* Shine effect behind icons */}
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-white opacity-20 blur-xl  z-0" />

            {/* Icon container on top */}
            <div className="flex items-center relative z-10 w-full h-full justify-between px-4 sm:px-10 md:px-20">
              <div className="flex items-center animate-pulse  cursor-pointer gap-4">
                <div className="w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] rounded-full border border-white flex items-center justify-center">
                  <AcademicCapIcon className="w-7 sm:w-8 md:w-9 h-7 sm:h-8 md:h-9 text-white border-black rounded-full" />
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    Enroll With Us
                  </p>
                </div>
              </div>

              <div className="flex items-center animate-pulse delay-200 cursor-pointer gap-4">
                <div className="w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] rounded-full border border-white flex items-center justify-center">
                  <CreditCardIcon className="w-7 sm:w-8 md:w-9 h-7 sm:h-8 md:h-9 text-white border-black rounded-full" />
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    Pay Online
                  </p>
                </div>
              </div>

              <div className="flex items-center animate-pulse delay-400 cursor-pointer gap-4">
                <div className="w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] rounded-full border border-white flex items-center justify-center">
                  <PhoneIcon className="w-7 sm:w-8 md:w-9 h-7 sm:h-8 md:h-9 text-white border-black rounded-full" />
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    Contact Us
                  </p>
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
