import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-[40px]">
      <header className="flex xl:gap-[40px] bg-transparent justify-between items-center px-2 sm:px-6 xl:px-[140px] py-4">
        <img
          src="/images/logo.png"
          alt="LOGO"
          className="w-[80px] sm:w-[100px]"
        />
        <ul
          className="hidden md:flex gap-4 sm:gap-6 xl:gap-[50px] items-center text-white text-sm sm:text-base lg:text-xl font-normal leading-none tracking-wide-20"
        >
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/AboutUs" },
            { name: "Admisssions", path: "/Admissions" },
            { name: "Academics", path: "/Academics" },
            { name: "Extracurricular", path: "/Extracurriculars" },
            { name: "News" },
          ].map((item, index) => (
            <li
              key={index}
              className="relative py-1 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 sm:text-base lg:text-xl xl:text-[25px] after:bottom-0 hover:after:w-full cursor-pointer transition-all duration-300"
            >
              {item.path ? <Link to={item.path}>{item.name}</Link> : item.name}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Search"
          className="hidden md:block px-3 py-1.5 text-sm text-black placeholder:text-white rounded-full border border-none bg-gray-200 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>
    </div>
  );
};

export default Navbar;
