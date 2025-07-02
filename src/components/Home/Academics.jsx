"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import {
  AcademicCapIcon,
  CreditCardIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";


gsap.registerPlugin(useGSAP);

const Academics = () => {         
  const containerRef = useRef(null);

  // GSAP animation using scoped context
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.from(".img-section", { x: -300, opacity: 0 })
      .from(".text-section", { x: 300, opacity: 0 }, "<");
  }, { scope: containerRef });

  return (
    <motion.div ref={containerRef})
        className=" mt-[200px] px-[200px]  "
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.8, ease:"easeInOut"}}
      viewport={{once:true, amount: 0.2}}>
      <div
      
      >
        <div className="flex px-[250px] justify-around items-center">
          
          {/* Image Side */}
          <section className="img-section">
            <div
              className="relative w-[600px] h-[700px] bg-cover bg-center bg-no-repeat rounded-[30px] mx-auto"
              style={{ backgroundImage: "url('/images/replacew.jpg')" }}
            >
              <div className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 flex ml-[-260px] flex-col gap-5">
                <div
                  className="w-[285px] h-[299px] bg-cover bg-center bg-no-repeat rounded-[20px] border-[6px] border-white"
                  style={{ backgroundImage: "url('/images/studentspic1.jpg')" }}
                />
              </div>
              <div className="relative top-[600px] ml-[-95px]">
                <div className="w-[694px] h-[110px] z-0 bg-black rounded-[20px] flex flex-col items-start px-10">
                  <motion.h1 className="text-[55px] text-white">25 Years +</motion.h1>
                  <motion.p className="text-[18px] text-blue-300">Of Experience</motion.p>
                </div>
                <div
                  className="absolute ml-[470px] w-[285px] h-[251px] bg-cover bg-center bg-no-repeat rounded-[20px] border-[6px] border-white top-[-215px]"
                  style={{ backgroundImage: "url('/images/studentspic2.jpg')" }}
                />
              </div>
            </div>
          </section>

          {/* Text Side */}
          <section className="text-section flex flex-col justify-between gap-[29px] mt-[-70px]">
            <h1 className="text-[28px] sm:text-[36px] xl:text-[50px] font-[400] tracking-wide">
              Academics
            </h1>
            <p className="text-[20px] font-[500]">
              Building strong academic foundations for life<br/>
              Where young minds grow through learning<br/>
              Learning today, leading tomorrow with confidence<br/>
              Inspiring growth through quality primary education<br/>
              Empowering learners through knowledge and curiosity
            </p>

            {[1, 2].map(i => (
              <div
                key={i}
                className="w-[470px] h-[190px] flex items-center px-10 cursor-pointer rounded-[25px] border-[7px] border-gray-200 gap-4"
              >
                <div className="w-[80px] h-[80px] rounded-full bg-blue-800 border-white flex items-center justify-center hover:shadow-lg">
                  <User className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-black text-[32px]">Transition Day</h1>
                  <p className="text-black text-[21px]">
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
              className="w-[205px] h-[60px] p-5 flex items-center text-[18px] bg-[#184C77] text-white rounded-[15px] transition-all duration-300 tracking-wide"
            >
              Discover More
            </motion.button>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Academics;
