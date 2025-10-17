import LiquidButton from "./LiquidButton";
import Logo from "./Logo";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => {
    console.log("Nút đã được bấm!");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Cuộn xuống
        setShowHeader(false);
      } else {
        // Cuộn lên
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative border-b border-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />

          {/* Nút menu cho mobile */}
          <button
            className="md:hidden text-black text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Menu điều hướng desktop */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white uppercase font-bold text-md transition">Trang chủ</a>
            <a href="/about" className="text-white uppercase font-bold text-md transition">Giới thiệu</a>
            <a href="/contact" className="text-white uppercase font-bold text-md transition">Liên hệ</a>
          </nav>

          <div className="hidden md:block">
            <LiquidButton text="Khám phá ngay" onClick={handleClick} />
          </div>
        </div>

        {/* Menu điều hướng mobile */}
        {menuOpen && (
          <div className="md:hidden bg-white text-black px-4 pb-4 space-y-3">
            <a href="/" className="block text-white uppercase font-bold text-md transition">Trang chủ</a>
            <a href="/about" className="block text-white uppercase font-bold text-md transition">Giới thiệu</a>
            <a href="/contact" className="block text-white uppercase font-bold text-md transition">Liên hệ</a>
            <LiquidButton text="Khám phá ngay" onClick={handleClick} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
