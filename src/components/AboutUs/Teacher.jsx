import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Teacher() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>

    
 <h1 className='text-6xl text-black mt-8 font-[Galang] ml-32'>Meet Our Teachers</h1>
        <p className='font-[Galang] font-normal text-2xl tracking-tight leading-loose mt-10 ml-32'>At Baobab, our teachers blend academic rigor with creativity and care, ensuring each student receives a quality <br/> education tailored to their unique strengths.
</p>

    <div className="slider-container">
      <Slider {...settings} className="slide-spacing">
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Mr Ncube.png" alt="teacher" className="ml-20 mt-12"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Mr Ncube</h3></div>
          
        </div>
         
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Mr Dube.png" alt="teacher" className="ml-20 mt-7"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Mr Dude</h3>
            </div>
          
        </div>
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Mr Mabhena.png" alt="teacher" className="ml-20 mt-7"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Mr Mabhena</h3>
            </div>
          
        </div>
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Mr Makhiwa.png" alt="teacher" className="ml-20 mt-11"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Mr Makhiwa</h3>
            </div>
          
        </div>
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Mr Ganyana.png" alt="teacher" className="ml-20 mt-7"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Mr Ganyana</h3>
            </div>
         
        </div>
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Mrs Ncube.png" alt="teacher" className="ml-20 mt-7"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Mrs Ncube</h3>
            </div>
          
        </div>
        <div className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Miss HD.png" alt="teacher" className="ml-20 mt-16"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Miss HD</h3>
            </div>
          
        </div>
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Mrs Mpala.png" alt="teacher" className="ml-20 mt-12"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Mrs Mpala</h3>
            </div>
          
        </div>
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Miss Ncube.png" alt="teacher" className="ml-20 -mt-4"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Miss Ncube</h3>
            </div>
          
        </div>
        <div  className='bg-[#184C77] w-[80px] h-[309px] rounded-2xl relative group object-cover transition-opacity duration-300 group-hover:opacity-30'>
          <img src="./images/Miss Mazambane.png" alt="teacher" className="ml-20 mt-14"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <h3 className="text-center text-4xl font-[Allerta] font-semibold text-white mt-60">Miss Mazambane</h3>
            </div>
          
        </div>
      </Slider>
    </div>
    </>
  );
}

export default Teacher;








