import React, { useState } from "react";
import { Link } from "react-router-dom";

const featuredVideos = [
  {
    title: "Ôm em được không",
    thumbnail: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    embedId: "qe0R1Fv29-c",
  },
  {
    title: "We don't talk anymore",
    thumbnail: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    embedId: "F6Yg_3GCpBY",
  },
  {
    title: "Thủy Thần",
    thumbnail: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    embedId: "Tg179-k6s90",
  },
  {
    title: "Mây Và Núi - Live Cover",
    thumbnail: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    embedId: "xXg47XO3pNs",
  },
  {
    title: "Shine - MV Teaser",
    thumbnail: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    embedId: "-3cW-quGvo4",
  },
  {
    title: "Vỡ Tan",
    thumbnail: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    embedId: "cQ5VMeKGXhI",
  },
];

export default function FeatureVideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="container mx-auto px-4 md:px-0 mt-10 bg-none">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 title-font">Video nổi bật</h2>
        <p className="text-blue-600 text-lg max-w-2xl mx-auto">
          Những khoảnh khắc âm nhạc đáng nhớ từ T Shine Band — sân khấu, hậu trường và cảm xúc.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredVideos.map((video, index) => (
          <div
            key={index}
            className=" rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
            onClick={() => setActiveVideo(video.embedId)}
          >
            {activeVideo === video.embedId ? (
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : (
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
                  Xem video
                </div>
              </div>
            )}
            <div className="p-4 text-blue-800 font-medium text-sm">{video.title}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/library">
          <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-md hover:shadow-xl transition">
            Xem thêm video →
          </button>
        </Link>
      </div>
    </section>
  );
}
