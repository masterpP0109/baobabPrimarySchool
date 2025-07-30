import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

  const cards = [
  {
    title: "Transition Day",
    text: "Celebrating growth as pupils confidently step into new beginnings.",
  },
  {
    title: "Prize Giving Day",
    text: "Recognizing hard work and success in every student’s journey.",
  },
];

const Academics = () => {
  return (
    <motion.div
      className=" flex flex-col xl:flex-row mt-24 items-center  lg:justify-around lg:gap-[20px] xl:gap-[1.3rem] "
      initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale: 1}}
    transition={{duration: 2}}
     viewport={{ once: true,amount: 0.1}}
    >
      {/* Image Side */}
      <section className=" mb-10 lg:mb-0 flex justify-center ">
        <div
          className="relative  max-w-[900px] h-[400px] sm:h-[500px] md:h-[700px] lg:h-[990px] 
          w-[84vw]
           lg:w-[830px] xl:w-[500px] xl:h-[660px] bg-cover bg-center bg-no-repeat 
           rounded-[30px] mx-auto"

            style={{ backgroundImage: "url('images/fullStudentImg.png')" }}
        >
          {/* Top floating card */}
          <div className="absolute top-[-60px] md:top-[-90px] left-1/2 transform -translate-x-1/2 flex
           ml-[-118px] sm:ml-[-180px] md:ml-[-190px] flex-col gap-5">
            <div
              className="w-[120px] sm:w-[180px] md:w-[285px] lg:w-[200px] h-[120px] xl:w-[250px] xl:h-[256px]
               sm:h-[180px] md:h-[299px] bg-cover bg-center bg-no-repeat rounded-[20px] border-[4px] md:border-[6px] border-white"
              style={{ backgroundImage: "url('/images/girlWri.png')" }}
            />
          </div>
          <div className="relative top-[344px] md:top-[600px] lg:top-[630px] ml-[-10px] md:ml-[-95px] xl:ml-[-70px]">
            <div className="w-[325px] sm:w-[250px] md:w-[694px] xl:w-[561px] h-[85px] sm:h-[70px] 
            md:h-[110px] xl:h-[120px] z-0 bg-black rounded-[20px] flex flex-col items-start px-4 md:px-10">
              <motion.h1 className="text-[26px] sm:text-[28px] md:text-[55px] text-white tracking-wide-30">
                25 Years +
              </motion.h1>
              <motion.p className="text-[17px] sm:text-[14px] md:text-[18px] text-white tracking-wide-30">
                Of Experience
              </motion.p>
            </div>
            <div
              className="absolute ml-[227px] sm:ml-[120px] md:ml-[470px] xl:ml-[350px] w-[120px] sm:w-[180px]
               md:w-[285px] h-[120px] sm:h-[120px] md:h-[251px] xl:w-[250px] xl:h-[256px] bg-cover bg-center
                bg-no-repeat rounded-[20px] border-[4px] md:border-[6px] border-white top-[-68px] sm:top-[-90px] md:top-[-215px]"
              style={{ backgroundImage: "url('images/studentsinClassB.png')" }}
            />
          </div>
        </div>
      </section>

      {/* Text Side */}
      <section className=" flex flex-col xs:items-center xl:items-start justify-between md:items-center gap-6 md:gap-[29px] ">
        <h1 className="text-[1.8rem] sm:text-2xl md:text-3xl lg:text-8xl xl:text-[2.5rem] font-[300] tracking-wide-30">
          Academics
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-4xl xl:text-[1.1rem] font-[500]">
          Building strong academic foundations for life
          <br />
          Where young minds grow through learning
          <br />
          Learning today, leading tomorrow with confidence
          <br />
          Inspiring growth through quality primary education
          <br />
          Empowering learners through knowledge and curiosity
        </p>

 


    {cards.map((card, index) => (
      <motion.div
        key={index}
        className="w-full max-w-xs sm:max-w-sm md:w-[600px] lg:max-w-[33vw] xl:max-w-[33vw] 
          h-auto min-h-[80px] sm:min-h-[120px] md:h-[190px] lg:h-[16.5vh] xl:h-[16.6vh]
          flex flex-col md:flex-row items-center px-4 md:px-10 cursor-pointer
          rounded-[25px] border-[3px] md:border-[7px] border-gray-300 gap-2 md:gap-4"
      whileHover={{ scale: 1.1 }}
         transition={{ duration: 0.7, delay: 0.3 }}>
        <div className="w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px] md:h-[70px] xl:h-[80px] xl:w-[80px]
          rounded-full bg-[#184C77] border-white flex items-center justify-center hover:shadow-lg mb-2 md:mb-0"
        >
          <User className="w-5 h-5 sm:w-7 rounded-[5px] sm:h-7 md:w-9 lg:w-[30px] lg:h-[30px bg-[#f4f4f4] text-[#184C77] " />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-black text-base sm:text-xl md:text-2xl lg:text-5xl xl:text-[1.56rem]">
            {card.title}
          </h1>
          <p className="text-black text-sm sm:text-base md:text-lg lg:text-3xl xl:text-[1.1rem]">
            {card.text}
          </p>
        </div>
      </motion.div>
    ))}



        <Link to="/Academics"><motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full max-w-[205px] h-[50px] md:h-[60px] p-3 md:p-5 text-sm sm:text-base md:text-lg lg:text-xl bg-[#184C77] text-white rounded-[15px] transition-all duration-300 tracking-wide mt-4"
        >
          Discover More
        </motion.button></Link>
      </section>
    </motion.div>
  );
};

export default Academics;
