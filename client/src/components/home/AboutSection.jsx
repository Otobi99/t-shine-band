import SponsorSection from "../common/Section/SponsorSection";
import Title from "../common/Title";
import DescText from "./DescText";
import LiquidButtonLink from "../common/LiquidButtonLink"

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3f51b5] text-white min-h-screen overflow-hidden py-30">
      {/* Lớp phủ toàn bộ section */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#1e3a8a]/50 to-black/70 z-0"></div>
      {/* Nội dung chính */}
      <div className="relative z-10 container mx-auto px-4 md:px-0">
        <div className="flex items-center mb-10">
            <div className="flex-1 flex-col gap-4">
               <Title
                text=""
                highlight="Về chúng tôi"
                align="left"
                size="text-md"
                uppercase={true}
              />
               <Title
                text="Chúng tôi là"
                highlight="T shine band"
                align="left"
                size="text-4xl"
                uppercase={true}
              />
              <LiquidButtonLink text="Thư viện" to="/library" bgColor="bg-indigo-600" />
            </div>
            <div className="flex-1 ">
                <DescText/>
            </div>
        </div>
      <div className="w-full h-[50vh] relative overflow-hidden group rounded-md">
          {/* Ảnh nền */}
          <img
            src="https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg"
            alt="T Shine Band"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Lớp ánh sáng lan từ trung tâm */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full relative">
              <div className="absolute left-1/2 top-1/2 w-0 h-0 bg-white opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[35] transition-transform duration-700 ease-out blur-[100px]"></div>
            </div>
          </div>
      </div>
        <SponsorSection/> 
      </div>
    </section>
  );
};

export default AboutSection;
