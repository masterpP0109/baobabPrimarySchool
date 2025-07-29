
import Navbar from '../Navbar';
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
            <section className="flex flex-col lg:flex-col items-center mt-[50px]  flex-grow">
             <div className="h-[730px]  w-[790px] bg-center bg-cover bg-no-repeat "
             style={{ backgroundImage: "url('images/curricularsBg.png')" }}>

             </div>
             <div className="w-[1250px] h-[210px] flex items-center px-[100px] py-[5px] justify-between mt-[-200px] bg-white rounded-[30px] ">
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
    
           
         
          </div>
        </div>
      );
    };


export default Hero
