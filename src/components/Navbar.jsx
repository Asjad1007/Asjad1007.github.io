import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation();
  const currentPath = location.pathname;
  const linkClass = (path) =>
    `hover:text-blue-400 transition ${
      currentPath === path ? "border-b-2 border-blue-400" : ""
    }`;
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/0 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide">
          Asjad Nirban
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link to="/experience" className={linkClass("/experience")}>
            Experience
          </Link>
          <Link to="/publications" className={linkClass("/publications")}>
            Publications
          </Link>
          {/* <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link> */}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium bg-black/60 backdrop-blur-md">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            to="/experience"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Experience
          </Link>
          <Link
            to="/publications"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Publications
          </Link>
        </div>
      )}
    </header>
  );
}
