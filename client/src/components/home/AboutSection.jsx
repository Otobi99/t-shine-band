import SponsorSection from "../common/Section/SponsorSection";
import DescText from "./DescText";
import TitleText from "./TitleText";

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3f51b5] text-white min-h-screen overflow-hidden py-30">
      {/* Lớp phủ toàn bộ section */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#1e3a8a]/50 to-black/70 z-0"></div>
      {/* Nội dung chính */}
      <div className="relative z-10 container mx-auto px-4 md:px-0">
        <div className="flex items-center mb-10">
            <div className="flex-1">
                <TitleText/>
            </div>
            <div className="flex-1 ">
                <DescText/>
            </div>
        </div>
       <div className="w-full h-[50vh]">
          <img
            src="https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg"
            alt="T Shine Band"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <SponsorSection/>
      </div>
    </section>
  );
};

export default AboutSection;
