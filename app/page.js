import Image from "next/image";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Service from "./components/Service";
import ContactUs from "./components/ContactUs";

export default function MainPage() {
  return (
    <main className="dark:bg-gray-900  bg-gray-900 flex min-h-screen flex-col  p-9 md:p-24 lg:px-32">
     <Home/>
     <AboutUs/>
     <Skill/>
     <Experience/>
     <Projects/>
     <Service/>
     <ContactUs/>
    </main>
  );
}
