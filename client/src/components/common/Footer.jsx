import React from "react";

const Footer = () => {
  return (
    <footer className="mt-100 text-white z-50">
      <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Giới thiệu */}
        <div>
          <h3 className="text-lg font-bold mb-2">Về chúng tôi</h3>
          <p className="text-sm">
            Chúng tôi là nền tảng cung cấp giải pháp công nghệ hiện đại, giúp bạn khám phá và kết nối dễ dàng hơn mỗi ngày.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h3 className="text-lg font-bold mb-2">Liên kết nhanh</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Trang chủ</a></li>
            <li><a href="/about" className="hover:underline">Giới thiệu</a></li>
            <li><a href="/contact" className="hover:underline">Liên hệ</a></li>
            <li><a href="/privacy" className="hover:underline">Chính sách bảo mật</a></li>
          </ul>
        </div>

        {/* Cột 3: Mạng xã hội */}
        <div>
          <h3 className="text-lg font-bold mb-2">Kết nối với chúng tôi</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f text-xl hover:text-blue-400"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter text-xl hover:text-blue-400"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram text-xl hover:text-pink-400"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-xl hover:text-blue-300"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Công ty TNHH Công Nghệ. Mọi quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;
