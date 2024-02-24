
const services = [
    { 
        name: "React Website", 
        imgSrc: "./reactjslogo.png", 
        description: "Dynamic and interactive websites using React for seamless user experiences." 
    },
    { 
        name: "Next JS Website", 
        imgSrc: "./nextjs.png", 
        description: "Server-rendered React applications for enhanced performance and SEO." 
    },
    { 
        name: "Fullstack Website", 
        imgSrc: "./fullstacklogo1-1.png", 
        description: "End-to-end development of web applications with frontend and backend integration." 
    },
    { 
        name: "Node JS Api", 
        imgSrc: "./API IMAG.png", 
        description: "Scalable and efficient APIs built with Node.js for seamless data exchange." 
    },
    { 
        name: "MERN WebApp", 
        imgSrc: "./MERN.png", 
        description: "Robust and modern web applications utilizing MongoDB, Express, React, and Node.js stack." 
    },
    { 
        name: "UI UX Design", 
        imgSrc: "./UX.png", 
        description: "Intuitive and visually appealing designs crafted to optimize user interactions and experiences." 
    }
];

export default function Service() {
  return (
    <div className="mt-16">
    <p className="text-xl md:text-4xl tracking-normal lg:tracking-wide ">
      ━━ Services{" "}
    </p>
    <p className="text-lg md:text-2xl my-3 tracking-normal lg:tracking-wide">
    Services that i offer
    </p>
      <div className="services flex justify-center flex-wrap mt-14">
      {services.map((service, index) => (
<div key={index} class="w-full max-w-sm bg-white border  mx-2 my-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-lg shadow- mt-2" src={service.imgSrc} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{service.name}</h5>
        <span class="text-sm text-center text-gray-500 dark:text-gray-400">{service.description}</span>
        <div class="flex mt-4 md:mt-6">
            <a href="#contact" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message Us</a>
        </div>
    </div>
</div>
      ))}


</div>

    </div>
  )
}
