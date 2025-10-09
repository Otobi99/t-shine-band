import { FaMusic, FaHeadphones, FaLightbulb, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AboutBand = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start bg-white container mx-auto px-4 md:px-0 gap-8 mt-10">
      {/* Left: Band Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg"
          alt="Band performing live"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="md:w-1/2 w-full space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Về Chúng Tôi</h1>
        <p className="text-gray-600">
          Chúng tôi là <strong>T-Shine Band</strong> – một nhóm nghệ sĩ chuyên nghiệp, đam mê âm nhạc và tận tâm với từng buổi biểu diễn. Với phong cách trình diễn cuốn hút, kỹ thuật âm thanh hiện đại và khả năng biến hóa đa dạng từ acoustic đến EDM, chúng tôi mang đến trải nghiệm âm nhạc sống động cho mọi sự kiện.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-1">Sứ Mệnh</h2>
          <p className="text-gray-600">
            Lan tỏa năng lượng tích cực qua âm nhạc, nâng tầm trải nghiệm sự kiện và tạo nên những khoảnh khắc khó quên cho khách hàng.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-1">Dịch Vụ</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2"><FaMusic className="text-orange-700" /> Biểu diễn theo yêu cầu (chủ đề, thể loại)</li>
            <li className="flex items-center gap-2"><FaHeadphones className="text-orange-700" /> Âm thanh – ánh sáng chuyên nghiệp</li>
            <li className="flex items-center gap-2"><FaLightbulb className="text-orange-700" /> Tư vấn kịch bản âm nhạc sự kiện</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Liên Hệ</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-orange-700" /> Hotline: 0767.xxx.xxx</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-orange-700" /> Email: booking@tenband.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-orange-700" /> TP. Hồ Chí Minh / Tây Ninh / Hà Nội</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutBand;
