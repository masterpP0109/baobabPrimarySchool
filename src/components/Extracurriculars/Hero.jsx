
import Navbar from '../Home/Navbar';
import { motion } from "framer-motion";
import { Home, Menu, User } from "lucide-react";
import {
  AcademicCapIcon,
  CreditCardIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
     <div className="relative w-full h-[970px] "  style={{ backgroundImage: "url('images/excurrbg.png')" }}>
        
        
    
          {/* Dark Overlay */}
         {/** */} <div className="absolute inset-0 bg-[#184C77] opacity-60 z-10 text-gray-300 "></div>
    
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
                <h1 className="text-[28px] sm:text-[36px] xl:text-[64px] font-normal leading-none tracking-wide-50 font-Galang">
                  Baobab Primary School
                </h1>
                <p className="mt-4 text-sm sm:text-lg max-w-[600px] xl:text-[20px]  font-normal leading-none tracking-wide-20 w-[100%]">
                  Nurturing the development of the child ,enabling <br />
                  pupils to develop their talents in academics , <br />
                  sports ,and arts.
               </p>
            <section className="flex flex-col lg:flex-col items-center mt-[50px]  flex-grow">
             <div className="h-[780px]  w-[820px] bg-center bg-cover bg-no-repeat bg-[url('images/curricularsBg.png')]">

             </div>
             <div className="w-[1290px] h-[200px] flex items-center px-[100px] py-[3px] justify-between mt-[-200px] bg-white rounded-[30px] ">
              <div className="flex flex-col gap-[2px] ">
                <h5 className="text-[25px] ">Extracurricullars</h5>
                 <h1 className="text-[45px] text-[#184C77] leading-tight ">Explore Our<br/>
                                     Extracurricular</h1>
              </div>

              <div className="flex flex-col gap-[10px] ">
                <p className="text-[18px]  ">
                  Visit our classrooms, library, playground, and activity <br/>
                  rooms to see where learning and fun happen every <br/>
                  day


                </p>
                
                <motion.button 
                             whileHover={{ scale: 1.1 }} 
                             whileTap={{ scale: 0.9}}
                            className="w-[180px] h-[50px] top-[3px] p-5 pb-[40px] text-[18px] text-white rounded-[20px]
                             bg-[#184C77] hover:bg-white hover:text-[#184C77]
                            transition-all duration-300 tracking-wide-30">
                              Apply Now
              </motion.button>

              </div>
               
             </div>
            </section>
    
           
         
          </motion.div>
        </div>
      );
    };


export default Hero
