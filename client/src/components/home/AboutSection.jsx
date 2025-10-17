import SponsorSection from "../common/Section/SponsorSection";
import Title from "../common/Title";
import LiquidButtonLink from "../common/LiquidButtonLink";

const AboutSection = () => {
  return (
    <section className="mt-20">
      <div className="relative z-10 container mx-auto px-4 md:px-0">
        {/* Nội dung giới thiệu */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          {/* Cột trái: tiêu đề và nút */}
          <div className="flex-1 flex flex-col gap-4" data-aos="fade-right">
            <Title
              text=""
              highlight="Về chúng tôi"
              align="left"
              size="text-md"
              uppercase={true}
            />
            <Title
              text="Chúng tôi là"
              highlight="T Shine Band"
              align="left"
              size="text-4xl"
              uppercase={true}
            />
            <div>
              <LiquidButtonLink text="Thư viện" to="/library" bgColor="bg-indigo-600" />
            </div>
          </div>

          {/* Cột phải: đoạn giới thiệu */}
          <div
            className="flex-1 text-white text-base sm:text-lg md:text-xl leading-relaxed"
            data-aos="fade-left"
          >
            <p className="mb-2">
              T Shine Band là nhóm nhạc trẻ đầy đam mê, mang trong mình năng lượng bùng nổ và tinh thần sáng tạo không ngừng.
            </p>
            <p className="mb-2">
              Chúng tôi kết hợp giữa âm nhạc hiện đại và cảm xúc chân thật để tạo nên những giai điệu chạm đến trái tim người nghe.
            </p>
            <p>
              Hành trình của chúng tôi là sự kết nối, truyền cảm hứng và lan tỏa tình yêu âm nhạc đến mọi người.
            </p>
          </div>
        </div>

        {/* Hình ảnh minh họa */}
        <div
          className="w-full h-[50vh] relative overflow-hidden group rounded-md"
          data-aos="zoom-in"
        >
          <img
            src="https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg"
            alt="T Shine Band"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full relative">
              <div className="absolute left-1/2 top-1/2 w-0 h-0 bg-white opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[35] transition-transform duration-700 ease-out blur-[100px]"></div>
            </div>
          </div>
        </div>

        {/* Nhà tài trợ */}
        <div data-aos="fade-up">
          <SponsorSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
