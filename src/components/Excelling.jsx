import React from 'react'

const Excelling = () => {
       return (
    <div className="relative w-full h-[400px] flex justify-center items-center bg-white">
      {/* Blue Gradient Background Card */}
      <div className="w-[250px] h-[350px] rounded-[20px] bg-gradient-to-b from-[#003366] to-[#3f7cbf]"></div>

      {/* Decorative Line */}
      <div className="absolute w-[280px] h-[380px] border-2 border-[#003366] rounded-[40px] z-0"></div>

      {/* Circular Profile Image */}
      <div className="absolute z-10">
        <img
          src="/images/harsec.png" // Replace with actual path
          alt="profile"
          className="w-[180px] h-[180px] object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>
    </div>
  
      
    
  )
}

export default Excelling
