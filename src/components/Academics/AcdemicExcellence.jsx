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
    <motion.div className="flex flex-col lg:flex-row px-[20px] xl:px-0 justify-around items-center  lg:items-start mt-[180px]"
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale: 1}}
    transition={{duration: 2}}>
      <div className="relative flex flex-col gap-[15px] ">
        <div className="relative h-[251px] md:h-[280px] lg:h-[300px] xl:h-[370px] align-center justify-center w-[360px] md:w-[450px] lg:w-[510px] xl:w-[620px] bg-center bg-cover bg-no-repeat  " 
        style={{ backgroundImage: "url('images/childOnBoard.png')"}}>
        <div className="absolute md:h-[200px] lg:h-[280px] md:w-[300px] xl:w-[390px] 
        ml-[35px] xs:ml-[45px] sm:ml-[55px] md:ml-[60px] lg:ml-[90px] xl:ml-[110px] rounded-[20px] border-b-0 border-[7px]  top-[100px] bg-transparent"></div>
        </div>
         <div className="relative h-[251px] md:h-[280px] lg:h-[300px] xl:h-[370px] align-center justify-center w-[360px] md:w-[450px] lg:w-[510px] xl:w-[620px] bg-center bg-cover bg-no-repeat  "
         style={{ backgroundImage: "url('images/StudentsWalking.png')"}}>
        <div className="absolute md:h-[200px] lg:h-[280px] md:w-[300px] lg:w-[320px] xl:w-[390px] 
        ml-[35px] xs:ml-[45px] sm:ml-[55px] md:ml-[60px] lg:ml-[90px] xl:ml-[110px] rounded-[20px] border-t-0 border-[7px]  top-[-15px] bg-transparent"></div>
        </div>
        <div className="absolute flex flex-col bg-[#184C77] border-[10px] top-[145px] xs:top-[150px] sm:top-[190px] md:top-[180px] lg:top-[200px] xl:top-[255px] ml-[100px] xs:ml-[150px] sm:ml-[200px] md:ml-[250px] lg:ml-[300px] xl:ml-[380px] items-center 
        py-[20px] align-center rounded-[30px] w-[200px] xs:w-[290px] sm:w-[250px] md:w-[300px] lg:w-[300px] xl:w-[390px] sm:h-[150px] md:h-[250px] lg:h-[220px] xl:h-[290px] ">
          {[1,2,3].map((item)=>(
              <h1 key={item} className="text-[40px] text-white font-bold">Our Values</h1>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:ml-[90px] xl:ml-0   lg:mt-[5px]  xl:mt-[60px] gap-[20px] xs:gap-[25px] sm:gap-[30px] md:gap-[35px] lg:gap-[20px] xl:gap-[35px]">
        <h1 className=" md:text-[26px] lg:text-[30px]  xl:text-[45px] tracking-wide-30 font-bold text-[#184C77] ">Academic Excellence</h1>
        <p className=" text-[14px] lg:text-[17px] xl:text-[19px] text-[#184C77] xl:tracking-wide-20  ">Our students thrive in an environment that values<br/>
           curiosity, encourages independent thinking , and <br/>
           nurtures a love for learning.</p>
           <div className="flex flex-col gap-[20px]">
           {[0, 1].map((cardIdx) => {
                       
                       return (
                         <AnimatePresence mode="wait" >
                           <motion.div
                             key={cardIdx}
                             className="flex flex-col lg:w-[400px] xl:w-auto h-auto py-5 px-8  border-2 border-[#000]   bg-white rounded-[30px] "
                             
                             initial="initial"
                             animate="animate"  
                             exit="exit"
                             whileHover={{
                               scale: 1.04,
                             
                             }}
                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
                             style={{ position: "relative" }}
                           >
                           
                           
                               <h1 className="text-[22px]   text-[#184C77]  md:text-[18px] lg:text-[22px] xl:text-[24px] sm:text-[26px] tracking-wide-30  mb-2">{excellenceData[cardIdx].heading}</h1>
                               <div
                                 className="text-[19px] text-[#184C77] tracking-wide-20 sm:text-[18px]  md:text-[19px]  text-wrap xl:text-nowrap flex-shrink xl:flex-grow"
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
