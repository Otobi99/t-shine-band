export default function IntroSection() {
  return (
    <section className="container mx-auto px-4 md:px-0 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Logo với hiệu ứng nổi bật */}
        <div className="relative flex justify-center items-center">
          {/* Ánh sáng nền */}
          <div className="absolute w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 animate-logoPulse"></div>

          {/* Logo chính */}
          <img
            src="/logo-tsb.png"
            alt="T Shine Band Logo"
            className="w-64 h-64 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 transition duration-500 z-10"
          />
        </div>

        {/* Right: Content */}
        <div className="text-blue-800">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 title-font">
            Chúng tôi là <span className="text-blue-600">T Shine Band</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            T Shine Band là một nhóm nhạc trẻ trung, năng động và đầy đam mê. Chúng tôi mang đến những giai điệu sống động, cảm xúc và kết nối mọi người qua âm nhạc. Với sự kết hợp giữa các thành viên tài năng và phong cách biểu diễn độc đáo, T Shine Band luôn sẵn sàng thắp sáng mọi sân khấu.
          </p>
          <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-md hover:shadow-xl transition">
            Khám phá thêm →
          </button>
        </div>
      </div>
    </section>
  );
}
