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
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-transform duration-500 bg-white/10 backdrop-blur-md ${
          showHeader || menuOpen ? "translate-y-0" : "-translate-y-full"
        } ${menuOpen ? "bg-blue-600" : "bg-transparent"} ${
          menuOpen ? "md:top-0 top-auto bottom-0" : "top-0"
        }`}
      >
        <div className="relative border-b border-white">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo />

            {/* Nút menu cho mobile */}
            <button
              className="md:hidden text-white text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>

            {/* Menu điều hướng desktop */}
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-white uppercase font-bold text-md hover:underline">Trang chủ</a>
              <a href="/about" className="text-white uppercase font-bold text-md hover:underline">Giới thiệu</a>
              <a href="/contact" className="text-white uppercase font-bold text-md hover:underline">Liên hệ</a>
            </nav>

            <div className="hidden md:block">
              <LiquidButton text="Khám phá ngay" onClick={handleClick} />
            </div>
          </div>

          {/* Menu điều hướng mobile */}
          {menuOpen && (
            <div className="md:hidden bg-blue-600 text-white px-4 pb-4 space-y-3 animate-fade-in">
              <a href="/" className="block uppercase font-bold text-md hover:underline">Trang chủ</a>
              <a href="/about" className="block uppercase font-bold text-md hover:underline">Giới thiệu</a>
              <a href="/contact" className="block uppercase font-bold text-md hover:underline">Liên hệ</a>
              <LiquidButton text="Khám phá ngay" onClick={handleClick} />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
