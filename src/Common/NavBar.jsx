import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/image/Dhruv_Logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white py-4 px-6 rounded-xl w-[98%] mx-auto mt-2 relative shadow-lg shadow-purple-900/30">
      <div className="flex items-center justify-between">
        <img
          src={Logo}
          alt="Dhruv Developer Logo"
          className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-purple-400 shadow-md"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-2xl font-semibold">
            <li>
              <Link to="/" className="no-underline hover:text-pink-400 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="no-underline hover:text-blue-400 transition-colors duration-200">About Me</Link>
            </li>
            <li>
              <Link to="/projects" className="no-underline hover:text-cyan-400 transition-colors duration-200">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="no-underline hover:text-yellow-300 transition-colors duration-200">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-[#121244] via-[#1a1a5c] to-[#3b0764] p-4 z-40 rounded-b-xl shadow-lg shadow-purple-900/30 animate-fade-in">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="no-underline hover:text-pink-400 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="no-underline hover:text-blue-400 transition-colors duration-200">About Me</Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)} className="no-underline hover:text-cyan-400 transition-colors duration-200">Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="no-underline hover:text-yellow-300 transition-colors duration-200">Contact Us</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
