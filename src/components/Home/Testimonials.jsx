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

  const prevCard = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextCard = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  const getCardIndex = (offset) => (current + offset + total) % total;

  // Determine how many cards to show based on screen size
  const getVisibleOffsets = () => {
    if (window.innerWidth < 768) return [0]; // xs & sm
    return [0, 1]; // md and up
  };

  return (
    <div className="relative w-full mt-[160px] gap-[35px] z-50">
      {/* Full-width background layer */}
      <div className="absolute top-[200px] w-screen  z-0">
        <div className="bg-[#184C77] h-[400px] sm:h-[400px] md:h-[420px] w-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  gap-[30px] w-full px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col px-0 sm:px-8 xl:top-[-400px] md:px-16 gap-[30px] lg:px-[300px]">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[65px] leading-2 tracking-wide-30">
            What Parents Say About Us
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-[22px]">
            At Baobab Primary School, we nurture confident, compassionate learners through academic excellence, creativity, and <br />
            values-based education empowering every child to grow strong, think boldly, and lead with heart.
          </p>
        </div>

        {/* Carousel */}
        <section className="flex flex-col items-center relative mt-[-150px] w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] justify-center w-full">
            {getVisibleOffsets().map((offset) => {
              const cardIdx = getCardIndex(offset);
              return (
                <AnimatePresence mode="wait" custom={direction} key={offset}>
                  <motion.div
                    key={cardIdx}
                    className="flex sm:max-w-md md:max-w-lg h-[280px] bg-white rounded-[30px] shadow-lg group border-4 border-gray-300"
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
                  >
                    <div
                      className="bg-cover bg-center bg-no-repeat h-full w-[220px] sm:w-[250px] md:w-[300px] lg:w-[320px] mr-4 rounded-[30px]"
                      style={{
                        backgroundImage: `url('${testimonialsData[cardIdx].backgroundimage}')`
                      }}
                    ></div>
                    <div className="flex flex-col justify-center px-4 w-full">
                      <h1 className="text-base sm:text-xl md:text-2xl lg:text-[24px] font-bold mb-2">
                        {testimonialsData[cardIdx].heading}
                      </h1>
                      <div
                        className="text-sm sm:text-base md:text-lg lg:text-[19px]"
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
      </div>
    </div>
  );
};

export default Testimonials;
