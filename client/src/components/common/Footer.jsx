import { FaFacebookF, FaYoutube, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white bg-blue-900 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
        {/* Logo & Slogan */}
        <div className="flex flex-col items-start">
          <img src="/logo-tsb.png" alt="T Shine Band" className="w-20 h-20 mb-4 drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-2">T Shine Band</h3>
          <p className="text-sm text-blue-100">
            Âm nhạc là ánh sáng. Chúng tôi thắp sáng mọi sân khấu bằng cảm xúc và đam mê.
          </p>
        </div>

        {/* Liên hệ */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Liên hệ đặt show</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-300" /> 0909 123 456
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-300" /> booking@tshineband.vn
            </li>
            <li>Địa chỉ: TP. Hồ Chí Minh & Tây Ninh</li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Kết nối với chúng tôi</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaFacebookF className="text-white text-xl hover:text-blue-300" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaYoutube className="text-white text-xl hover:text-red-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaInstagram className="text-white text-xl hover:text-pink-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-blue-200 mt-10 border-t border-blue-700 pt-6">
        © 2025 T Shine Band. All rights reserved.
      </div>
    </footer>
  );
}
