import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, User } from "lucide-react";

const ExploreExtra = () => {
  return (
    <motion.div className="flex justify-evenly h-[850px] w-full items-center"
     initial={{opacity: 0, translateX: "100%"}}
    whileInView={{opacity:1, translateX: 0}}
    transition={{duration: 2}}>
        <div className="flex flex-col h-[600px]">
            <section className="flex w-[850px] rounded-[15px] items-center bg-[#184C77] py-[20px] px-[20px] gap-[35px] ">
                <div className="w-[380px] h-[420px] rounded-[15px] bg-center bg-cover bg-no-repeat  bg-[url('public/images/boyOnLapT.png')]"></div>
                <div className="flex flex-col ">
                    <h1 className="text-white text-[55px]">Baobab Primary</h1>
                    <p className="text-white text-[21px] w-full ">Visit our classrooms, library, <br/>
                        playground and activity rooms to <br/>
                        see where learning and fun happen </p>
                </div>
            </section>
             <section className="flex flex-col md:flex-row  border-b-8 items-center bg-white box-shadow-2xl px-4 sm:px-6 
             lg:px-8 w-full  md:max-w-[890px] rounded-[20px] h-auto md:h-[150px] gap-6 md:gap-[50px] shadow-[0_6px_4px_rgba(0,0,0,0.3)]">
                      {/* Stat 1 */}
                      <div className="flex items-center w-full gap-4 md:gap-[30px]">
                        <div className="flex w-full flex-col gap-1 items-center">
                        
                          <h4 className="text-2xl sm:text-3xl md:text-[40px] font-[500] text-[#184C77] leading-none tracking-wide-20">
                            50K+
                          </h4>
                          <p className="text-base sm:text-lg md:text-[21px] text-[#184C77]">Excelling Students</p>
                        </div>
                        <div className="hidden md:block w-[15px] h-[105px] border-2 border-[#184C77] rounded-full"></div>
                      </div>
                      {/* Stat 2 */}
                      <div className="flex items-center w-full justify-between gap-4 md:gap-[50px]">
                        <div className="flex flex-col gap-1 items-center">
                        
                         <h4 className="text-2xl sm:text-3xl md:text-[40px] font-[500] text-[#184C77] leading-none tracking-wide-20">
                            5K+
                          </h4>
                          <p className="text-base sm:text-lg md:text-[21px] text-[#184C77]">Excelling Students</p>
                        </div>
                        <div className="hidden md:block w-[15px] h-[105px] border-2 border-[#184C77] rounded-full"></div>
                      </div>
                      {/* Stat 3 */}
                      <div className="flex items-center w-full justify-around gap-4 md:gap-[50px]">
                        <div className="flex flex-col gap-1 items-center">
                        
                          <h4 className="text-2xl sm:text-3xl md:text-[40px] font-[500] text-[#184C77] leading-none tracking-wide-20">
                            3K+
                          </h4>
                          <p className="text-base sm:text-lg md:text-[21px] text-[#184C77]">Excelling Students</p>
                        </div>
                        
                      </div>
                    
                    </section>
        </div>
        {/*RIGHT SECTION*/}
        <div>
          <h1 className="text-black text-[65px]  tracking-wide-30">
            Explore Our <br/>
            Extracurricular
          </h1>
          <p className="text-black text-[20px] ">
            Visit our classrooms, library, playground, and activity rooms <br/>
            learning and fun happen every day
          </p>
          <div className="flex w-[550px] justify-center gap-[160px] px-[50px] items-center  rounded-[15px]
          relative shadow-[0_6px_4px_rgba(0,0,0,0.3)] ">
            <div className="w-[110px] h-[80px] bg-center bg-cover bg-no-repeat flex items-center justify-center  ">
              <img src="public/images/blackOpenB.png" className="w-[60px] h-[60px]" alt="" />
            </div>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mt-8 h-[50px] sm:h-[60px] md:h-[65px]  bg-white flex flex-col items-start justify-around">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-[25px] tracking-wide-20 font-bold text-black">
            Extracarriculars
          </h1>
          <p>
             Visit our classrooms
          </p>
        </div>
          </div>
          <p>
            Visit our classrooms, library, playground, and activity rooms 
          </p>
           <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-full max-w-[225px] h-[50px] md:h-[60px] mt-4 p-3 md:p-5 flex items-center justify-center text-sm sm:text-base md:text-[20px] lg:text-[25px] hover:bg-slate-500
                  rounded-[35px] bg-[#184C77]  transition-all duration-300 tracking-wide-20 text-white"
                  >
                    Apply Now
                  </motion.button>
        </div>
    </motion.div>
  )
}

export default ExploreExtra