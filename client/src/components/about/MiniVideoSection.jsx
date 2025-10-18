import { useState } from "react";

const musicTabs = [
    {
        label: "Nhạc Việt",
        description:
            "Nhạc Việt mang đậm chất trữ tình, gần gũi với văn hóa và cảm xúc người Việt. Band thể hiện các ca khúc nổi tiếng theo phong cách Acoustic mộc mạc.",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
        label: "US / UK",
        description:
            "Dòng nhạc quốc tế với các bản hit US/UK được phối lại theo phong cách riêng, tạo cảm giác mới mẻ nhưng vẫn giữ được tinh thần nguyên bản.",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
        label: "Nhạc tình kiểu V",
        description:
            "Những bản tình ca sâu lắng, nhẹ nhàng, phù hợp cho không gian lãng mạn như tiệc cưới, hẹn hò hay sự kiện riêng tư.",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    },
];

const MiniVideoSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const { label, description, videoUrl } = musicTabs[activeTab];

    return (
        <section className="mt-12">
            <div className="container mx-auto px-4 md:px-0 relative ">
                {/* Tabs */}
                <div className="flex space-x-4 mb-6">
                    {musicTabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 rounded-full font-semibold transition ${activeTab === index
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left: Description */}
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-4">{label}</h3>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>

                    {/* Right: Video */}
                    <div className="aspect-video w-full">
                        <iframe
                            src={videoUrl}
                            title={`Video ${label}`}
                            className="w-full h-full rounded-lg shadow-md"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MiniVideoSection