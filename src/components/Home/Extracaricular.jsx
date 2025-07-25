import { motion } from "framer-motion";
import { User } from "lucide-react";


const Extracaricular = () => {
  return (
    <motion.div className="mt-[200px] ml-[-100px] flex flex-col xl:flex-row   items-center content-center gap-1  justify-evenly "
     initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
>
       <section className="flex flex-col justify-around gap-[50px]">
      <h1 className="text-[45px] sm:text-[36px] xl:text-[50px] font-[400] tracking-wide">Extracaricular</h1>
      <p className="text-[20px] sm:text-[18px] xl:text-[22px]">Beyond the classroom, we nurture talent, build <br/>
        character, and inspire every child to shine through sports,<br/>
         arts, leadership, and service</p>
         <div className="flex flex-col justify-around gap-[150px]"> 
          <div className="flex flex-col gap-[65px] md:flex-row items-center justify-between ">
          {[ " Arts and <br/> Creativity",
             "Sports  and Physical <br/> Activities",].map((item) => (
  <div key={item} className="flex items-center gap-[30px]  sm:text-base lg:text-xl xl:text-[20px] ">
    <div className="bg-[#184C77] h-[80px] w-[80px] inset-0 flex rounded-full items-center px-7">
      <User className="w-7 h-7 bg-white text-[#184C77] flex align-center rounded-[5px]" />
    </div>
    {item.includes("<br/>") ? (
      <span dangerouslySetInnerHTML={{ __html: item }} />
    ) : (
      item
    )}
  </div>
))}
             
         </div>
          <div className="flex flex-col md:flex-row items-center justify-between ">
  {[
    "Debate  Public &<br/> Speaking",
    "Life Skills &<br/> Leadership",
  ].map((item) => (
    <div
      key={item}
      className="flex items-center gap-[30px] sm:text-base lg:text-xl xl:text-[20px]"
    >
      <div className="bg-[#184C77] h-[80px] w-[80px] inset-0 flex rounded-full items-center px-7">
        <User className="w-7 h-7 bg-white text-[#184C77] flex align-center rounded-[5px]" />
      </div>
      {item.includes("<br/>") ? (
        <span dangerouslySetInnerHTML={{ __html: item }} />
      ) : (
        item
      )}
    </div>
  ))}
</div>

          <motion.button
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       className="w-[180px] h-[60px] p-5 px-[30px] flex items-center border-2 border-black
                       text-center text-[20px] bg-transparent text-black rounded-[50px] 
                       hover:bg-[#184C77] hover:text-[#FFFF] transition-all duration-300 tracking-wide"
                     >
                       Learn More
                     </motion.button>
         </div>
        
      </section>
      
      <section className="  mt-10 lg:mt-0 ">
        <div className="relative border-[8px] lg:w-[600px] w-[300px] bg-transparent flex  rounded-[30px] border-[#184C77] h-[400px] mx-auto md:w-[450px] md:h-[650px] lg:h-[800px]">
        <div className="absolute bg-[#184C77] h-[50px] w-[50px] lg:h-[50px] md:w-[50px] inset-0 flex rounded-full ml:[400px] md:ml-[415px] lg:ml-[563px] top-[75%]"></div>
       <div className="absolute  lg:h-[554px] h-[200px] w-[150px] md:w-[250px] md:h-[350px]  lg:w-[395px] md:ml-[250px] lg:ml-[363px] top-[-40px] lg:top-[-120px] bg-gradient-to-b rounded-[20px] from-blue-900 to-white"></div>
         <div className="absolute lg:w-[600px] md:w-[400px] w-[150px] lg:h-[600px] md:h-[400px] h-[150px] ml-[10px] top-[75px] lg:top-[5px] rounded-full bg-cover bg-center bg-no-repeat z-40 " style={{ backgroundImage: "url('/images/replacew.webp')" }}></div>
        <div className="absolute lg:h-[554px] md:h-[400px] h-[200px] w-[150px]  lg:w-[395px] md:w-[250px] ml-[-13px] top-[260px] lg:top-[320px] bg-gradient-to-t rounded-[20px] from-blue-900 to-white"></div>
        </div>
      </section>
    </motion.div>
  )
}

export default Extracaricular
