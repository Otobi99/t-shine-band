import { FaGuitar, FaBirthdayCake, FaHeart, FaBuilding, FaUsers } from 'react-icons/fa';
import Title from "../common/Title";

const performances = [
  {
    icon: <FaHeart className="text-white text-4xl" />,
    title: 'Tiệc cưới & hỏi',
    description: 'Biểu diễn Acoustic lãng mạn, tinh tế cho lễ cưới, hỏi, tạo không gian ấm cúng và cảm xúc.',
  },
  {
    icon: <FaBirthdayCake className="text-white text-4xl" />,
    title: 'Sinh nhật & private party',
    description: 'Mang đến âm nhạc mộc mạc, gần gũi cho các buổi tiệc sinh nhật, họp mặt gia đình, bạn bè.',
  },
  {
    icon: <FaBuilding className="text-white text-4xl" />,
    title: 'Sự kiện doanh nghiệp',
    description: 'Biểu diễn chuyên nghiệp cho gala dinner, khai trương, hội nghị, team building và các event công ty.',
  },
  {
    icon: <FaUsers className="text-white text-4xl" />,
    title: 'Biểu diễn định kỳ',
    description: 'Nhận show hằng tuần tại quán café, nhà hàng, rooftop, tạo điểm nhấn âm nhạc cho không gian.',
  },
];
export default function ServicesSection() {
  return (
    <section className="mt-16">
      <div className="container relative mx-auto px-4 md:px-0">
        <Title
          text="Các dịch vụ biểu diễn Acoustic"
          highlight=""
          align="center"
          size="text-4xl"
          uppercase={true}
        />
        <p className="text-white text-center mb-12 max-w-3xl mx-auto">
          Chúng tôi cung cấp đa dạng dịch vụ biểu diễn Acoustic phù hợp với mọi loại hình sự kiện — từ tiệc cưới đến biểu diễn định kỳ tại các địa điểm sang trọng.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {performances.map((item, index) => (
            <div
              key={index}
              data-aos="fade-in"
              className="group relative p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border-2 border-transparent section-card"
            >
              <div className="mb-4 text-white">{item.icon}</div>
              <Title
                  text={item.title}
                  highlight=""
                  align="left"
                  size="text-md"
                  uppercase={true}
                />
              <p className="text-gray-300">{item.description}</p>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-700 group-hover:animate-spin-slow pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
