import { motion } from "framer-motion";
import { ChevronDown,ChevronUp } from "lucide-react"
import { useState } from "react"



const ParagraphToggle= ({text})=>{
  const[open,setOpen]=useState(false);
  const preview=text.slice(0,30);
  return(
    <div className="flex mb-4 justify-between border-b pb-2">
      <p className="text-white text-[22px] leading-relaxed"
      dangerouslySetInnerHTML={{__html: open ? text : `${preview}...`}}> 
       
      </p>
       <button onClick={() =>setOpen(!open)}
          className="ml-2 inline-flex items-center text-blue-500">
            {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/> }
      </button>
    </div>
  );
};

const Awards = () => {
     const paragraphs = [
        "Visit our classrooms, library, playground, and activity rooms to see <br/> where learning and fun happen every day",
     
        ]
  return (
    <div className="flex flex-col h-[670px] w-full items-center bg-black mt-[185px] justify-around py-[35px]">
        <div className="flex w-full items-center justify-around">
            <section className="flex flex-col items-center">
                <h1 className="text-white text-[55px] mt-[40px] tracking-wide-30">Our Awards</h1>
            </section>
            <section className="flex items-center justify-around  gap-[20px]">
                <div className="w-[380px] h-[200px] rounded-[15px] bg-center bg-cover bg-no-repeat  bg-[url('public/images/girlWri.png')]"></div>
               <div className="w-[380px] h-[200px] rounded-[15px] bg-center bg-cover bg-no-repeat  bg-[url('public/images/kidsWri.png')]"></div>
            </section>
        </div>
        {/* Section with circles */}
        <section className="w-full flex justify-center my-8">
  <div className="relative w-full max-w-4xl flex items-center">
    {/* The line */}
    <div className="absolute left-0 right-0 top-1/2  -translate-y-1/2 h-[3px] bg-gray-600 z-0" />
    {/* The circles */}
    <div className="w-full flex justify-between relative z-10">
      <div className="w-[25px] h-[35px] rounded-full border-[2px] border-[#184c77e9] bg-white"></div>
      <div className="w-[25px] h-[35px] rounded-full border-[2px] border-[#184c77e9] bg-white"></div>
      <div className="w-[25px] h-[35px] rounded-full border-[2px] border-[#184c77e9] bg-white"></div>
      <div className="w-[25px] h-[35px] rounded-full border-[2px] border-[#184c77e9] bg-white"></div>
    </div>
  </div>
</section>
         <div className="flex w-full items-center justify-evenly">
          
            <section className="flex items-center justify-around  gap-[20px]">
                <div className="w-[380px] h-[200px] rounded-[15px] bg-center bg-cover bg-no-repeat  bg-[url('public/images/studentwitbg.png')]"></div>
               <div className="w-[380px] h-[200px] rounded-[15px] bg-center bg-cover bg-no-repeat  bg-[url('public/images/extrStud.png')]"></div>
            </section>
              <section>
                      {paragraphs.map((p,idx)=>(
                <ParagraphToggle key={idx} text={p}/>
            ))}
            </section>
        </div>
    </div>
  )
}

export default Awards