import { AnimatePresence, motion } from 'framer-motion';
const excellenceData = [
  {
    heading: "1.Holistic Development",
    paragraph:
      "Our students thrive in an environment that values <br/>curiosity,encourages independent thinking , and<br/> nurtures a love for learning.",
   
  },
  {
    heading: "2.Values And Discipline",
    paragraph:
      "Our students thrive in an environment that values <br/>curiosity,encourages independent thinking , and<br/> nurtures a love for learning.",
    
  },
  
  
];

const AcdemicExcellence = () => {
  return (
    <motion.div className="flex justify-around mt-[180px]"
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale: 1}}
    transition={{duration: 2}}>
      <div className="relative flex flex-col gap-[15px] ">
        <div className="relative h-[370px] align-center justify-center w-[620px] bg-center bg-cover bg-no-repeat  " 
        style={{ backgroundImage: "url('images/childOnBoard.png')"}}>
        <div className="absolute h-[300px] w-[390px] rounded-[20px] border-b-0 border-[7px] ml-[110px] top-[100px] bg-transparent"></div>
        </div>
         <div className="relative h-[370px] align-center justify-center w-[620px] bg-center bg-cover bg-no-repeat  "
         style={{ backgroundImage: "url('images/StudentsWalking.png')"}}>
        <div className="absolute h-[280px] w-[390px] rounded-[20px] border-t-0 border-[7px] ml-[110px] top-[-15px] bg-transparent"></div>
        </div>
        <div className="absolute flex flex-col bg-[#184C77] border-[10px] top-[255px] ml-[380px] items-center 
        py-[20px] align-center rounded-[30px] w-[390px] h-[290px] ">
          {[1,2,3].map((item)=>(
              <h1 key={item} className="text-[40px] text-white font-bold">Our Values</h1>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-[60px] gap-[35px]">
        <h1 className="text-[45px] tracking-wide-30 font-bold text-[#184C77] ">Academic Excellence</h1>
        <p className="text-[19px] text-[#184C77] tracking-wide-20  ">Our students thrive in an environment that values<br/>
           curiosity, encourages independent thinking , and <br/>
           nurtures a love for learning.</p>
           <div className="flex flex-col gap-[20px]">
           {[0, 1].map((cardIdx) => {
                       
                       return (
                         <AnimatePresence mode="wait" >
                           <motion.div
                             key={cardIdx}
                             className="flex flex-col  bg-white rounded-[30px] "
                             
                             initial="initial"
                             animate="animate"
                             exit="exit"
                             whileHover={{
                               scale: 1.04,
                             
                             }}
                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
                             style={{ position: "relative" }}
                           >
                           
                           
                               <h1 className="text-[22px] sm:text-[26px] tracking-wide-30  text-[#184C77] md:text-[24px]  mb-2">{excellenceData[cardIdx].heading}</h1>
                               <div
                                 className="text-[19px] text-[#184C77] tracking-wide-20 sm:text-[18px] md:text-[19px]"
                                 dangerouslySetInnerHTML={{ __html: excellenceData[cardIdx].paragraph }}
                               />
                             
                           </motion.div>
                         </AnimatePresence>
                       );
                     })}
           </div>
           <div className="w-[530px] mt-[50px] h-[65px] border-[8px] rounded-[15px] bg-[#184C77] flex items-center justify-around ">
            <div>

            </div>
            <h1 className="text-[25px] tracking-wide-20 font-bold text-white ">Safe & Nurturing</h1>

           </div>
      </div>
    </motion.div>
  )
}

export default AcdemicExcellence
