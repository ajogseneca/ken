"use client";
import Navbar from "@/components/Navbar"; // Import Navbar

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-grow justify-center items-center">
        {/* About Card */}
        <div className="bg-gray-800 text-white p-12 rounded-lg shadow-xl w-1/2 max-w-3xl">
          <h2 className="text-4xl font-bold text-red-500 mb-6">About North American Kerala Esports</h2>
          <p className="text-xl text-gray-300 mb-6">
            Welcome to the North American Kerala Esports community! We are a passionate group of Kerala-based
            esports enthusiasts who have come together to celebrate and compete in the world of gaming. From friendly
            matches to large-scale tournaments, our mission is to provide a platform for gamers of all skill levels
            to connect, compete, and grow together. Whether you&apos;re a casual gamer or a competitive player, this community
            is the place for you to engage with like-minded individuals.
          </p>
          <p className="text-xl text-gray-300">
            With a focus on building a supportive and inclusive environment, we aim to bring the spirit of Kerala to the
            esports world, one game at a time. Join us in our journey to celebrate our culture, our love for gaming, and our
            drive to create unforgettable esports experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
