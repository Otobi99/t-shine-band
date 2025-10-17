import LiquidButtonLink from "../common/LiquidButtonLink";
import Title from "../common/Title";

const BandVideo = () => {
  return (
    <section className="mt-20 relative">
    <div className="ecg-wave"></div>
    <div className="ecg-wave"></div>
    <div className="ecg-wave"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-0">
        {/* Tiêu đề */}
        <div className="mb-10" data-aos="fade-up">
          <Title
            text="Khoảnh khắc"
            highlight="T Shine Band"
            align="center"
            size="text-4xl"
            uppercase={true}
          />
          <p
            className="text-center text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Những khoảnh khắc biểu diễn của T Shine Band không chỉ là âm nhạc — đó là sự kết nối, là cảm xúc thăng hoa giữa nghệ sĩ và khán giả. Hãy cùng chúng tôi sống lại những giây phút rực rỡ ấy qua video dưới đây.
          </p>
        </div>

        {/* Video nhúng */}
        <div
          className="relative w-full h-[50vh] overflow-hidden rounded-md"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
        
          {/* Hiệu ứng nhịp tim */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="w-32 h-32 bg-white/10 rounded-full blur-3xl pulse-heartbeat"></div>
          </div>

          {/* Video iframe */}
          <iframe
            className="absolute inset-0 w-full h-full z-20"
            src="https://www.youtube.com/embed/qe0R1Fv29-c?autoplay=0&rel=0&showinfo=0"
            title="T Shine Band Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div
          className="flex flex-wrap justify-center items-center gap-4 w-full my-5"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <LiquidButtonLink text="Thư viện" to="/library" bgColor="bg-indigo-600" />
        </div>
      </div>
    </section>
  );
};

export default BandVideo;
