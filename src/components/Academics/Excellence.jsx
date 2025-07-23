import { motion } from "framer-motion"



const Excellence = () => {
  return (
    <div className=" flex w-full h-[620px]  gap-[-50px] px-[90px] mt-[180px] align-center justify-evenly items-center bg-[#184C77] ">
      <div className=" flex flex-col gap-[40px] ">
        <h1 className="text-[65px] text-white ">Excellence in Action</h1>
        <p className="text-[28px] text-white tracking-wide-30">Nurturing the development of the child ,enabling <br/>
        pupils to develop their talents in academics, <br/>
        pupils to develop their talents in academics,<br/>
        pupils to develop their talents in academics,<br/>
        pupils to develop their talents in academics,<br/>
        sports ,and arts.</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9}}
            className="w-[210px] h-[60px] top-[3px] p-5 pb-[40px] text-[21px] text-[#184C77] rounded-[10px]
             bg-white hover:bg-slate-500 hover:text-white
            transition-all duration-300 tracking-wide-30">
          View More
        </motion.button>
      </div>
      <div className="z-50 h-[790px] align-center justify-center mb-[-10px] w-[690px] rounded-[30px] border-[10px]
       bg-center bg-cover bg-no-repeat bg-[url('public/images/childOnBoard.png')]">

      </div>
    </div>
  )
}

export default Excellence
