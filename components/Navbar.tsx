// app/components/Navbar.tsx
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
      <a href="/" className="text-xl font-bold text-red-500">KEN</a>
      <div className="space-x-6">
        <Link href="/tournaments" className="text-gray-300 hover:text-red-500">
          Tournaments
        </Link>
        {/* Use Link from Next.js for anchor navigation */}
        <Link href="/about" className="text-gray-300 hover:text-red-500">
          About
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-red-500">
          Contact
        </Link>
      </div>
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
    </nav>
  );
}
