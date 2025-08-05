import React from 'react'

const Ftvcards = () => {
  return (

    
    <div className='flex flex-row gap-20 mt-[100px] z-20 absolute'>
        
        {/* Add your card content here */}      
        <div className="bg-black p-5 rounded-2xl border-4 border-white  w-[450px] h-[250px] ml-32">
          <h2 className="text-3xl font-[ALETA] text-center text-white space-[20%] mt-6">Facilities</h2>
          <p className="pl-10 pr-10 text-white text-center font-[AksaraBaliGalang] mt-16">Supporting the growth and learning of every child through quality spaces.</p>  
            </div>

        {/* Repeat the above div for more cards */}
        <div className="bg-black p-5 rounded-2xl border-4 border-white   w-[450px] h-[250px]">
          <h2 className="text-3xl font-[ALETA] text-center text-white space-[20%] mt-6">Teachers</h2>
          <p className="pl-10 pr-10 text-white text-center font-[AksaraBaliGalang] mt-16">Dedicated educators guiding each child's growth with care and excellence.</p> 
            </div>

        {/* Add more cards as needed */}
        <div className="bg-black p-5 rounded-2xl border-4  border-white w-[450px] h-[250px]">
          <h2 className="text-3xl font-[ALETA] text-center text-white space-[20%] mt-6">Values </h2>
          <p className="pl-10 pr-10 text-white text-center font-[AksaraBaliGalang] mt-16 relative z-10">Instilling respect, responsibility, and kindness in every young learner’s journey.</p>  
            </div>
    </div>
  )
}

export default Ftvcards