import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Thông tin liên hệ */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Liên hệ</h3>
          <p className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2 text-red-500" /> 0987 654 321
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-red-500" /> info@tshineband.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:text-white transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Menu nhanh */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Điều hướng</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-red-500 transition">Trang chủ</Link></li>
            <li><Link to="/members" className="hover:text-red-500 transition">Thành viên</Link></li>
            <li><Link to="/gallery" className="hover:text-red-500 transition">Thư viện</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Giới thiệu */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">T Shine Band</h3>
          <p className="text-sm leading-relaxed">
            Chúng tôi là một nhóm nhạc trẻ đầy nhiệt huyết, mang đến những giai điệu sôi động và cảm xúc cho khán giả khắp nơi. Hãy kết nối với chúng tôi để không bỏ lỡ những buổi biểu diễn đặc biệt!
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {currentYear} T Shine Band. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
