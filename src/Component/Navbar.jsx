import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between items-center bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-bold">Mahesh</h1>
        {/* Menu icon shown only on small screens */}
        <img
          src="https://via.placeholder.com/150" // Replace with your actual menu icon URL
          alt="Menu"
          className="w-8 h-8 cursor-pointer md:hidden" // Hide on medium screens and larger
          onClick={toggleMenu}
        />
        {/* Full navbar for medium screens and larger */}
        <ul className="hidden md:flex space-x-4 text-white">
          <li>
            <Link
              className="hover:text-red-300"
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-300"
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-300"
              to="edu"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-300"
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-300"
              to="project"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-300"
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex flex-col bg-blue-500 text-white p-4 md:hidden">
          <li className="py-2">
            <Link
              className="hover:text-red-300"
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link
              className="hover:text-red-300"
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className="py-2">
            <Link
              className="hover:text-red-300"
              to="edu"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              Experience
            </Link>
          </li>
          <li className="py-2">
            <Link
              className="hover:text-red-300"
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li className="py-2">
            <Link
              className="hover:text-red-300"
              to="project"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li className="py-2">
            <Link
              className="hover:text-red-300"
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
