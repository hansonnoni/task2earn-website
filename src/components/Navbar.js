import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 border-b sticky top-0 bg-white z-50">

      <h1 className="text-2xl font-extrabold">
        Task2Earn
      </h1>

      <div className="hidden md:flex gap-8 items-center">

        <Link to="/" className="hover:text-gray-500">
          Home
        </Link>

        <Link to="/about" className="hover:text-gray-500">
          About
        </Link>

        <Link to="/faq" className="hover:text-gray-500">
          FAQ
        </Link>

        <Link to="/contact" className="hover:text-gray-500">
          Contact
        </Link>

        <button className="bg-black text-white px-5 py-2 rounded-xl">
          Download
        </button>

      </div>

    </nav>
  );
}