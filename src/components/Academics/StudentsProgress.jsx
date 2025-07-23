import { motion } from "framer-motion";
import { ChevronDown,ChevronUp } from "lucide-react"
import { useState } from "react"



const ParagraphToggle= ({text})=>{
  const[open,setOpen]=useState(false);
  const preview=text.slice(0,30);
  return(
    <div className="flex mb-4 justify-between border-b pb-2">
      <p className="text-gray-700 text-[22px] leading-relaxed"
      dangerouslySetInnerHTML={{__html: open ? text : `${preview}...`}}> 
       
      </p>
       <button onClick={() =>setOpen(!open)}
          className="ml-2 inline-flex items-center text-blue-500">
            {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/> }
      </button>
    </div>
  );
};

const StudentsProgress = () => {
  const paragraphs = [
    "pupils to develop their talents in academics ,<br/> pupils to develop their talents in academics ",
    "pupils to develop their talents in academics ,<br/> pupils to develop their talents in academics ",
    "pupils to develop their talents in academics ,<br/> pupils to develop their talents in academics ",
    ]
  return (
   
    <div className="mt-[210px] mb-[210px] ">
      <div className="relative flex justify-around px-[100px]">
        <div className="bg-black w-[730px] h-[680px]">
            <div className="h-[220px] w-[320px] bg-[#1e4aaa] "></div>
             <div className="absolute h-[220px] w-[320px] bg-[#1e4aaa] ml-[413px] bottom-[-2px]"></div>
             <div className="absolute z-50 border-[20px] ml-[60px]  w-[610px] bottom-[30px]
             h-[595px] bg-center bg-cover bg-no-repeat bg-[url('public/images/academicsbgimg.png')]"></div>
        </div>

        <div className="flex flex-col justify-evenly">
            <h1 className="text-[50px] tracking-wide-30 font-bold">See Their Progress <br/> Here</h1>
            <p className="text-[25px] ">pupils to develop their talents in academics ,<br/>
             pupils to develop their talents in academics , </p>
          <div>
              {paragraphs.map((p,idx)=>(
                <ParagraphToggle key={idx} text={p}/>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
                       className="w-full max-w-[199px] h-[40px] md:h-[60px] p-3 md:p-5 flex items-center justify-center text-[21px] md:text-[20px] bg-[#184C77] text-white rounded-[15px] transition-all duration-300 tracking-wide mt-4"
          >
            View More
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default StudentsProgress
