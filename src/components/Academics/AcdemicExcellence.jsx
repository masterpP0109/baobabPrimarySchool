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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-around mt-[90px] gap-10">
      {/* Images Section */}
      <div className="relative flex flex-col gap-4 w-full max-w-xl">
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[370px] bg-center bg-cover bg-no-repeat rounded-[30px] bg-[url('/images/childOnBoard.png')]">
          <div className="absolute h-[120px] sm:h-[180px] md:h-[300px] w-[180px] sm:w-[250px] md:w-[390px] rounded-[20px] border-b-0 border-[7px] ml-[30px] sm:ml-[60px] md:ml-[110px] top-[60px] sm:top-[80px] md:top-[100px] bg-transparent"></div>
        </div>
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[370px] bg-center bg-cover bg-no-repeat rounded-[30px] bg-[url('/images/StudentsWalking.png')]">
          <div className="absolute h-[100px] sm:h-[150px] md:h-[280px] w-[180px] sm:w-[250px] md:w-[390px] rounded-[20px] border-t-0 border-[7px] ml-[30px] sm:ml-[60px] md:ml-[110px] top-[-10px] sm:top-[-10px] md:top-[-15px] bg-transparent"></div>
        </div>
        <div className="absolute flex flex-col bg-[#184C77] border-[10px] top-[180px] sm:top-[220px] md:top-[255px] ml-[180px] sm:ml-[250px] md:ml-[380px] items-center py-[20px] align-center rounded-[30px] w-[180px] sm:w-[250px] md:w-[390px] h-[120px] sm:h-[180px] md:h-[290px]">
          {[1, 2, 3].map((item) => (
            <h1 key={item} className="text-lg sm:text-2xl md:text-[40px] text-white font-bold">Our Values</h1>
          ))}
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col mt-[30px] sm:mt-[40px] md:mt-[60px] gap-6 w-full max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] tracking-wide-30 font-bold text-[#184C77]">
          Academic Excellence
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[19px] text-[#184C77] tracking-wide-20">
          Our students thrive in an environment that values<br />
          curiosity, encourages independent thinking , and <br />
          nurtures a love for learning.
        </p>
        <div className="flex flex-col gap-4">
          {[0, 1].map((cardIdx) => (
            <AnimatePresence mode="wait" key={cardIdx}>
              <motion.div
                className="flex flex-col bg-white rounded-[30px] p-4"
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ position: "relative" }}
              >
                <h1 className="text-lg sm:text-xl md:text-[22px] lg:text-[26px] tracking-wide-30 font-bold text-[#184C77] mb-2">
                  {excellenceData[cardIdx].heading}
                </h1>
                <div
                  className="text-sm sm:text-base md:text-lg lg:text-[19px] text-[#184C77] tracking-wide-20"
                  dangerouslySetInnerHTML={{ __html: excellenceData[cardIdx].paragraph }}
                />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mt-8 h-[50px] sm:h-[60px] md:h-[65px] border-[8px] rounded-[15px] bg-[#184C77] flex items-center justify-around">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-[25px] tracking-wide-20 font-bold text-white">
            Safe & Nurturing
          </h1>
        </div>
      </div>
    </div>
  )
}

export default AcdemicExcellence
