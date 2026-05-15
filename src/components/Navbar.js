import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 border-b bg-black/90 backdrop-blur-md sticky top-0 z-50">

      {/* LOGO */}
      <img
  src={logo}
  alt="Task2Earn Logo"
  className="h-12 w-auto"
/>

      {/* NAVIGATION */}
      <div className="flex gap-4 md:gap-8 items-center flex-wrap justify-end">

        <Link
          to="/"
          className="text-sm md:text-base text-white hover:text-gray-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-sm md:text-base text-white hover:text-gray-300"
        >
          About
        </Link>

        <Link
          to="/faq"
          className="text-sm md:text-base text-white hover:text-gray-300"
        >
          FAQ
        </Link>

        <Link
          to="/contact"
          className="text-sm md:text-base text-white hover:text-gray-300"
        >
          Contact
        </Link>

        <Link to="/waitlist">

          <button className="bg-black text-white px-4 py-2 md:px-5 md:py-2 rounded-xl text-sm md:text-base">
            Download App
          </button>

        </Link>

      </div>

    </nav>
  );
}