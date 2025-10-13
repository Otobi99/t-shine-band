import React from "react";
import { FaMusic, FaHeart, FaGlassCheers, FaBirthdayCake, FaBuilding, FaStar } from "react-icons/fa";

const services = [
  {
    title: "Coffee Acoustic Cố Định",
    description: "Biểu diễn định kỳ tại các quán cà phê với phong cách acoustic nhẹ nhàng, kết nối cảm xúc và không gian.",
    icon: <FaMusic className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "Tiệc cưới & hỏi",
    description: "Mang đến những bản tình ca lãng mạn, du dương trong ngày trọng đại của bạn.",
    icon: <FaHeart className="text-pink-500 text-4xl mb-4" />,
  },
  {
    title: "YEP / Tất niên / Tân niên",
    description: "Không khí sôi động, bùng nổ cảm xúc cho các buổi tiệc công ty, hội nhóm cuối năm và đầu năm.",
    icon: <FaGlassCheers className="text-yellow-500 text-4xl mb-4" />,
  },
  {
    title: "Sinh nhật / Party",
    description: "Giai điệu vui tươi, trẻ trung và đầy năng lượng cho các buổi tiệc sinh nhật, party cá nhân.",
    icon: <FaBirthdayCake className="text-red-400 text-4xl mb-4" />,
  },
  {
    title: "Khai trương / Sự kiện doanh nghiệp",
    description: "Tạo điểm nhấn chuyên nghiệp và thu hút khách mời bằng âm nhạc sân khấu chất lượng.",
    icon: <FaBuilding className="text-indigo-500 text-4xl mb-4" />,
  },
  {
    title: " Event / Show diễn đặc biệt",
    description: "Biểu diễn theo concept riêng, phối hợp ánh sáng, âm thanh và phong cách trình diễn độc đáo.",
    icon: <FaStar className="text-yellow-400 text-4xl mb-4" />,
  },
];

export default function Services() {
  return (
    <section className="container mx-auto px-4 md:px-0 mt-30 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 title-font">Dịch vụ biểu diễn của T Shine Band</h2>
        <p className="text-blue-600 text-lg max-w-2xl mx-auto">
          Chúng tôi mang âm nhạc đến mọi không gian — từ sân khấu lớn đến những khoảnh khắc riêng tư đầy cảm xúc.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 p-6 text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p className="text-blue-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/contact">
          <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-md hover:shadow-xl transition">
            Đặt dịch vụ ngay →
          </button>
        </a>
      </div>
    </section>
  );
}
