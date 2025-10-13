import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import PerformanceGallery from "../../components/section/PerformanceGallery";

const categories = [
  "Tất cả",
  "Acoustic",
  "Ballad",
  "EDM",
  "Cover",
  "Live Show",
  "Studio Session",
];

const videos = [
  {
    title: "Ôm em được không",
    embedId: "qe0R1Fv29-c",
    category: "Ballad",
    vertical: true,
  },
  {
    title: "We don't talk anymore",
    embedId: "F6Yg_3GCpBY",
    category: "Cover",
    vertical: true,
  },
  {
    title: "Thủy Thần",
    embedId: "Tg179-k6s90",
    category: "EDM",
    vertical: false,
  },
  {
    title: "Mây và Núi - Live",
    embedId: "xXg47XO3pNs",
    category: "Live Show",
    vertical: false,
  },
  {
    title: "Hold My Hand - Studio",
    embedId: "YxY8zYxGQ9E",
    category: "Studio Session",
    vertical: true,
  },
];

export default function Library() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredVideos =
    activeCategory === "Tất cả"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <>
      <section className="min-h-screen container mx-auto px-0 mt-30">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left: Category */}
          <aside className="md:col-span-1">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 title-font">Thể loại nhạc</h2>
            <ul className="space-y-3">
              {categories.map((cat, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                      activeCategory === cat
                        ? "bg-blue-700 text-white shadow-md"
                        : "text-blue-700 hover:bg-blue-200"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right: Video Grid */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 title-font">
              🎬 Video biểu diễn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden group"
                >
                  <div
                    className={`relative ${
                      video.vertical ? "aspect-[9/16]" : "aspect-video"
                    }`}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
                      {video.category}
                    </div>
                  </div>
                  <div className="p-4 text-blue-800 font-medium text-sm flex items-center justify-between">
                    <span>{video.title}</span>
                    <FaPlay className="text-blue-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-20 px-6 md:px-12 border-t border-blue-200">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4 title-font">📸 Hình ảnh biểu diễn</h2>
          <p className="text-blue-600 text-lg max-w-2xl mx-auto">
            Những khoảnh khắc sân khấu, hậu trường và cảm xúc thật sự của T Shine Band qua các sự kiện lớn nhỏ.
          </p>
        </div>
        <PerformanceGallery />
      </section>
    </>
  );
}
