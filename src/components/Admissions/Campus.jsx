import React from 'react'


const Campus = () => {
  return (
    <div className='mt-36' style={{backgroundImage: "url('./images/background.png')", backgroundSize: 'cover'}}>
        <div className="flex">
            <div className="flex flex-col">
               <img src="./images/girlWri.png" alt="" className='ml-40 w-[280px] h-[400px]' />

               <div className='w-10 h-10 bg-[#184C77] ml-[17rem] mt-16 rotate-45 -z-20'></div>
               <div className='w-[250px] h-[80px] bg-[#184C77] ml-40 rounded-full -mt-8 -z-10'>
                <div className="flex">
                    <div className='bg-transparent border-2 border-white w-[60px] h-[60px] ml-8 mt-2 rounded-full flex items-center justify-center'>
                      <img src="./images/icon.png" alt="" className='h-[40px] w-[40px] border-1 border-white'/>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className='font-[Allerta] text-4xl text-white spacing-[20%] ml-3'>1283k+</p>
                        <p className='font-[Galang] text-4xl text-white spacing-[20%] ml-3'>with us</p>
                      </div>
                </div>
               </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 mt-5 ml-8">
                    <div className='bg-transparent border-2 border-[#184C77] w-[130px] h-[16px] '></div>
                    <div className='bg-transparent border-2 border-[#184C77] w-[16px] h-[16px]'></div>
                    <div className='bg-transparent border-2 border-[#184C77] w-[16px] h-[16px]'></div>
                    <div className='bg-transparent border-2 border-[#184C77] w-[16px] h-[16px]'></div>
                    <div className='bg-transparent border-2 border-[#184C77] w-[16px] h-[16px]'></div>
                    <div className='bg-transparent border-2 border-[#184C77] w-[16px] h-[16px]'></div>
                    <div className='bg-transparent border-2 border-[#184C77] w-[16px] h-[16px]'></div>
                </div>

                <img src="./images/boyOnLapT.png" alt="" className='w-[280px] h-[250px] ml-[3rem]'/>
                <img src="./images/studentsinClassB.png" alt=""  className='w-[280px] h-[250px] ml-[3rem]'/>
            </div>

            <div className="flex flex-col gap-5 ml-20 pl-10 pr-10">
                <h1 className='text-6xl text-[#184C77] font-[Galang]'>Visit Campus & Events</h1>
                <p className='text-black text-xl font-[Galang]  tracking-wide-20 leading-loose'>Visit Baobab Primary School in Victoria Falls—explore interactive classrooms, meet caring teachers, and enjoy family‑friendly events showcasing our spirited, welcoming campus community.”</p>
                <div className='border-b-4 border-[#184c7772] w-[90%] pb-3 relative'></div>
                <div className='rounded-full bg-[#184C77] w-8 h-8 relative  bottom-10 left-60'></div>
                
                <div className="flex gap-10 mt-2">
                  <div className="flex flex-col gap-5">
                  <div className="flex">
                    <div className='rounded-full w-10 h-10 border-4 border-[#184C77] mr-[20rem]'>
                      <div className='rounded-full bg-[#184C77] w-6 h-6 ml-1 mt-1'></div>
                    </div>
                    <p className='text-black text-xl font-[Galang] tracking-wide-20 leading-loose -ml-[18rem]'>Ask Ahead</p>
                  </div>
                  <div className="flex">
                    <div className='rounded-full w-10 h-10 border-4 border-[#184C77] mr-[20rem]'>
                      <div className='rounded-full bg-[#184C77] w-6 h-6 ml-1 mt-1'></div>
                    </div>
                    <p className='text-black text-xl font-[Galang] tracking-wide-20 leading-loose -ml-[18rem]'>Daily Discovery</p>
                  </div>
                </div>
                <div className="flex flex-col ml-10">
                  <img src="./images/Frame.png" alt="" className='h-12 w-12'/>
                  <img src="./images/Frame.png" alt="" className='h-12 w-12'/>
                </div>

                    <div className="rounded-full bg-transparent border-8 border-[#184C77] w-36 h-36 -mt-8 text-black text-2xl font-[Galang] font-bold flex justify-center items-center">47%</div>
                <div className="flex flex-col gap-5">
                  <p className='text-black text-xl font-[Galang]  tracking-wide-20 leading-loose'>Child Focus</p>
                  <p className='text-black text-xl font-[Galang]  tracking-wide-20 leading-loose'>Build Confidence</p>
                </div>

                </div>

                <div className='bg-slate-100 w-[50rem] h-[8rem] rounded-2xl'>
                  <p className='text-black text-xl font-[Galang] tracking-wide-20 leading-loose mt-5 pl-2'>Visit our classrooms, library, playground, and activity rooms to see where learning and fun happen every day</p>
                </div>
                
            </div>

        </div>
        <div className='h-[1878px] w-[1400px] border-2 border-[#184C77] mt-36 ml-[10rem]'>
          <h1 className='text-6xl text-[#184C77] font-[Galang] flex justify-center item mt-10'>Baobab Primary School</h1>
          <div className='border-b-2 border-[#184C77] mt-20 -z-20'></div>
          <div className='rounded-2xl bg-[#184C77] w-[40%] h-24 -mt-12 ml-[26rem] -z-10'>
            <p className='text-4xl text-white font-[Galang] tracking-wide-20 leading-loose flex justify-center items-center'>REGISTRATION FORM</p>
          </div>

          <input type="text" placeholder='Date:' className='border-b-2 border-black w-[26rem] ml-20 mt-20'/>
          <h3 className='text-4xl text-[#184C77] font-[Galang] mt-10 ml-20'>PERSONAL INFORMATION</h3>


        <div className="flex flex-col gap-8">
            <div className="flex gap-32 ml-20 mt-4">
              <input type="text" placeholder='Name    :' className='border-b-2 border-black w-[35rem]' />
              <input type="text" placeholder='Last Name    :' className='border-b-2 border-black w-[35rem]' />     
            </div>
            <div className="flex ml-20 gap-3">
              <tr>Gender  :</tr>
              <input type="radio" name='Gender' className='ml-40 w-5 h-5 accent-[#184C77]'/>Male
              <input type="radio" name='Gender'className='ml-40 w-5 h-5 accent-[#184C77]'/>Female
            </div>


             <div className="flex gap-32 ml-20 mt-4">
              <input type="text" placeholder='Date Of Birth    :' className='border-b-2 border-black w-[35rem]' />
              <input type="text" placeholder='Place Of Birth    :' className='border-b-2 border-black w-[35rem]' />     
            </div>
            <div className="flex gap-32 ml-20 mt-4">
              <input type="text" placeholder='Father’s Name      :' className='border-b-2 border-black w-[35rem]' />
              <input type="text" placeholder='Mother’s Name   :' className='border-b-2 border-black w-[35rem]' />     
            </div>
            <div className="flex gap-32 ml-20 mt-4">
              <input type="text" placeholder='Nationality      :' className='border-b-2 border-black w-[35rem]' />
              <input type="text" placeholder='Religion   :' className='border-b-2 border-black w-[35rem]' />     
            </div>

             <div className="flex ml-20 mt-10 gap-3">
              <tr>Resident Status  :</tr>
              <input type="radio" name='Status' className='ml-32 w-5 h-5 accent-[#184C77]'/>Resident
              <input type="radio" name='Status'className='ml-32 w-5 h-5 accent-[#184C77]'/>Non-Resident
            </div>
             
             <div className="flex ml-20 mt-10 gap-3">
              <tr>Marital Status  :</tr>
              <input type="radio" name='Status' className='ml-32 w-5 h-5 accent-[#184C77]'/>Married
              <input type="radio" name='Status'className='ml-36 w-5 h-5 accent-[#184C77]'/>Unmarried
            </div>
             <h3 className='text-4xl text-[#184C77] font-[Galang] mt-8 ml-20 border-b-2 border-black w-[1250px]'>CONTACT DETAILS </h3>
             <input type="text" placeholder='Present Address      :' className='border-b -2 border-black w-[1250px] ml-20 mt-5'/>

             <div className="flex gap-32 ml-20 mt-4">
              <input type="text" placeholder='City      :' className='border-b-2 border-black w-[35rem]' />
              <input type="text" placeholder='State   :' className='border-b-2 border-black w-[35rem]' />     
            </div>
            <div className="flex gap-32 ml-20 mt-4">
              <input type="text" placeholder='Postal Code      :' className='border-b-2 border-black w-[35rem]' />
              <input type="text" placeholder='Country   :' className='border-b-2 border-black w-[35rem]' />     
            </div>
            <div className="flex gap-32 ml-20 mt-4">
              <input type="text" placeholder='Phone      :' className='border-b-2 border-black w-[35rem]' />
              <input type="text" placeholder='Email   :' className='border-b-2 border-black w-[35rem]' />     
            </div>
            <div className="flex gap-32 ml-20 mt-4">
              <input type="text" placeholder='Grade      :' className='border-b-2 border-black w-[35rem]' />
              <input type="text" placeholder='Transfered   :' className='border-b-2 border-black w-[35rem]' />     
            </div>

            <p className=' text-lg font-[Galang] tracking-wide-20 leading-loose mt-5 pl-20'>We process personal data following our school's data protection policy. It’s only shared with essential staff or authorities, retained for the duration of your child’s enrollment, and securely destroyed afterward.</p>
            <div className="flex gap-40 justify-center items-center mt-20">
            <p className='text-2xl text-black font-[Galang] tracking-wide-20 leading-loose border-t-2 border-black w-96'>Applicant's Signature</p>
            <p className='text-2xl text-black font-[Galang] tracking-wide-20 leading-loose border-t-2 border-black w-96'>Validated By</p>
            </div>
            <div className="curved-header"></div>
            
          </div>
        </div>
    </div>
  )
}
export default Campus