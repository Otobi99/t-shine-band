import LiquidButtonLink from "../common/LiquidButtonLink";
import ViewMoreButton from "../common/ViewMoreButton";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 brightness-[0.85]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dttqah17o/image/upload/v1760667489/t-shine-hero_foq1ur.jpg')",
        }}
      ></div>

      {/* Lớp phủ gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/50 to-black/80 z-0"></div>

      {/* Nội dung */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 uppercase tracking-wide drop-shadow-lg">
          T Shine Band
        </h1>
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          Chúng tôi là nhóm nhạc trẻ đầy nhiệt huyết, mang đến những giai điệu bùng nổ và cảm xúc chân thật.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 w-full">
          <LiquidButtonLink text="Thư viện" to="/library" bgColor="bg-indigo-600" />
          <LiquidButtonLink text="Booking" to="/booking" bgColor="bg-teal-600" />
        </div>
      </div>

      {/* Nút xem thêm */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <ViewMoreButton />
      </div>
    </section>
  );
};

export default HeroSection;
