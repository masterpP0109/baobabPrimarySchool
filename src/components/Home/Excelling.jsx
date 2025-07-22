import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { User, GraduationCap, School, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// CountUp Component
const Counter = ({ to = 1000, suffix = "", isVisible = false, duration = 2, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration,
    stiffness: 80,
    damping: 15,
    delay,
  });

  useEffect(() => {
    if (isVisible) {
      setDisplayValue(0);
      motionValue.set(0);
      const unsubscribe = spring.on("change", (latest) => {
        setDisplayValue(Math.floor(latest));
      });
      motionValue.set(to);
      return () => unsubscribe();
    }
  }, [isVisible, to]);

  return (
    <h4 className="text-2xl sm:text-3xl md:text-[40px] xl:text-[55px] font-[500] text-white leading-none tracking-wide-20">
      {displayValue}{suffix}
    </h4>
  );
};

const Excelling = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <motion.div
      className="mx-auto px-4 sm:px-6 lg:px-8 relative mt-[200px] bg-black w-full flex flex-col items-center xl:h-[610px]"
      initial={{ opacity: 0, y: 380 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <section className="flex flex-col gap-10 justify-around w-full">
        {/* Stats Bar */}
        <section
          ref={statsRef}
          className="flex flex-col md:flex-row mt-[-60px] md:mt-[-100px] items-center bg-[#184C77] px-4 sm:px-6 lg:px-8 w-full md:max-w-[1650px] rounded-[20px] h-auto md:h-[200px] xl:h-[270px] gap-6 md:gap-[50px] mx-auto"
        >
          {/* Stat 1 */}
          <div className="flex items-center w-full gap-4 md:gap-[30px]">
            <div className="flex w-full flex-col gap-1 items-start">
              <Smile className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
              <div className="flex flex-col items-center">
              <Counter to={50} suffix="K+" isVisible={isInView} delay={0.2} />
              <p className="text-base sm:text-lg md:text-[21px] xl:text-[24px] text-white">Excelling Students</p>
              </div>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center w-full justify-between gap-4 md:gap-[50px]">
            <div className="flex flex-col gap-1 items-start">
              <User className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
              <div className="flex flex-col items-center">
              <Counter to={5} suffix="K+" isVisible={isInView} delay={0.4} />
              <p className="text-base sm:text-lg md:text-[21px] xl:text-[24px] text-white">Active Teachers</p>
              </div>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center w-full justify-around gap-4 md:gap-[50px]">
            <div className="flex flex-col gap-1 items-start">
              <School className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
              <div className="flex flex-col items-center">
              <Counter to={3} suffix="K+" isVisible={isInView} delay={0.6} />
              <p className="text-base sm:text-lg md:text-[21px] xl:text-[24px] text-white">Partnered Schools</p>
              </div>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full"></div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-[30px] w-full items-start">
            <GraduationCap className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
            <div className="flex flex-col items-center">
            <Counter to={85} suffix="K+" isVisible={isInView} delay={0.8} />
            <p className="text-base sm:text-lg md:text-[21px] xl:text-[24px] text-white">Graduated Learners</p>
            </div>
          </div>
        </section>

        {/* Heading and Button */}
        <section className="flex flex-col sm:flex-row justify-around items-center mt-6 gap-[35px]">
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
              rounded-[15px] bg-[#184C77] text-white transition-all duration-300 tracking-wide-20"
          >
            View More
          </motion.button>
        </section>

        {/* Journey Cards */}
        <section className="flex justify-around gap-4 mt-6">
          {[
            {
              title: "Our Journey Forward",
              desc: "Together we grow, learn, and build bright futures.",
            },
            {
              title: "Empowering Generations",
              desc: "Each learner shapes tomorrow’s world with confidence.",
            },
            {
              title: "Vision Into Reality",
              desc: "From classrooms to communities, we drive success.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 * idx }}
              viewport={{ once: true }}
              className="flex gap-4 items-center"
            >
              <div className="relative h-[80px] sm:h-[100px] w-[80px] sm:w-[100px] rounded-full border-4 border-[#184C77] bg-transparent">
                <div className="absolute h-[40px] sm:h-[50px] w-[81px] sm:w-[101px] -left-[4px] -top-[2px] inset-0
                  border-t-full border-b-0 rounded-t-full border-[7px] border-[#000000] bg-transparent animate-spin-slow origin-bottom-center">
                </div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-[25px] text-white">{card.title}</h1>
                <p className="text-sm sm:text-base md:text-[18px] text-white">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </section>
    </motion.div>
  );
};

export default Excelling;
