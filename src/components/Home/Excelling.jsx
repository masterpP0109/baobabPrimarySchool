import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, User } from "lucide-react";
const Excelling = () => {
  return (
    <motion.div
      className=" mx-auto px-4 sm:px-6 lg:px-8 relative mt-[200px] bg-black w-full flex flex-col items-center h-[510px]"
      initial={{ opacity: 0, y: 380 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <section className="flex flex-col gap-10 justify-around w-full">
        {/* Responsive stats bar */}
        <section className="flex flex-col md:flex-row mt-[-60px] md:mt-[-100px] items-center bg-[#184C77] px-4 sm:px-6 lg:px-8 w-full  md:max-w-[1650px] rounded-[20px] h-auto md:h-[200px] gap-6 md:gap-[50px] mx-auto">
          {/* Stat 1 */}
          <div className="flex items-center w-full gap-4 md:gap-[30px]">
            <div className="flex w-full flex-col gap-1 items-start">
              <User className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
              <h4 className="text-2xl sm:text-3xl md:text-[40px] font-[500] text-white leading-none tracking-wide-20">
                50K+
              </h4>
              <p className="text-base sm:text-lg md:text-[21px] text-white">Excelling Students</p>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>
          {/* Stat 2 */}
          <div className="flex items-center w-full justify-between gap-4 md:gap-[50px]">
            <div className="flex flex-col gap-1 items-start">
              <User className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
              <h4 className="text-2xl sm:text-3xl md:text-[40px] font-[500] text-white leading-none tracking-wide-20">
                5K+
              </h4>
              <p className="text-base sm:text-lg md:text-[21px] text-white">Excelling Students</p>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>
          {/* Stat 3 */}
          <div className="flex items-center w-full justify-around gap-4 md:gap-[50px]">
            <div className="flex flex-col gap-1 items-start">
              <User className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
              <h4 className="text-2xl sm:text-3xl md:text-[40px] font-[500] text-white leading-none tracking-wide-20">
                3K+
              </h4>
              <p className="text-base sm:text-lg md:text-[21px] text-white">Excelling Students</p>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>
          {/* Stat 4 */}
          <div className="flex flex-col gap-1 w-full items-start">
            <User className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
            <h4 className="text-2xl sm:text-3xl md:text-[40px] font-[500] text-white leading-none tracking-wide-20">
              85K+
            </h4>
            <p className="text-base sm:text-lg md:text-[21px] text-white">Excelling Students</p>
          </div>
        </section>

        {/* Heading and button */}
        <section className="flex flex-col sm:flex-row justify-around items-center  mt-6 gap-[35px]">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg md:text-[18px] text-white">Decades of Dedication</p>
            <h1 className="text-2xl sm:text-4xl md:text-[55px] text-white tracking-wide-30">
              Growing Brighter with Every Child
            </h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full max-w-[180px] h-[50px] md:h-[60px] px-6 md:px-8 mt-4 sm:mt-[50px] flex text-center items-center text-base sm:text-lg md:text-[18px] hover:bg-slate-500
       rounded-[15px] bg-[#184C77] text-white  transition-all duration-300 tracking-wide-20"
          >
            View More
          </motion.button>
        </section>

        {/* Responsive grid for journey cards */}
        <section className="flex justify-around gap-4  mt-6">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex gap-4 items-center">
              <div
                className="relative h-[80px] sm:h-[100px] w-[80px] sm:w-[100px] rounded-full border-4 border-[#184C77] bg-transparent"
              >
                <div className="absolute h-[40px] sm:h-[50px] w-[81px] sm:w-[101px] -left-[4px] -top-[2px] inset-0
                  border-t-full border-b-0 rounded-t-full border-[7px] border-[#00000] bg-transparent animate-spin-slow origin-bottom-center"
                ></div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-[25px] text-white">Our Journey Forward</h1>
                <p className="text-sm sm:text-base md:text-[18px] text-white">
                  Together we grow, learn, and build <br />
                  bright futures.
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </motion.div>
  );
};

export default Excelling;

{
  /*
  import Modal from "./Modal";
  const Excelling = () => {
  const [modalOpen, setModalOpen] = useState(false);
  

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return <div>
    <motion.button
    whileHover={{ scale: 1.1 }} 
    whileTap={{ scale: 0.9}}
    className="relative save-button w-[245px] h-[75px] top-9  p-5 mt-4 text-[25px] rounded-[60px] bg-[#184C77;] hover:bg-slate-500
            transition-all duration-300 tracking-wide-30" 
    onClick={() => (modalOpen ? close() : open())}>
      Click Me

    </motion.button>
    <AnimatePresence
    
      initial={false}




      exitBeforeEnter={true}
      onExitComplete={() => null}>
      
     {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
    </AnimatePresence>
   
  </div>;
};

export default Excelling; */
}
