'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-cinzel">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <h1 className="text-3xl font-bold">A&G</h1>

        {/* Hamburger Icon */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu} aria-label="Menu Toggle">
          <FaBars />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 text-base font-quicksand uppercase">
          <li><a href="#story" onClick={closeMenu} className="hover:text-orange-500">Our Story</a></li>
          <li><a href="#stay" onClick={closeMenu} className="hover:text-orange-500">Travel & Stay</a></li>
          <li><a href="#registry" onClick={closeMenu} className="hover:text-orange-500">Promises</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-base font-quicksand uppercase">
            <li><a href="#story" onClick={closeMenu} className="hover:text-orange-500">Our Story</a></li>
            <li><a href="#stay" onClick={closeMenu} className="hover:text-orange-500">Travel & Stay</a></li>
            <li><a href="#registry" onClick={closeMenu} className="hover:text-orange-500">Promises</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
