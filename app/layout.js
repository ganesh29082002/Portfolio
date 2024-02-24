import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ganesh Golhar",
  description: "Ganesh Golhar final year computer engineering student live in wardha , web developer , mern stack , nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" rel="stylesheet" async/>
       </head>
      <body className={inter.className}>
        
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js" async />
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
