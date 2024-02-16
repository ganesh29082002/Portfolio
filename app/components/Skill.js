import React from 'react'

const skills = [
   
    { name: "NextJs", imgSrc: "./nextjs.png" },
    { name: "MERN Stack", imgSrc: "./MERN.png" },
    { name: "JavaScript", imgSrc: "javascript_image_uri.jpg" },
    { name: "PHP", imgSrc: "javascript_image_uri.jpg" },
    { name: "Sql", imgSrc: "html_image_uri.jpg" },
    { name: "Bootstrap", imgSrc: "html_image_uri.jpg" },
    { name: "Tailwind Css", imgSrc: "html_image_uri.jpg" },
    { name: " Redux", imgSrc: "html_image_uri.jpg" },


    
    // Add more skills as needed
  ];
export default function Skill() {
  return (
    <div className='mt-16 '>
       <p className='text-xl md:text-4xl tracking-normal lg:tracking-wide '>━━ Skill </p>
       <p className='text-lg md:text-2xl my-3 tracking-normal lg:tracking-wide'>
       Technologies i engage with
        </p>

        {/* cards for skill  */}
        
<div className="skill flex flex-wrap flex-col sm:flex-row mt-14 justify-center items-center overflow-auto ">

{skills.map((skill, index) => (
        <div className="w-44 mx-4 my-4 h-56 flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
          <div className="flex flex-col items-center justify-center pb-4">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={skill.imgSrc} alt={`${skill.name} image`} />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{skill.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.name} skill</span>
          </div>
        </div>
      ))}

</div>


    </div>
  )
}
