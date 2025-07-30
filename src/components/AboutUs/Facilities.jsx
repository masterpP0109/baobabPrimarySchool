import React from 'react';

const Facilities = () => {
  return (
    <div className='ml-32'>
      <h1 className='text-6xl text-black mt-[380px] font-[Galang]'>Our Facilities</h1>

      <div className="flex flex-row mt-16 gap-8">
      <div className="flex flex-col sm:flex-col md:flex-col gap-2">
       
        <div className="relative group h-[340px] w-[340px] overflow-hidden rounded-2xl">
          <img
            src="./images/computerlab.png"
            alt="Computer Lab"
            className=" object-cover transition-opacity duration-300 group-hover:opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg px-4 text-center">Our computer lab offers fun, hands on lessons in typing, codind, and internet safety to prepare students for the future.</p>
          </div>
        </div> 

   
        <div className="relative group h-[222px] w-[340px] overflow-hidden">
          <img
            src="./images/Languagelab.png"
            alt="Language Lab"
            className="object-cover transition-opacity duration-300 group-hover:opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg px-4 text-center">Our language lab offers fun, interactive lessons to build speacking, listening, reading, and writing skills in English and local languages</p>
          </div>
        </div>
      </div>

      <div className="relative group h-[570px] w-[340px] overflow-hidden ">
          <img
            src="./images/classroom.png"
            alt="classroom"
            className="object-cover transition-opacity duration-300 group-hover:opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg px-4 text-center">Our classrooms provide a bright, engaging space where students explore, question, and grow through interactive lessons and supportive, caring teachers.</p>
          </div>
        </div>

         <div className='bg-blue-600 h-[460px] w-[696px] mt-14 rounded-2xl absolute left-[47rem] border-2 border-white flex flex-col items-center justify-center'>
          <h2 className='text-white text-4xl font-[Allerta] mb-20'>Teaching Excellence</h2>
          <p className='text-white pl-20 pr-32 font-[Galang] text-xl mb-16'>At Baobab Primary, teaching excellence means passionate, skilled educators delivering high-quality, engaging lessons that inspire curiosity, build strong academic foundations, and support each child’s unique journey toward lifelong learning and success.</p>
          <div className="flex flex-row">
             <button className='bg-white text-blue-500 ml-[98px] w-[166px] h-[45px] rounded-full hover:bg-blue-200 transition duration-200 mr-96'>Apply Now</button>
             <img
              src="./images/arrow-right.png" 
              alt="right arrow" 
              className='w-[50px] h-[50px] mt-8 mr-20'/>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Facilities;
