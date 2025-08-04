import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonialsData = [
  {
    heading: "Nature Growth",
    paragraph:
      "Extracurricular activities help children <br/> discover their passions, develop new <br/> skills, and grow into well-rounded <br/> individuals ready to face the world <br/> with confidence.",
    backgroundimage: "/images/replacew.webp"
  },
  {
    heading: "Grow Together",
    paragraph:
      "We envisioned Baobab Primary as a <br/> place where every child's curiosity is <br/> sparked, and strong foundations for <br/> a lifetime of learning are lovingly<br/> built.",
    backgroundimage: "/images/replacew.webp"
  },
  {
    heading: "Parent Support",
    paragraph:
      "The teachers and staff are so <br/> supportive and caring. My child <br/> loves going to school every day!",
    backgroundimage: "/images/replacew.webp"
  },
  {
    heading: "Academic Excellence",
    paragraph:
      "Baobab Primary School has <br/> exceeded our expectations in <br/> academic growth and creativity.",
    backgroundimage: "/images/replacew.webp"
  },
  {
    heading: "Community Spirit",
    paragraph:
      "We love the sense of community <br/> and the values taught at Baobab.",
    backgroundimage: "/images/replacew.webp"
  },
  {
    heading: "Safe Environment",
    paragraph:
      "My child feels safe and happy <br/> every day. Thank you, Baobab!",
    backgroundimage: "/images/replacew.webp"
  },
  {
    heading: "Holistic Growth",
    paragraph:
      "The extracurricular activities and <br/> leadership programs are fantastic.",
    backgroundimage: "/images/replacew.webp"
  },
];

const CARD_VARIANTS = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    scale: 0.95,
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    scale: 0.95,
    transition: { duration: 0.3 }
  }),
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = testimonialsData.length;
  const visibleCards = 1;

  const prevCard = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextCard = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  // For two cards, get the current and the next one (with wrap-around)
  const getCardIndex = (offset) => (current + offset + total) % total;

  return (
    <div className="z-50 flex flex-col xs:items-center items-center mt-[160px] gap-[30px]">
      <div className="flex flex-col px-4 sm:px-8 ml-[-5px] md:px-16 gap-[30px] lg:px-[300px]">
        <h1 className=" xs:text-[30px] text-center md:text-start text-[30px] xl:text-[65px] leading-2 tracking-wide-30">What Parents Say About Us</h1>
        <p className=" xs:text-[12px] text-sm text-center md:text-start xl:text-[21px]">
          At Baobab Primary School, we nurture confident, compassionate learners through academic excellence, creativity, and <br />
          values based education empowering every child to grow strong, think boldly, and lead with heart.
        </p>
      </div>
      <section className="z-50 flex flex-col items-center  mt-8">
        <div className="flex gap-[60px]  mx-0 h-auto justify-center w-full flex-col xs:flex-col
         sm:flex-col
         md:flex-col xl:flex-row items-center ">
          {[0, 1].map((offset) => {
            const cardIdx = getCardIndex(offset);
            return (
              <AnimatePresence mode="wait" custom={direction} key={offset}>
                <motion.div
                  key={cardIdx}
                  className="flex lg:w-[560px] xs:w-[380px] w-[390px]  sm:w-[450px] md:w-[560px]  xl:w-[690px] xs:h-[210px] h-[200px]
                   sm:h-[200px] md:h-[280px] xl:h-[280px] lg:h-[180px] bg-white rounded-[30px] shadow-lg  group
                    border-4 border-gray-300"
                  custom={direction}
                  variants={CARD_VARIANTS}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 8px 32px 0 rgba(24,76,119,0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ position: "relative" }}
                >
                  <div
                    className="bg-cover bg-center bg-no-repeat h-full w-[320px]  mr-4 rounded-[30px]"
                    style={{
                      backgroundImage: `url('${testimonialsData[cardIdx].backgroundimage}')`
                    }}
                  ></div>
                  <div className="flex flex-col justify-center px-4 w-[400px] ">
                    <h1 className="text-sm xs:text-[15px] sm:text-[26px] md:text-[24px] font-bold mb-2">{testimonialsData[cardIdx].heading}</h1>
                    <div
                      className=" text-sm xs:text-[12px] sm:text-[18px] md:text-[19px]"
                      dangerouslySetInnerHTML={{ __html: testimonialsData[cardIdx].paragraph }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>

          {/* Navigation */}
        <div className="flex gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.15, backgroundColor: "#123456" }}
            whileTap={{ scale: 0.95 }}
            onClick={prevCard}
              className="w-[55px] h-[55px] border-2 border-white rounded-full bg-transparent text-white text-2xl flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out"
            aria-label="Previous"
          >
              &#x276E;
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15, backgroundColor: "#123456" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextCard}
              className="w-[55px] h-[55px] border-2 border-white rounded-full bg-transparent text-white text-2xl flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out"
            aria-label="Next"
          >
              &#x276F;
          </motion.button>
        </div>
       
      </section>
      <section className="relative z-0 w-full xs:h-[240px] h-[240px] xl:h-[400px] mt-[-250px] bg-[#184C77]">

      </section>
    </div>
  );
};

export default Testimonials;
