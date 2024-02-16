import React from "react";

export default function Experience() {
  return (
    <div className="mt-16">
      <p className="text-xl md:text-4xl tracking-normal lg:tracking-wide ">
        ━━ Experience{" "}
      </p>
      <p className="text-lg md:text-2xl my-3 tracking-normal lg:tracking-wide">
        Prior experience knowledge
      </p>

      <div className="experience flex justify-center mt-14">
        <div className=" w-full md:w-[900px] p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <p className="text-lg md:text-xl   font-medium tracking-normal lg:tracking-wide ">
            Leapot Technologies{" "}
          </p>
          <p className="text-sm md:text-base  my-3 tracking-normal lg:tracking-wide">
            Full Stack Developer Intern
          </p>

          <p>
            My responsibilities involve developing backend functionalities for
            our LMS using Node.js and Express.js, ensuring smooth communication
            between frontend and backend. I design and implement NoSQL database
            structures for efficient data management within the system,
            prioritizing performance and scalability. <br /> Additionally, I
            integrate secure Google authentication features via Firebase,
            enhancing the platform's security measures and protecting user data
            from unauthorized access.
          </p>
          <div className="mt-4 flex flex-wrap justify-center">
            <span class="bg-blue-100  mb-3 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Default
            </span>
            <span class="bg-gray-100 mb-3 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Dark
            </span>

            <span class="bg-yellow-100 mb-3 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Yellow
            </span>
            <span class="bg-indigo-100 mb-3 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
              Indigo
            </span>
            <span class="bg-purple-100 mb-3 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              Purple
            </span>
          </div>

          <button
            type="button"
            class=" mt-5 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            GitHub
          </button>
          <button
            type="button"
            class=" mt-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Go to site
          </button>
        </div>
      </div>
    </div>
  );
}
