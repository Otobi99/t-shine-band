import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaImages, FaEnvelope } from "react-icons/fa";
import LiquidButton from "./LiquidButton";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const linkClass =
    "flex items-center gap-2 uppercase font-bold text-md hover:underline transition duration-300";
  const activeClass =
    "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        {/* Nút menu mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : "text-white"}`}>
            Trang chủ
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : "text-white"}`}>
             Giới thiệu
          </NavLink>
          <NavLink to="/library" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : "text-white"}`}>
           Thư viện
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : "text-white"}`}>
            Liên hệ
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <LiquidButton text="Khám phá ngay" />
        </div>
      </div>

      {/* Overlay khi menu mở */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-60"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menu mobile trượt từ phải */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-64 bg-blue-800/90 backdrop-blur-md text-white z-70 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <button
            className="text-white text-2xl absolute top-4 right-4"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => `${linkClass} ${isActive ? activeClass : "text-white"} block`}>
            <FaHome /> Trang chủ
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => `${linkClass} ${isActive ? activeClass : "text-white"} block`}>
            <FaInfoCircle /> Giới thiệu
          </NavLink>
          <NavLink to="/library" onClick={toggleMenu} className={({ isActive }) => `${linkClass} ${isActive ? activeClass : "text-white"} block`}>
            <FaImages /> Thư viện
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => `${linkClass} ${isActive ? activeClass : "text-white"} block`}>
            <FaEnvelope /> Liên hệ
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
