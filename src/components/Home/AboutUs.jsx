import React, { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion"
import { MoveRight } from "lucide-react";


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
        <div className="  p-1 rounded-md flex items-center">
          <img src="public/images/moveright.png" alt="progress" />
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <motion.div
      className="flex mt-[200px] px-[200px]  justify-around"
      ref={sectionRef}
      initial={{opacity:0, y:600}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.8, ease:"easeInOut"}}
      viewport={{once:true, amount: 0.2}}
    >
      <section className="flex flex-col gap-[3rem]">
        <h1 className="text-[28px] sm:text-[36px] xl:text-[50px] font-[400] leading-none tracking-wide-30">
          About Us
        </h1>
        <p className="text-[28px] sm:text-[36px] xl:text-[22px] font-[400] leading-[35px]">
          At Baobab Primary School, we believe every child holds the potential{" "}
          <br />
          to lead, inspire, and uplift their community. Rooted in strong values{" "}
          <br />
          and enriched by our unique location near one of the world’s natural{" "}
          <br />
          wonders, we provide a caring, inclusive, and empowering learning{" "}
          <br />
          environment where young minds are guided to grow in confidence, <br />
          character, and curiosity.
        </p>

        {/* Features */}
        {[
          "Rooted in strong core values",
          "Balanced academic and creative learning",
          "Supportive, inclusive school community",
        ].map((text, index) => (
          <div key={index} className="flex gap-5">
            <div className="h-7 w-7 bg-transparent border-[4px] flex items-center rounded-full justify-center border-[#184C77]">
              <div className="h-4 w-4 bg-[#184C77] rounded-full"></div>
            </div>
            <p className="xl:text-[20px] font-normal leading-none">{text}</p>
          </div>
        ))}

        <motion.button
         whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9}}
          className="w-[205px] h-[60px] top-9 p-5 flex items-center text-[21px] hover:bg-slate-500
        rounded-[15px] bg-[#184C77]  transition-all duration-300 tracking-wide-20 text-white">
      
          Explore More
        </motion.button>

        {/* Animated Progress Bar */}
        <ProgressWithIcon targetProgress={75} triggerAnimation={inView} />
      </section>
      <section className="">
        <div
          className="relative w-[600px] h-[700px] bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[700px] rounded-[30px] mx-auto"
          style={{ backgroundImage: "url('/images/heroimage.jpg')" }} // ✅ Remove "public"
        >
          <div className="absolute top-[105px] left-1/2 transform -translate-x-1/2 flex ml-[-280px] flex-col gap-5">
            {/* Card 1 */}
            <div className="w-[258px] h-[181px] rounded-[20px] border-[6px] border-white bg-black text-white flex items-center">
              <p className="px-5  text-[18px] leading-9">
                At Baobab Primary School, we empower young minds to grow with
                purpose and pride.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-[295px] h-[181px] flex items-center mt-[-40px] ml-[-18px] bg-[#184C77] border-[5px] rounded-[20px]">
              <p className="text-white px-5 text-[18px] leading-9">
                We Baobab, we inspire lifelong learners grounded in empathy,
                curiosity, and resilience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-[258px] h-[181px] rounded-[20px] border-[6px] mt-[-30px] border-white bg-black text-white flex items-center">
              <p className="px-5 text-[18px]  font-normal leading-9">
                Baobab Primary School builds strong foundations for bright,
                confident futures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
