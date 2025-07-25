  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  {/* import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Hook to detect large screens
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
};

// Progress bar component
const ProgressWithIcon = ({ targetProgress, triggerAnimation }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!triggerAnimation) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= targetProgress) {
          clearInterval(interval);
          return targetProgress;
        }
        return next;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [triggerAnimation, targetProgress]);

  return (
    <div className="relative w-[700px] h-3 bg-black rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-[#184C77] rounded-full transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-[-30px] -translate-y-1/2 transition-all duration-200 z-10"
        style={{ left: `calc(${progress}% - 12px)` }}
      >
        <div className="p-1 rounded-md flex items-center">
          <img src="/images/moveright.webp" alt="progress-icon" />
        </div>
      </div>
    </div>
  );
}; */}

import { motion, useInView } from "framer-motion";
import { User, GraduationCap, School, Smile } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

const Excelling = () => {
  const cardsRef = useRef(null);
  const inView = useInView(cardsRef, { once: true, amount: 0.4 });

  return (
    <motion.div
      className="mx-auto px-4 sm:px-6 lg:px-8 relative mt-[200px] bg-black w-full flex flex-col items-center xl:h-[520px]"
      initial={{ opacity: 0, y: 380 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <section className="flex flex-col gap-10 justify-around w-full">
        {/* Stats Bar */}
        <section
          ref={cardsRef /* reuse ref here or separate */}
          className="flex flex-col md:flex-row mt-[-60px] md:mt-[-100px] items-center
           bg-[#184C77] px-4 sm:px-6 lg:px-8 w-full md:max-w-[1650px] rounded-[20px] 
           h-auto md:h-[200px] xl:h-[230px] gap-6 md:gap-[50px] mx-auto"
        >
          {/* your four stat blocks unchanged */}
          <div className="flex items-center w-full gap-4 md:gap-[30px]">
            <Smile className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
            <div className="flex flex-col items-center gap-1 w-full">
              <CountUp start={0} end={50} suffix="K+" duration={2} delay={0.2}
                enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={0}
              >
                {({ countUpRef }) =>
                  <h4 ref={countUpRef} className="text-2xl sm:text-3xl md:text-[40px] xl:text-[55px] font-[500] text-white leading-none tracking-wide-20"/>
                }
              </CountUp>
              <p className="text-base sm:text-lg md:text-[21px] xl:text-[24px] text-white">Excelling Students</p>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full" />
          </div>

          <div className="flex items-center w-full justify-between gap-4 md:gap-[50px]">
            <User className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
            <div className="flex flex-col items-center gap-1">
              <CountUp start={0} end={5} suffix="K+" duration={2} delay={0.4}
                enableScrollSpy={true} scrollSpyOnce={true}
              >
                {({ countUpRef }) =>
                  <h4 ref={countUpRef} className="text-2xl sm:text-3xl md:text-[40px] xl:text-[55px] font-[500] text-white leading-none tracking-wide-20"/>
                }
              </CountUp>
              <p className="text-base sm:text-lg md:text-[21px] xl:text-[24px] text-white">Active Teachers</p>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full" />
          </div>

          <div className="flex items-center w-full justify-around gap-4 md:gap-[50px]">
            <School className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
            <div className="flex flex-col items-center gap-1">
              <CountUp start={0} end={3} suffix="K+" duration={2} delay={0.6}
                enableScrollSpy={true} scrollSpyOnce={true}
              >
                {({ countUpRef }) =>
                  <h4 ref={countUpRef} className="text-2xl sm:text-3xl md:text-[40px] xl:text-[55px] font-[500] text-white leading-none tracking-wide-20"/>
                }
              </CountUp>
              <p className="text-base sm:text-lg md:text-[21px] xl:text-[24px] text-white">Partnered Schools</p>
            </div>
            <div className="hidden md:block w-[15px] h-[105px] border-2 border-gray-300 rounded-full" />
          </div>

          <div className="flex flex-col gap-[5px] w-full items-center">
            <GraduationCap className="w-7 h-7 bg-white text-[#184C77] border-black rounded-[5px]" />
            <CountUp start={0} end={85} suffix="K+" duration={2} delay={0.8}
              enableScrollSpy={true} scrollSpyOnce={true}
            >
              {({ countUpRef }) =>
                <h4 ref={countUpRef} className="text-2xl sm:text-3xl md:text-[40px] xl:text-[55px] font-[500] text-white leading-none tracking-wide-20"/>
              }
            </CountUp>
            <p className="text-base sm:text-lg md:text-[21px] xl:text-[24px] text-white">Graduated Learners</p>
          </div>
        </section>

        {/* Heading and button unchanged */}
        <section className="flex flex-col sm:flex-row justify-around items-center mt-6 gap-[35px]">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg md:text-[18px] text-white">Decades of Dedication</p>
            <h1 className="text-2xl sm:text-4xl md:text-[55px] text-white tracking-wide-30">Growing Brighter with Every Child</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full max-w-[180px] h-[50px] md:h-[60px] px-6 md:px-8 mt-4 sm:mt-[50px] flex items-center text-base sm:text-lg md:text-[18px] hover:bg-slate-500 rounded-[15px] bg-[#184C77] text-white transition-all duration-300 tracking-wide-20"
          >
            View More
          </motion.button>
        </section>

        {/* Journey Cards */}
        <section ref={cardsRef} className="flex justify-between gap-[30px] w-full">
          {[
            { p: 100, l: "Our Journey Forward", t: "Together we grow, learn, and build bright futures.", d: 0.2 },
            { p: 75, l: "Nurturing Potential", t: "Encouraging every child to grow, learn, and succeed.", d: 0.4 },
            { p: 50, l: "Graduation", t: "Proudly Sending Tomorrow’s Leaders into the World, One Graduate at a Time.", d: 0.6 },
          ].map((c, i) => (
            <div key={i} className="flex gap-[20px] text-center items-center">
              <div className="relative h-[100px] w-[100px] rounded-full border-4 border-[#184C77] bg-transparent flex justify-center items-center">
                <CountUp
                  start={0}
                  end={c.p}
                  suffix="%"
                  duration={2}
                  delay={c.d}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                >
                  {({ countUpRef }) => (
                    <h1 ref={countUpRef} className="text-white text-[30px] text-center" />
                  )}
                </CountUp>
              </div>
              <div>
                <h1 className="text-[25px] text-white">{c.l}</h1>
                <p className="text-[18px] text-white">{c.t}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </motion.div>
  );
};

export default Excelling;
