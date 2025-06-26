import React from 'react'

const AboutUs = () => {
  return (
    <div className="flex  mt-[200px] px-[110px]">
      <section className="flex flex-col gap-10">
        <h1 className="text-[28px] sm:text-[36px] xl:text-[50px] font-normal leading-none tracking-wide-30">About Us</h1>
        <p className="text-[28px] sm:text-[36px] xl:text-[22px] font-normal leading-[35px]">At Baobab Primary School, we nurture confident, compassionate <br/>
           learners through academic excellence, creativity, and values based <br/>
           education empowering every child to grow strong, think boldly, <br/>
        and lead with heart.</p>
       <div className="flex gap-5">
        <div className="h-7 w-7 bg-transparent border-2 flex items-center rounded-full justify-center border-blue-900">
            <div className="h-5 w-5 bg-blue-700 rounded-full ">

            </div>
        </div>
        <p>Nurturing the development the childpupils</p>
       </div>
       <div className="flex gap-5">
        <div className="h-7 w-7 bg-transparent border-2 flex items-center rounded-full justify-center border-blue-900">
            <div className="h-5 w-5 bg-blue-700 rounded-full ">

            </div>
        </div>
        <p>Nurturing the development the childpupils</p>
       </div>
       <div className="flex gap-5">
        <div className="h-7 w-7 bg-transparent border-2 flex items-center rounded-full justify-center border-blue-900">
            <div className="h-5 w-5 bg-blue-700 rounded-full ">

            </div>
        </div>
        <p>Nurturing the development the childpupils</p>
       </div>
      </section>
    </div>
  )
}
 
export default AboutUs