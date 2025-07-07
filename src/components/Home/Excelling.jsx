import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, User } from "lucide-react";
const Excelling = () => {
  return (
    <motion.div className="relative mt-[200px] bg-black w-full h-[470px] flex flex-col items-center "
     initial={{opacity:0, y:380}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.1, ease:"easeInOut"}}
      viewport={{once:true, amount: 0.2}}>
      <section className=" flex flex-col gap-10 justify-around  ">
        <section className="flex mt-[-100px]  items-center bg-[#184C77] px-[115px] py-[70px] w-[1550px] rounded-[20px] h-[200px] gap-[50px]">
          <div className="flex items-center  w-full  gap-[30px]">
            <div className="flex w-full flex-col gap-1 items-start">
              <User className="w-7 h-7 bg-white text-[#184C77] border-black  rounded-[5px]  " />
              <h4 className="text-[40px] font-[500] text-white leading-none tracking-wide-20">
                50K+
              </h4>
              <p className="text-[21px] text-white">Excelling Students</p>
            </div>
            <div className="w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>
          <div className="flex items-center w-full  justify-between  gap-[50px]">
            <div className="flex flex-col gap-1 items-start">
              <User className="w-7 h-7 bg-white text-[#184C77] border-black  rounded-[5px]  " />
              <h4 className="text-[40px] font-[500] text-white leading-none tracking-wide-20">
                5K+
              </h4>
              <p className="text-[21px] text-white">Excelling Students</p>
            </div>
            <div className="w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>
          <div className="flex items-center w-full justify-around gap-[50px]">
            <div className="flex flex-col gap-1 items-start">
              <User className="w-7 h-7 bg-white text-[#184C77] border-black  rounded-[5px]  " />
              <h4 className="text-[40px] font-[500] text-white leading-none tracking-wide-20">
                3K+
              </h4>
              <p className="text-[21px] text-white">Excelling Students</p>
            </div>
            <div className="w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-1 w-full items-start">
            <User className="w-7 h-7 bg-white text-[#184C77]  border-black  rounded-[5px]   " />
            <h4 className="text-[40px] font-[500] text-white leading-none tracking-wide-20">
              85K+
            </h4>
            <p className="text-[21px] text-white">Excelling Students</p>
          </div>
        </section>
        <section className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-[18px] text-white">Decades of Dedication</p>
            <h1 className="text-[55px] text-white tracking-wide-30">Growing Brighter with Every Child</h1>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[180px] h-[60px] px-8 mt-[50px] flex text-center items-center text-[18px] hover:bg-slate-500
       rounded-[15px] bg-[#184C77] text-white  transition-all duration-300 tracking-wide-20 "
          >
            View More
          </motion.button>
        </section>

       <section className="flex justify-between gap-[30px] w-full">
        <div className="flex gap-[20px]">
          <div
            className="relative h-[100px] w-[100px] rounded-full border-4 border-[#184C77] 
        bg-transparent"
          >
            <div className="absolute h-[50px] w-[101px] -left-[4px] -top-[2px] inset-0
            border-t-full border-b-0 rounded-t-full border-[7px]  border-[#00000] 
        bg-transparent animate-spin-slow origin-bottom-center "
            ></div>
           
          </div>
           <div>
              <h1 className="text-[25px] text-white">Our Journey Forward</h1>
              <p className="text-[18px] text-white">Together we grow, learn, and build <br/>
                bright futures.</p>
            </div>
        </div>

        <div className="flex gap-[20px]">
          <div
            className="relative h-[100px] w-[100px] rounded-full border-4 border-[#184C77] 
        bg-transparent"
          >
            <div className="absolute h-[50px] w-[101px] -left-[4px] -top-[2px] inset-0
            border-t-full border-b-0 rounded-t-full border-[7px]  border-[#00000] 
        bg-transparent animate-spin-slow origin-bottom-center delay-[1.6s]"
            ></div>
           
          </div>
           <div>
              <h1 className="text-[25px] text-white">Our Journey Forward</h1>
              <p className="text-[18px] text-white">Together we grow, learn, and build <br/>
                bright futures.</p>
            </div>
        </div>

        <div className="flex gap-[20px]">
          <div
            className="relative h-[100px] w-[100px] rounded-full border-4 border-[#184C77] 
        bg-transparent"
          >
            <div className="absolute h-[50px] w-[101px] -left-[4px] -top-[2px] inset-0
            border-t-full border-b-0 rounded-t-full border-[7px]  border-[#00000] 
        bg-transparent animate-spin-slow origin-bottom-center "
            ></div>
           
          </div>
           <div>
              <h1 className="text-[25px] text-white">Our Journey Forward</h1>
              <p className="text-[18px] text-white">Together we grow, learn, and build <br/>
                bright futures.</p>
            </div>
        </div>
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
