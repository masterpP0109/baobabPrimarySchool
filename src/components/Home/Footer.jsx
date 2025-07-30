import { Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="relative w-full h-auto lg:h-[560px] mt-0 bg-center overflow-hidden bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/footerimg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-75 z-0 text-gray-300 "></div>
      <div className="relative flex flex-col w-full items-center justify-around gap-[70px] py-[100px] z-10">
        <section className="flex-col items-center xl:flex-row flex w-full justify-around">
          <div>
            {" "}
            <img
              src="/images/logoBlue.png"
              alt="LOGO"
              className="w-[110px] xl:w-[160px]"
            />
          </div>
          <div className="flex gap-4">
            <Mail className="text-white hover:scale-110 transition-transform" />
            <Phone className="text-white hover:scale-110 transition-transform" />
            <Globe className="text-white hover:scale-110 transition-transform" />
            <Mail className="text-white hover:scale-110 transition-transform" />
            <Phone className="text-white hover:scale-110 transition-transform" />
          </div>
          <div>
            <p className="text-[22px] text-white">
              At Baobab Primary School, we <br />
              nurture confident, compassionate
              <br />
              learners through academic , and
            </p>
          </div>
        </section>
        <section
          className="flex flex-col md:flex-row h-auto xl:flex-row items-center 
              px-[30px] bg-black bg-opacity-40 md:w-[800px] sm:w-[400px]    lg:w-[1500px]
              md:h-[140px] lg:h-[160px] 
             justify-evenly lg:justify-between rounded-[35px]"
        >
          <div className=" flex flex-col  z-30">
            <h1 className=" text-[18px] lg:text-[35px]  leading-2 tracking-wide-20 text-white">
              Email Notifications
            </h1>
            <p className="text-[13px] lg:text-[20px] text-white">
              At Baobab Primary School, we nurture confident, compassionate{" "}
              <br />
              learners through academy
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center text-[19px] text-white justify-center rounded-[15px] bg-[#1f4088] w-[240px] md:w-[300px] lg:w-[350px] xl:w-[490px] h-[45px]">
              Email
            </div>
            <div className="flex items-center text-[19px] text-white justify-center rounded-[15px] bg-[#1f4088] w-[240px] md:w-[300px] lg:w-[350px] xl:w-[490px] h-[45px]">
              Subscribe
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
