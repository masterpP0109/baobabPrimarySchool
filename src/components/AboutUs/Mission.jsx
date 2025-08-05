import React from 'react'

const Mission = () => {
  return (
    <div className='h-[100vh] bg-white'>
        <h2 className='text-black text-6xl mt-[390px] ml-32 font-[Galang] spacing-[20%]'>Our Mission And <br /> Values</h2>

    <div className='flex flex-row bg-black w-full h-[472px] mt-20 relative'>
        <div className='flex flex-col items-center justify-center w-[50%] pl-32 pr-20 gap-10'>
            <h3 className='font-[Allerta] text-white s-[16px] text-3xl'>Empowering children to grow confidently.</h3>
            <p className='font-[Bai Jamjuree] s-[16px] text-white'>Baobab Primary School’s mission is to deliver a holistic, child-centered education rooted in Christian values, promoting academic excellence, integrity, respect, and self-discipline. The school is committed to nurturing each learner’s full potential in a safe, inclusive, and stimulating environment, while fostering unity, environmental awareness, and active community involvement through strong partnerships between the school, families, and the wider community.</p>
            <button className='bg-blue-500 text-white w-[166px] h-[45px] rounded-2xl hover:bg-blue-200 transition duration-200 mr-[28rem]'>View More</button>
        </div>
 
        <div className='bg-black border-4 border-[#184C77] rounded-2xl w-[579px] h-[494px] rotate-[-180 deg] relative left-20 bottom-32'></div>
        <div>
            <img src="./images/mission.png" alt="mission" className='w-[586px] h-[503px] rounded-2xl absolute right-36 bottom-36'/>
        </div>
        </div>
    </div>
  )
}

export default Mission