import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col-reverse lg:flex-row  w-full mt-16">
      <div className="left w-full mt-8 md:mt-8 ">
        <p className="mb-4 text-xl font-medium leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white  lg:tracking-wide">
        ━━Hello
        </p>
        <h3 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white  lg:tracking-widest">
          I’m Ganesh Golhar
        </h3>
        <p className="lg:tracking-widest my-2 py-2 ">Fullstack Developer</p>
        <p className="lg:tracking-widest my-2">
          I'm Ganesh Golhar, a dedicated Software Development Engineer, fueled
          by a fervent passion for full-stack development. Committed to better
          and continuous growth, I thrive as a self-learner in the ever-evolving
          world of technology.
        </p>
        <button
          type="button"
          class=" mt-5 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Resume
        </button>
        <button
          type="button"
          class= " mt-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Hire Me
        </button>
      </div>

      <div className="right w-full flex justify-center md:justify-end mb-6">
        <img
          className="rounded-full w-64 h-64 md:w-96 md:h-96 transition-all duration-300 hover:grayscale-0"
          src="/Ganeshimg.png"
          alt="image description"
        />
      </div>
    </div>
  );
}
