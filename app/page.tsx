
"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar"; // Importing the Navbar component
import { TbBrandLinktree } from "react-icons/tb";

export default function IndexPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(undefined); // Change null to undefined

  // Function to change the slide and reset the timer
  const changeSlide = (direction: number) => {
    const newSlide = (currentSlide + direction + slides.length) % slides.length;
    setCurrentSlide(newSlide);
    resetTimer();
  };

  // Automatically change the slide every 3 seconds
  const startTimer = () => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    setIntervalId(id); // Set the intervalId to the valid timeout id
  };

  // Reset the interval timer
  const resetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the existing interval
    }
    startTimer(); // Start a new interval
  };

  // Start the timer when the component mounts
  useEffect(() => {
    startTimer();
    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Cleanup the interval on unmount
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar Component Used Here */}
      <Navbar /> {/* This is where the Navbar component is included */}

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        {/* Carousel & Social Card */}
        <div className="grid grid-cols-3 gap-4" style={{ marginTop: '2cm' }}>
          {/* Carousel */}
          <div className="col-span-2 relative flex justify-center items-center" style={{ height: '400px' }}>
            <Image
              src={slides[currentSlide]}
              alt="Carousel Slide"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100"
                onClick={() => changeSlide(-1)} // Previous slide
              >
                &#8249; {/* Left arrow */}
              </button>
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100"
                onClick={() => changeSlide(1)} // Next slide
              >
                &#8250; {/* Right arrow */}
              </button>
            </div>
          </div>

          {/* Social & QR Code */}
          <div className="p-6 text-center flex flex-col items-center bg-gray-800 shadow-md rounded-lg w-full">
            <Image
              src="/qr.svg"
              alt="QR Code"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="mt-4 flex space-x-6 justify-center text-4xl">
              {/* WhatsApp */}
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green-400 cursor-pointer hover:text-green-500" size={30} />
              </a>
              
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-500 cursor-pointer hover:text-blue-600" size={30} />
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/j/AbYTZcf4gf3FVPV4/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 cursor-pointer hover:text-pink-600" size={30} />
              </a>
              
              {/* Discord */}
              <a href="https://discord.gg/vwswNrmJpb" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-purple-500 cursor-pointer hover:text-purple-600" size={30} />
              </a>

              {/* Linktree */}
              <a href="https://linktr.ee/ken.gg" target="_blank" rel="noopener noreferrer">
                <TbBrandLinktree className="text-green-500 cursor-pointer hover:text-gray-700" size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-4 mt-16">
          <div className="p-4 bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-red-500">Upcoming Tournaments</h2>
            <p className="text-gray-300">Details about upcoming tournaments...</p>
          </div>

          <div className="p-4 bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-red-500">Latest News</h2>
            <p className="text-gray-300">Latest updates and news...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
