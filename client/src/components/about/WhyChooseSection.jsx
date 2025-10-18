import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Title from "../common/Title";

const faqs = [
    {
        question: "Chúng tôi có kinh nghiệm biểu diễn ở đâu?",
        answer:
            "Chúng tôi đã biểu diễn tại hàng trăm sự kiện lớn nhỏ như tiệc cưới, sinh nhật, khai trương, hội nghị và các chương trình định kỳ tại café, nhà hàng, rooftop.",
    },
    {
        question: "Âm nhạc của chúng tôi có gì đặc biệt?",
        answer:
            "Phong cách Acoustic mộc mạc, tinh tế, kết hợp giữa cảm xúc và kỹ thuật. Mỗi buổi biểu diễn đều được cá nhân hóa theo không gian và đối tượng khán giả.",
    },
    {
        question: "Chúng tôi hỗ trợ gì ngoài biểu diễn?",
        answer:
            "Ngoài biểu diễn, chúng tôi hỗ trợ setup âm thanh, tư vấn playlist, sáng tác riêng cho sự kiện, và cung cấp nghệ sĩ theo yêu cầu.",
    },
    {
        question: "Có thể đặt lịch biểu diễn như thế nào?",
        answer:
            "Bạn có thể liên hệ trực tiếp qua hotline, fanpage hoặc form đặt lịch trên website. Chúng tôi phản hồi nhanh chóng và hỗ trợ tận tình.",
    },
];

const WhyChooseSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-16">
            <div className="container mx-auto px-0 md:px-4 relative grid md:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div data-aos="fade-right">
                    <Title
                        text="Vì sao nên chọn chúng tôi"
                        highlight=""
                        align="left"
                        size="text-4xl"
                        uppercase={true}
                    />
                    <p className="text-white mb-6">
                        Với đội ngũ nghệ sĩ chuyên nghiệp, phong cách âm nhạc tinh tế và kinh nghiệm biểu diễn đa dạng,
                        chúng tôi cam kết mang đến trải nghiệm Acoustic đẳng cấp cho mọi sự kiện.
                    </p>
                    <ul className="list-disc list-inside text-white space-y-2">
                        <li>Biểu diễn chuyên nghiệp cho tiệc cưới, sinh nhật, sự kiện doanh nghiệp</li>
                        <li>Âm nhạc mộc mạc, cảm xúc, phù hợp mọi không gian</li>
                        <li>Hỗ trợ setup âm thanh, tư vấn playlist, sáng tác riêng</li>
                        <li>Đặt lịch dễ dàng, phản hồi nhanh chóng</li>
                    </ul>
                </div>

                {/* Right FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            className="border border-blue-200 rounded-lg overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center px-4 py-3 bg-blue-50 hover:bg-blue-100 transition"
                            >
                                <span className="font-semibold text-blue-700">{item.question}</span>
                                <FaChevronDown
                                    className={`text-blue-700 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`px-4 text-gray-700 bg-white border-t border-blue-100 transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
                                    }`}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseSection