

export default function ContactUs() {
  return (
    <div className="mt-16">
    <p className="text-xl md:text-4xl tracking-normal lg:tracking-wide ">
      ━━ Contact{" "}
    </p>
    <p className="text-lg md:text-2xl my-3 tracking-normal lg:tracking-wide">
    Contact With Me !
    </p>
 <div className="flex flex-row md:flex-row ">

 
      <div className="left w-full flex flex-col  justify-center">
        <p className=' my-3 tracking-wide md:text-xl'>

      <i class="fa-solid fa-earth-americas "></i> <span> Planet earth</span>
        </p>
        <p className='my-3 tracking-wide md:text-xl'>
        <i class="fa-regular fa-envelope "></i> ganesh.golhar35@gmail.com
        </p>

        <div className='space-x-2 space-y-4 md:text-xl'>
        <i class="fa-brands fa-linkedin"></i>  <i class="fa-brands fa-instagram"></i>  <i class="fa-brands fa-github"></i>  <i class="fa-solid fa-envelope"></i>
          
        </div>
       
      </div>
 <div className="right  w-full" >
<form class="max-w-sm mx-auto bottom-1 w-full">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="enter your name" required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="massage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
    <input type="text" id="message" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="enter your message " required />
  </div>

  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Message Me</button>
</form>

      </div>
      </div>
    </div>
  )
}
