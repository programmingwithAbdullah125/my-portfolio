import React from "react"
import Link from "next/link"
import Image from "next/image"
export default function Header(){
    return(
        <div className="min-h-screen flex flex-col items-center bg-gray-200">

            {/* navbar */}
            <header className="w-full text-white p-4 bg bg-blue-600 flex justify-between">
                <div className="flex items-center">
                <Image src="/a2c.jpg"alt="myimage" width={50} height={50} className="rounded-full"/>
                <h1 className="font-bold text-4xl pl-4">Abdullah</h1>
                </div>
                <nav className="flex gap-4 items-center">
                   <Link href ="/" className="hover:text-gray-300 hover:scale-110 pl-1">Home</Link>
                  <Link href="/about" className="hover:text-gray-300 hover:scale-110 pl-1">About us</Link>
                    <Link href="/contact" className="hover:text-gray-300 hover:scale-110 pl-1">Contact us</Link>
                </nav>
            </header>
            {/* for image background video */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bgvideo.mp4"
          autoPlay
          loop
          muted
        ></video>
  
        {/* Overlay with profile image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <Image src="/a2c.jpg" alt="myImage" width={500} height={200} className="rounded-full border-4 border-gray-600 shadow-lg  hover:scale-110 ease-in-out transition duration-500"/>
        <h1 className=" text-4xl font-bold transition duration-500 ease-in-out transform hover:scale-110 items-center mt-10 ">Abdullah</h1>
        </div>
  
        {/* Background overlay (optional, for darker effect) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
      </div>
    )
  }
  