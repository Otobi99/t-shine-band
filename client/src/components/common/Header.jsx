import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PublicNavList from '../../constants/PublicNavList';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-5 ${
        scrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-white/30 backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-700">T Shine Band</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 font-semibold text-gray-800">
          {PublicNavList.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`relative transition duration-200 ${
                location.pathname === item.path
                  ? 'text-blue-700 font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500'
                  : 'hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center space-x-2 text-sm font-bold border border-white/30 bg-white/40 backdrop-blur-md rounded-full px-3 py-1 shadow-sm">
          <button className="hover:text-blue-600">EN</button>
          <span className="text-gray-400">|</span>
          <button className="hover:text-blue-600">VI</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md px-4 py-3 space-y-2">
          {PublicNavList.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`block font-semibold transition ${
                location.pathname === item.path
                  ? 'text-blue-700 font-bold'
                  : 'text-gray-800 hover:text-blue-600'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex space-x-3 pt-2 text-sm font-bold">
            <button className="hover:text-blue-600">EN</button>
            <button className="hover:text-blue-600">VI</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
