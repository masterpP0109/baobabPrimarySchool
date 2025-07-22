import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const ProgressWithIcon = ({ targetProgress, triggerAnimation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!triggerAnimation) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          clearInterval(interval);
          return targetProgress;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [triggerAnimation, targetProgress]);

  return (
    <div className="relative w-[700px] h-3 bg-black rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-[#184C77] rounded-full transition-all duration-200"
        style={{ width: `${progress}%` }}
      ></div>
      <div
        className="absolute top-[-30px] -translate-y-1/2 transition-all duration-200 z-10"
        style={{ left: `calc(${progress}% - 12px)` }}
      >
        <div className="p-1 rounded-md flex items-center">
          <img src="public/images/moveright.webp" alt="progress" />
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1224px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768 && !isLargeScreen) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isLargeScreen]);

  useEffect(() => {
    if (inView && isLargeScreen) {
      leftControls.start({ x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } });
      rightControls.start({ x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } });
    } else {
      leftControls.start({ x: "-100%", opacity: 0, transition: { duration: 0.5 } });
      rightControls.start({ x: "100%", opacity: 0, transition: { duration: 0.5 } });
    }
  }, [inView, isLargeScreen, leftControls, rightControls]);

  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-5 flex xs:flex-col sm:flex-col flex-col md:flex-col 
       lg:flex-col xl:flex-row mt-[200px] md:items-center justify-around gap-[30px] overflow-hidden"
      ref={sectionRef}
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <AnimatePresence>
        <motion.section
          className="flex flex-col gap-8 md:gap-[3rem] overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          animate={leftControls}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <motion.h1
            className="text-sm sm:text-2xl md:text-3xl lg:text-[65px] xl:text-[65px] lg:text-center xl:text-start font-[400] leading-none tracking-wide-30"
            initial={{ opacity: 0, y: 30 }}
            animate={inView && isLargeScreen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            About Us
          </motion.h1>

          <motion.div
            className="text-sm sm:text-base md:text-[10px] lg:text-[22px] xl:text-[25px] font-[400] md:leading-[50px] lg:leading-[28px] sm:leading-[35px] min-h-[210px] text-black"
            initial={{ opacity: 0 }}
            animate={inView && isLargeScreen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            At Baobab Primary School, we believe every child holds the potential<br />
            to lead, inspire, and uplift their community. Rooted in strong values<br />
            and enriched by our unique location near one of the world’s natural<br />
            wonders, we provide a caring, inclusive, and empowering learning<br />
            environment where young minds are guided to grow in confidence,<br />
            character, and curiosity.
          </motion.div>

          <motion.div
            className="grid-cols-1 flex sm:grid-cols-2 md:flex-col gap-[45px]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView && isLargeScreen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center">
              <div className="h-6 w-6 md:h-9 md:w-9 bg-transparent border-[3px] md:border-[4px] flex flex-col items-center rounded-full justify-center border-[#184C77]">
                <div className="h-3 w-3 md:h-6 md:w-6 bg-[#184C77] rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-[21px] font-normal leading-none text-black">
                Rooted in strong core values
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center">
              <div className="h-6 w-6 md:h-9 md:w-9 bg-transparent border-[3px] md:border-[4px] flex flex-col items-center rounded-full justify-center border-[#184C77]">
                <div className="h-3 w-3 md:h-6 md:w-6 bg-[#184C77] rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-[21px] font-normal leading-none text-black">
                Balanced academic and creative learning
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center">
              <div className="h-6 w-6 md:h-9 md:w-9 bg-transparent border-[3px] md:border-[4px] flex flex-col items-center rounded-full justify-center border-[#184C77]">
                <div className="h-3 w-3 md:h-6 md:w-6 bg-[#184C77] rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-[21px] font-normal leading-none text-black">
                Supportive, inclusive school community
              </p>
            </div>
          </motion.div>

          <motion.button
            whileHover={isLargeScreen ? { scale: 1.1 } : {}}
            whileTap={isLargeScreen ? { scale: 0.9 } : {}}
            className="w-full max-w-[205px] h-[50px] md:h-[60px] mt-4 p-3 md:p-5 flex lg:justify-center xl:align-start lg:items-center text-sm sm:text-base md:text-lg lg:text-xl hover:bg-slate-500 rounded-[15px] bg-[#184C77] transition-all duration-300 tracking-wide-20 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView && isLargeScreen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Explore More
          </motion.button>

          {isLargeScreen && (
            <ProgressWithIcon targetProgress={75} triggerAnimation={inView} />
          )}
        </motion.section>
      </AnimatePresence>

      {/* Right Section with Cards */}
      <AnimatePresence>
        <motion.section
          className="w-1/2 flex justify-center lg:mr-[-100px] xl:mr-[-120px]"
          initial={{ x: 100, opacity: 0 }}
          animate={rightControls}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[620px] h-[350px] sm:h-[500px] md:h-[600px] lg:h-[800px] xl:h-[850px] bg-cover bg-center bg-no-repeat rounded-[30px]"
            style={{ backgroundImage: "url('/images/heroimage.webp')" }}
          >
            <div className="absolute top-[30px] sm:top-[60px] md:top-[105px] left-1/2 transform -translate-x-1/2 flex ml-[-80px] sm:ml-[-180px] md:ml-[-280px] flex-col gap-3 sm:gap-5">
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-[210px] sm:w-[220px] md:w-[308px] h-[90px] sm:h-[120px] md:h-[221px] rounded-[20px] border-[4px] md:border-[6px] border-white bg-black text-white flex items-center"
              >
                <p className="px-3 sm:px-5 text-sm sm:text-base md:text-lg lg:text-[25px] leading-6 sm:leading-9">
                  At Baobab Primary School, we empower young minds to grow with
                  purpose and pride.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-[250px] sm:w-[250px] md:w-[345px] h-[90px] sm:h-[120px] md:h-[241px] flex items-center mt-[-20px] sm:mt-[-30px] md:mt-[-40px] ml-[-8px] sm:ml-[-12px] md:ml-[-18px] bg-[#184C77] border-[3px] md:border-[5px] rounded-[20px] text-white"
              >
                <p className="px-3 sm:px-5 text-sm sm:text-base md:text-lg lg:text-[25px] leading-6 sm:leading-9">
                  We Baobab, we inspire lifelong learners grounded in empathy,
                  curiosity, and resilience.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-[180px] sm:w-[220px] md:w-[308px] h-[90px] sm:h-[120px] md:h-[221px] rounded-[20px] border-[4px] md:border-[6px] mt-[-15px] sm:mt-[-20px] md:mt-[-30px] border-white bg-black text-white flex items-center"
              >
                <p className="px-3 sm:px-5 text-sm sm:text-base md:text-lg lg:text-[25px] leading-6 sm:leading-9">
                  Baobab Primary School builds strong foundations for bright,
                  confident futures.
                </p>
              </motion.div>

            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutUs;
