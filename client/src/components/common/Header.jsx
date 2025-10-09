import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/t-shine-logo.png';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/members', label: 'Thành viên' },
    { path: '/gallery', label: 'Thư viện' },
    { path: '/contact', label: 'Liên hệ' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolledDown(currentY > lastScrollY && currentY > 50);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isScrolledDown ? '-translate-y-[40px]' : 'translate-y-0'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm text-gray-700">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <FaPhoneAlt className="mr-1 text-red-500" />
              <a href="tel:+84987654321" className="hover:text-red-500">0987 654 321</a>
            </span>
            <span className="flex items-center">
              <FaEnvelope className="mr-1 text-red-500" />
              <a href="mailto:info@tshineband.com" className="hover:text-red-500">info@tshineband.com</a>
            </span>
          </div>
          <div className="flex items-center">
            <FaGlobe className="mr-2 text-red-500" />
            <select className="bg-transparent border-none outline-none">
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img
                  src={Logo}
                  alt="T Shine Band"
                  className="w-full h-full object-contain"
                />
              </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex flex-1 justify-end items-center space-x-6 text-gray-700 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition duration-300 hover:text-red-500 ${
                    isActive(item.path) ? 'text-red-500 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col items-start px-4 py-4 space-y-4 text-gray-700 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition duration-300 ${
                    isActive(item.path) ? 'text-red-500 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
