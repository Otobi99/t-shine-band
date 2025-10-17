import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white z-50 pt-20 pb-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Giới thiệu */}
        <div>
          <Logo/>
          <h3 className="text-lg font-bold mb-2">Về chúng tôi</h3>
          <p className="text-sm leading-relaxed text-white/80">
            Chúng tôi là nền tảng cung cấp giải pháp công nghệ hiện đại, giúp bạn khám phá và kết nối dễ dàng hơn mỗi ngày.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h3 className="text-lg font-bold mb-2">Liên kết nhanh</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline text-white/80">Trang chủ</a></li>
            <li><a href="/about" className="hover:underline text-white/80">Giới thiệu</a></li>
            <li><a href="/contact" className="hover:underline text-white/80">Liên hệ</a></li>
            <li><a href="/privacy" className="hover:underline text-white/80">Chính sách bảo mật</a></li>
          </ul>
        </div>

        {/* Cột 3: Mạng xã hội */}
        <div>
          <h3 className="text-lg font-bold mb-2">Kết nối với chúng tôi</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-blue-300 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Công ty TNHH 24hCoding. Mọi quyền được bảo lưu. liên hệ: 077.6980.269
      </div>
    </footer>
  );
};

export default Footer;
