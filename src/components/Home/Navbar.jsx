import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="flex xl:gap-[40px] justify-between items-center px-2 sm:px-6 xl:px-[140px] py-4">
          <img
            src="/images/logo.png"
            alt="LOGO"
            className="w-[80px] sm:w-[100px]"
          />
          <ul
            className="hidden md:flex gap-4 sm:gap-6 xl:gap-[50px] items-center text-white text-sm sm:text-base 
          lg:text-xl  font-normal leading-none tracking-wide-20"
          >
            {[
              "Home",
              "About Us",
              "Admisssions",
              "Academics",
              "Extracurricular",
              "News",
            ].map((item) => (
              <li
                key={item}
                className="relative py-1 hover:text-blue-500 after:content-[''] 
                after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0  
                sm:text-base lg:text-xl xl:text-[25px]
                after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-3 py-1.5 text-sm text-black
       rounded-full border border-gray-300 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </header>
      
    </div>
  )
}

export default Navbar

 