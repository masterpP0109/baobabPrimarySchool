import React from "react";

const Hero = () => {
  return (
   <div
  className="relative h-[800px] bg-cover bg-center text-white"
  style={{ backgroundImage: "url('public/images/heroimage.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

  {/* Header Section */}
  <div className="relative z-10 flex justify-between items-center px-6 xl:px-[180px] py-6">
    <div>
      <img src="" alt="LOGO" />
    </div>
    <ul className="hidden md:flex gap-6 xl:gap-[100px] items-center">
      {["HOME", "ABOUT US", "ADMISSIONS", "ACADEMICS", "EXTRACURRICULAR"].map((item) => (
        <li
          key={item}
          className="relative py-1 hover:text-blue-500 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 
          after:left-0 after:bottom-0 hover:after:w-full cursor-pointer text-sm sm:text-base
           lg:text-xl xl:text-2xl"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Hero Section */}
  <section className="relative z-10 flex items-center justify-center h-full px-0">
    <div className="relative text-center md:text-left max-w-4xl xl:right-[9%] pb-[190px]">
      <h1 className="text-[25px] sm:text-[30px] xl:text-[70px] font-extrabold">
        Baobab Primary School
      </h1>
      <p className="mt-4 text-base sm:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing <br />
        elit. Vitae velit, excepturi esse hic <br />
        doloremque deserunt.
      </p>
    </div>
    <div className="relative flex items-center justify-center h-full pb-[90px]">
      <img className="w-[720px]" src="public/images/herostudents.png" alt="herostudents.png" />
    </div>
  </section>
</div>

  );
};

export default Hero;
