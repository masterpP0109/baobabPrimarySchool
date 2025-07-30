import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-abs">

      <header className="pt-[4rem] flex flex-wrap xl:gap-[40px] bg-transparent justify-between items-center px-2 sm:px-6 xl:px-[140px] py-4">



        <img
          src="/images/logo.png"
          alt="LOGO"
          className="w-[80px] sm:w-[100px]"
        />
        
        <ul className="hidden md:flex gap-4 sm:gap-6 xl:gap-[50px] items-center text-white text-sm sm:text-base lg:text-xl font-normal leading-none tracking-wide-20">
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Admissions">Admissions</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Academics">Academics</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            <Link to="/Extracurriculars">Extracurricular</Link>
          </li>
          <li className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[20px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300">
            News
          </li>
        </ul>

        <input
          type="text"
          placeholder="Search"
          className="hidden md:block px-3 py-1.5 text-sm xl:w-[100px] text-black placeholder:text-white rounded-full border border-none bg-gray-200 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

    </div>
  );
};

export default Navbar;
