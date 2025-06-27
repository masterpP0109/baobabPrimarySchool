import React from "react";
import { Home, Menu, User } from "lucide-react";
import {
  AcademicCapIcon,
  CreditCardIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Academics = () => {
  return (
    <div className="flex mt-[200px] px-[250px]  justify-around align-center">
      <section className="">
        <div
          className="relative w-[600px] h-[700px] bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[700px] rounded-[30px] mx-auto"
          style={{ backgroundImage: "url('/public/images/replacew.jpg')" }}
        >
          <div className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 flex ml-[-260px] flex-col gap-5">
            <div
              className="w-[285px] h-[299px] bg-cover bg-center bg-no-repeat sm:h-[50px] md:h-[100px] lg:h-[180px] xl:h-[299px]
              rounded-[20px] border-[6px] border-white  text-white flex items-center"
              style={{
                backgroundImage: "url('public/images/studentspic1.jpg')",
              }}
            ></div>
          </div>
          <div className="relative top-[600px] ml-[-95px]">
            <div className=" w-[694px] h-[110px] z-0 bg-black rounded-[20px] flex flex-col items-start px-10">
              <h1 className="text-[55px] text-white">2 5 Y e a r s +</h1>
              <p className="text-[18px] text-blue-300">O f Ex p e r ie n c e</p>
            </div>
            <div
              className="absolute ml-[470px] w-[285px] h-[251px] bg-cover bg-center bg-no-repeat
             sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[290px]  rounded-[20px] 
             border-[6px] border-white top-[-215px] text-white flex items-center"
              style={{
                backgroundImage: "url('public/images/studentspic2.jpg')",
              }}
            ></div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between gap-[29px] mt-[-70px]">
        <h1 className="text-[28px] sm:text-[36px] xl:text-[50px] font-[400] tracking-wide-20 ">Academics</h1>
        <p className=" text-[20px] font-[500]">
          Building strong academic foundations for life <br />
          Where young minds grow through learning
          <br />
          Learning today, leading tomorrow with confidence
          <br />
          Inspiring growth through quality primary education
          <br />
          Empowering learners through knowledge and curiosity
        </p>

        <div className="w-[470px] h-[190px] flex items-center px-10  cursor-pointer rounded-[25px] border-[7px] border-gray-200     gap-4">
          <div className="w-[80px] h-[80px] rounded-full border bg-blue-800 border-white flex items-center justify-center hover:shadow-[50] ">
            <User className="w-9 h-9 text-white border-black  rounded-full   " />
          </div>
          <div>
            <h1 className="text-black text-[32px]">Transition Day</h1>
            <p className="text-black text-[21px]">Celebrating growth as pupils<br/>
              confidently step into new <br/>
              beginnings.</p>
          </div>
        </div>

        <div className="w-[470px] h-[190px] flex items-center px-10  cursor-pointer rounded-[25px] border-[7px] border-gray-200  gap-4">
          <div className="w-[80px] h-[80px] rounded-full border bg-blue-800 border-white flex items-center justify-center hover:shadow-[50] ">
            <User className="w-9 h-9 text-white border-black  rounded-full   " />
          </div>
          <div>
         
           <h1 className="text-black text-[32px]">Transition Day</h1>
            <p className="text-black text-[21px]">Recognizing hard work and <br/>
            success in every student’s <br/>
            journey.</p>
          </div>
        </div>

       <button className="w-[205px] h-[60px] top-9 p-5 flex items-center text-[18px] hover:bg-slate-500
       rounded-[15px] bg-[#184C77] text-white tracking-wide-20"> 
          Discover More
        </button>
      </section>
    </div>
  );
};

export default Academics;
