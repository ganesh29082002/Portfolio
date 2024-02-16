import React from 'react'

export default function AboutUs() {
  return (
    <div className='mt-16'>
       <p className='text-xl md:text-4xl tracking-normal lg:tracking-wide '>━━ About </p>
        <p className='text-lg md:text-2xl my-3 tracking-normal lg:tracking-wide'>
        Let's find more about me
        </p>
        
        <div className='flex mt-14 flex-col md:flex-row '>
        
        {/* this is for left div  */}
        <div className="left w-full">
   <img src="/aboutusimg.png" alt="" />
        </div>
        {/* this is for right div  */}
        <div className="right justify-end  w-full">
        <p className='text-lg md:text-4xl text-center md:text-left tracking-normal lg:tracking-wide '>Software Development Engineer </p>
        <p className="lg:tracking-widest my-2 py-2 text-center md:text-left md:text-xl ">Fullstack Developer</p>
        <p className=' text-sm md:text-lg mt-3 text-center md:text-left lg:tracking-widest  '>
        Aspiring software Developer with a fervent interest in Full Stack Web Development, I enjoy working on the web and making sure it continues to be a place for everyone and our creative, personal, and weird passions.

I experiment with the web as a creative medium. This here portfolio changes each year in pursuit of learning and using web technology in unexpected ways.
        </p>
        </div>

        </div>
        <div className=' hidden md:flex md:justify-center  md:block'>
        <img src="coading.png" className='opacity-25 justify-center w-1/2 h-60 ' alt="" />

        </div>
      
    </div>
  )
}


