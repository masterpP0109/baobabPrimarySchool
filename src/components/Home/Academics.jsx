import { motion } from "framer-motion";
import { User } from "lucide-react";

const Academics = () => {
  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row mt-24 justify-around items-center gap-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Image Side */}
      <section className="img-section mb-10 lg:mb-0 w-full flex justify-center">
        <div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat rounded-[30px] mx-auto"
          style={{ backgroundImage: "url('/images/replacew.webp')" }}
        >
          <div className="absolute top-[-60px] md:top-[-90px] left-1/2 transform -translate-x-1/2 flex ml-[-80px] sm:ml-[-180px] md:ml-[-260px] flex-col gap-5">
            <div
              className="w-[120px] sm:w-[180px] md:w-[285px] h-[120px] sm:h-[180px] md:h-[299px] bg-cover bg-center bg-no-repeat rounded-[20px] border-[4px] md:border-[6px] border-white"
              style={{ backgroundImage: "url('/images/studentspic1.webp')" }}
            />
          </div>
          <div className="relative top-[320px] md:top-[600px] ml-[-40px] md:ml-[-95px]">
            <div className="w-[180px] sm:w-[250px] md:w-[694px] h-[50px] sm:h-[70px] md:h-[110px] z-0 bg-black rounded-[20px] flex flex-col items-start px-4 md:px-10">
              <motion.h1 className="text-[20px] sm:text-[28px] md:text-[55px] text-white tracking-wide-30">
                25 Years +
              </motion.h1>
              <motion.p className="text-[12px] sm:text-[14px] md:text-[18px] text-white tracking-wide-30">
                Of Experience
              </motion.p>
            </div>
            <div
              className="absolute ml-[60px] sm:ml-[120px] md:ml-[470px] w-[120px] sm:w-[180px] md:w-[285px] h-[80px] sm:h-[120px] md:h-[251px] bg-cover bg-center bg-no-repeat rounded-[20px] border-[4px] md:border-[6px] border-white top-[-60px] sm:top-[-90px] md:top-[-215px]"
              style={{ backgroundImage: "url('/images/students.webp')" }}
            />
          </div>
        </div>
      </section>

      {/* Text Side */}
      <section className="text-section flex flex-col justify-between gap-6 md:gap-[29px] w-full max-w-xl">
        <h1 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[400] tracking-wide">
          Academics
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[500]">
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

        {[1, 2].map((i) => (
          <div
            key={i}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto min-h-[80px] sm:min-h-[120px] md:h-[190px] flex flex-col md:flex-row items-center px-4 md:px-10 cursor-pointer rounded-[25px] border-[3px] md:border-[7px] border-gray-200 gap-2 md:gap-4"
          >
            <div className="w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px] md:h-[80px] rounded-full bg-blue-800 border-white flex items-center justify-center hover:shadow-lg mb-2 md:mb-0">
              <User className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
            </div>
            <div>
              <h1 className="text-black text-base sm:text-xl md:text-2xl lg:text-3xl">
                Transition Day
              </h1>
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl">
                {i === 1
                  ? "Celebrating growth as pupils confidently step into new beginnings."
                  : "Recognizing hard work and success in every student’s journey."}
              </p>
            </div>
          </div>
        ))}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full max-w-[205px] h-[50px] md:h-[60px] p-3 md:p-5 flex items-center text-sm sm:text-base md:text-lg lg:text-xl bg-[#184C77] text-white rounded-[15px] transition-all duration-300 tracking-wide mt-4"
        >
          Discover More
        </motion.button>
      </section>
    </motion.div>
  );
};

export default Academics;

