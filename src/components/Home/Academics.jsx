import { motion } from "framer-motion";
import { User } from "lucide-react";

const Academics = () => {
  return (
    <motion.div
      className="px-4 sm:px-6 flex flex-col xl:flex-row mt-24 items-center xl:justify-evenly lg:justify-between lg:gap-[190px] xl:gap-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Image Side */}
      <section className="img-section mb-10 lg:mb-0 flex justify-center w-full xl:w-1/2">
        <div
          className="relative w-full max-w-[900px] h-[400px] sm:h-[500px] md:h-[700px] lg:h-[990px] xl:w-[700px] xl:h-[760px] bg-cover bg-center bg-no-repeat bg-[url('public/images/fullStudentImg.png')] rounded-[30px] mx-auto"
        >
          {/* Top floating card */}
          <div className="absolute top-[-60px] md:top-[-90px] left-1/2 transform -translate-x-1/2 flex ml-[-80px] sm:ml-[-180px] md:ml-[-260px] flex-col gap-5">
            <div
              className="w-[120px] sm:w-[180px] md:w-[285px] lg:w-[480px] lg:h-[400px] xl:w-[310px] xl:h-[330px] h-[120px] sm:h-[180px] md:h-[299px] bg-cover bg-center bg-no-repeat rounded-[20px] border-[4px] md:border-[6px] border-white"
              style={{ backgroundImage: "url('/images/girlWri.png')" }}
            />
          </div>

          {/* Bottom stat + card */}
          <div className="relative top-[320px] md:top-[500px] lg:top-[900px] xl:top-[620px] ml-[-40px] md:ml-[-95px] xl:ml-[-70px]">
            <div className="w-full max-w-[810px] h-[50px] sm:h-[70px] md:h-[110px] xl:h-[160px] bg-black rounded-[20px] flex flex-col justify-center px-4 md:px-10">
              <motion.h1 className="text-[20px] sm:text-[28px] md:text-[55px] text-white tracking-wide-30">
                25 Years +
              </motion.h1>
              <motion.p className="text-[12px] sm:text-[14px] md:text-[18px] text-white tracking-wide-30">
                Of Experience
              </motion.p>
            </div>
            <div
              className="absolute ml-[60px] sm:ml-[120px] md:ml-[470px] xl:ml-[550px] w-[120px] sm:w-[180px] md:w-[285px] xl:w-[310px] h-[80px] sm:h-[120px] md:h-[251px] xl:h-[330px] bg-cover bg-center bg-no-repeat rounded-[20px] border-[4px] md:border-[6px] border-white top-[-60px] sm:top-[-90px] md:top-[-215px]"
              style={{ backgroundImage: "url('images/studentsinClassB.png')" }}
            />
          </div>
        </div>
      </section>

      {/* Text Side */}
      <section className="w-full xl:w-1/2 flex flex-col items-center xl:items-start gap-6 md:gap-[29px]">
        <h1 className="text-sm sm:text-2xl md:text-3xl lg:text-8xl xl:text-7xl font-[400] tracking-wide-30 text-center xl:text-left">
          Academics
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-4xl xl:text-2xl font-[500] text-center xl:text-left leading-relaxed">
          Building strong academic foundations for life <br />
          Where young minds grow through learning <br />
          Learning today, leading tomorrow with confidence <br />
          Inspiring growth through quality primary education <br />
          Empowering learners through knowledge and curiosity
        </p>

        {[1, 2].map((i) => (
          <div
            key={i}
            className="w-full sm:max-w-sm md:w-[600px] lg:max-w-[800px] xl:max-w-[800px] flex flex-col md:flex-row items-center px-4 md:px-10 rounded-[25px] border-[3px] md:border-[7px] border-gray-300 gap-2 md:gap-4 py-4"
          >
            <div className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[120px] rounded-full bg-blue-800 border-white flex items-center justify-center hover:shadow-lg mb-2 md:mb-0">
              <User className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-[50px] lg:h-[50px] text-white" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-black text-base sm:text-xl md:text-2xl lg:text-5xl xl:text-4xl">
                Transition Day
              </h1>
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-3xl xl:text-2xl">
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
          className="w-full max-w-[205px] h-[50px] md:h-[60px] p-3 md:p-5 text-sm sm:text-base md:text-lg lg:text-xl bg-[#184C77] text-white rounded-[15px] transition-all duration-300 tracking-wide mt-4"
        >
          Discover More
        </motion.button>
      </section>
    </motion.div>
  );
};

export default Academics;
