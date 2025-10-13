import { FaMusic, FaUsers, FaHeadphones, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Âm nhạc chất lượng",
      description: "Chúng tôi mang đến những bản phối tinh tế, cảm xúc và phù hợp với mọi không gian biểu diễn.",
      icon: <FaMusic className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "Đội ngũ chuyên nghiệp",
      description: "T Shine Band gồm các thành viên giàu kinh nghiệm, đam mê và luôn cháy hết mình trên sân khấu.",
      icon: <FaUsers className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "Phong cách đa dạng",
      description: "Từ acoustic nhẹ nhàng đến EDM sôi động, chúng tôi linh hoạt theo yêu cầu của từng sự kiện.",
      icon: <FaHeadphones className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "Hỗ trợ tận tâm",
      description: "Chúng tôi đồng hành cùng bạn từ khâu chuẩn bị đến biểu diễn, đảm bảo mọi thứ diễn ra hoàn hảo.",
      icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-0 my-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 title-font">Vì sao nên chọn chúng tôi</h2>
        <p className="text-blue-600 text-lg max-w-2xl mx-auto">
          T Shine Band không chỉ là một nhóm nhạc — chúng tôi là người bạn đồng hành trong mọi khoảnh khắc âm nhạc của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {reason.icon}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{reason.title}</h3>
            <p className="text-blue-600 text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
        <div className="flex justify-center items-center mt-5">
            <Link to="/contact" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-md hover:shadow-xl transition">
               Book Band Ngay
            </Link>
        </div>
    </section>
  );
}
