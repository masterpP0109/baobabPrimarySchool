import { motion } from "framer-motion"
const Explore = () => {
  return (
    <motion.div className="flex flex-col items-center"
    initial={{opacity: 0, rotateX: "90deg"}}
    whileInView={{opacity:1, rotateX: 0}}
    transition={{duration: 2}}>
     <div className=" flex w-[1700px] rounded-[45px] h-[680px]  gap-[10px] px-[90px] mt-[180px] align-center justify-evenly items-center bg-[#184C77] ">
          <div className=" flex flex-col gap-[40px] ">
            <h1 className="text-[65px] text-white  tracking-wide-30  leading-tight ">Explore Our <br/> Extracurricular <br/>With Our Students</h1>
            <p className="text-[21px] text-white mt-[-20px]">
               Visit our classrooms, library, playground, and activity <br/>
              rooms to see where learning and fun happen every <br/>
               day .</p>
    
            <motion.button
              whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9}}
                className="w-[210px] h-[60px] top-[3px] p-5 pb-[40px] text-[21px] text-[#184C77] rounded-[40px]
                 bg-white hover:bg-slate-500 hover:text-white
                transition-all duration-300 tracking-wide-20">
              Apply Now
            </motion.button>
          </div>
          <div className="z-50 h-[820px] align-center justify-center mb-[-10px] w-[710px] rounded-[30px] 
           bg-center bg-cover bg-no-repeat "
           style={{ backgroundImage: "url('images/replacew.webp')" }}>
    
          </div>
        </div>
        </motion.div>
  )
}

export default Explore