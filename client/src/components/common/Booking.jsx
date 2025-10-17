import SponsorSection from "../common/Section/SponsorSection";
import Title from "../common/Title";
import LiquidButtonLink from "../common/LiquidButtonLink";

const Booking = () => {
  return (
    <section className="my-20">
      <div className="relative z-10 container mx-auto px-4 md:px-0">
        {/* Nội dung giới thiệu */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          {/* Cột trái: tiêu đề và mô tả */}
          <div className="flex-1 flex flex-col gap-6" data-aos="fade-right">
            <Title
              text="Đặt lịch biểu diễn"
              highlight="T Shine Band"
              align="left"
              size="text-4xl"
              uppercase={true}
            />
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
              T Shine Band mang đến không gian âm nhạc sống động, đầy cảm xúc cho sự kiện của bạn — từ quán cà phê, tiệc riêng, đến sân khấu lớn. Hãy để âm nhạc kết nối mọi người và tạo nên những khoảnh khắc không thể quên.
            </p>
          </div>

          {/* Cột phải: nút CTA */}
          <div
            className="flex-1 flex justify-center md:justify-end"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <LiquidButtonLink
              text="Đặt lịch ngay"
              to="/library"
              bgColor="bg-indigo-600"
            />
          </div>
        </div>

        {/* Optional: logo nhà tài trợ hoặc đối tác */}
        <div data-aos="fade-up" data-aos-delay="400">
          <SponsorSection />
        </div>
      </div>
    </section>
  );
};

export default Booking;
