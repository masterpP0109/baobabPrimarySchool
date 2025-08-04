import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CheckScreen from "../CheckScreen";


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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1224px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 868 && !isLargeScreen) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isLargeScreen]);

  const shouldAnimate=CheckScreen();

  return (
    <motion.div
      className="px-4   sm:px-6 lg:px-5 flex xs:flex-col sm:flex-col flex-col md:flex-col 
       lg:flex-col xl:flex-row mt:-[1.5em] xs:mt-[3em] mt-[100px] xl:mt-[200px] md:items-center justify-around
        gap-[30px]
        overflow-hidden"
      ref={sectionRef}
    initial={shouldAnimate ? {opacity:0, rotateY: "90deg"} : false}
    whileInView={ shouldAnimate ? {opacity:1, rotateY: 0} : false}
    transition={ shouldAnimate ? {duration: 2.6} : false}
    viewport={ shouldAnimate ? { once: true, amount: 0.1} : false} >
      <section className="flex flex-col xs:items-center xl:items-start gap-4 sm:gap-8 md:gap-[3rem] overflow-hidden">
        <h1
          className="text-[1rem] xs:text-[1.7rem] sm:text-3xl text-center lg:text-start md:text-6xl lg:text-[65px] xl:text-[2.5rem]  xl:text-start font-[400] leading-none tracking-wide-30"
        >
          About Us
        </h1>

        <div className="xs:text-[0.7rem] text-[0.6rem]   xl:text-nowrap  xs:w-full
         md:w-full text-center text-wrap    md:text-start md:text-[1.3rem] lg:text-[27px] xl:text-[1.125rem] font-[400] md:leading-[30px] 
         lg:leading-[28px] xs:leading-none sm:leading-[35px] min-h-[210px] text-black">
          At Baobab Primary School, we believe every child holds the potential<br />
          to lead, inspire, and uplift their community. Rooted in strong values<br />
          and enriched by our unique location near one of the world’s natural<br />
          wonders, we provide a caring, inclusive, and empowering learning<br />
          environment where young minds are guided to grow in confidence,<br />
          character, and curiosity.
        </div>

        <div className="grid-cols-1 flex sm:grid-cols-2 xs:mt-[-100px] md:flex-col gap-[45px]">
          {[
            "Rooted in strong core values",
            "Balanced academic and creative learning",
            "Supportive, inclusive school community",
          ].map((text, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center"
            >
              <div className="h-6 w-6 md:h-9 md:w-9 bg-transparent border-[3px] md:border-[4px] flex flex-col items-center rounded-full justify-center border-[#184C77]">
                <div className="h-3 w-3 md:h-6 md:w-6 bg-[#184C77] rounded-full"></div>
              </div>
              <p className="xs:text-[1rem] sm:text-base md:text-lg lg:text-[21px] font-normal leading-none text-black">
                {text}
              </p>
            </div>
          ))}
        </div>

        <Link to="/AboutUs"><motion.button
          className="w-full max-w-[205px] xs:align-center h-[50px] md:h-[60px] mt-4 p-3 md:p-5 flex lg:justify-center xl:align-start lg:items-center text-sm sm:text-base md:text-lg lg:text-xl hover:bg-slate-500 rounded-[15px] bg-[#184C77] transition-all duration-300 tracking-wide-20 text-white"
        >
          Explore More
        </motion.button></Link>

        {isLargeScreen && (
          <ProgressWithIcon targetProgress={75} triggerAnimation={inView} />
        )}
      </section>

      
      <section className="xl:w-1/2 flex justify-center xs:w-full  lg:mr-[-10px] xl:mr-[-120px]">
  <div
    className="relative w-full   sm:w-[500x] md:w-[600px]
      xl:w-[550px]
       h-[450px] sm:h-[500px] md:h-[800px] lg:h-[750px]
       xl:h-[760px] bg-cover bg-center bg-no-repeat rounded-[30px]"
    style={{ backgroundImage: "url('/images/heroimage.webp')" }}
  >
    <div className="absolute xs:top-[3rem] sm:top-[60px] md:top-[105px] xl:top-[80px] left-1/2 
    transform -translate-x-1/2 flex xs:ml-[-60px] sm:ml-[-80px] md:ml-[-200px] lg:ml-[-280px] 
    flex-col gap-3 sm:gap‑5">
      {/* First Card */}
      <motion.div className="w-[210px] sm:w-[220px] md:w-[308px] h-[120px] sm:h-[120px]
       md:h-[221px] rounded-[20px] border-[4px] md:border-[6px] bg-black text-white
        flex items-center"
        whileHover={{ scale: 1.21}}
         transition={{ duration: 0.7, delay: 0.3 }}>
        <p className="px-3 sm:px-5 text-sm sm:text-base md:text-lg lg:text-[25px] leading-6 sm:leading-9">
          At Baobab Primary School, we empower young minds to grow with purpose and pride.
        </p>
      </motion.div>
      {/* Second Card */}
      <motion.div className="w-[15.5rem] sm:w-[250px] md:w-[345px] h-[9rem]
       sm:h-[120px] md:h-[241px] rounded-[20px] border-[4px] md:border-[6px]
        bg-[#184C77] text-white flex items-center mt-[-20px] sm:mt-[-30px]
         md:mt-[-40px] ml-[-8px] sm:ml-[-12px] md:ml-[-18px]"
         whileHover={{ scale: 1.1 }}
         transition={{ duration: 0.7, delay: 0.3 }}>
        <p className="px-3 sm:px-5 text-sm sm:text-base md:text-lg lg:text-[25px]
         leading-6 sm:leading-9">
          We Baobab, we inspire lifelong learners grounded in empathy, curiosity, and resilience.
        </p>
      </motion.div>
      {/* Third Card */}
      <motion.div className="w-[13rem] sm:w-[220px] md:w-[308px] h-[120px] sm:h-[120px]
       md:h-[221px] rounded-[20px] border-[4px] md:border-[6px] bg-black text-white 
        items-center mt-[-15px] sm:mt-[-20px] md:mt-[-30px]"
        whileHover={{ scale: 1.1}}
        transition={{ duration: 0.7, delay: 0.3 }}>
        <p className="px-3 sm:px-5 text-sm sm:text-base md:text-lg lg:text-[25px] leading-6 sm:leading-9">
          Baobab Primary School builds strong foundations for bright, confident futures.
        </p>
      </motion.div>
    </div>
  </div>
</section>
  
    </motion.div>
  );
};

export default AboutUs;
