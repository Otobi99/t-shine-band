import LiquidButtonLink from "../common/LiquidButtonLink";
import ViewMoreButton from "../common/ViewMoreButton";
const HeroSection = () => {
    return (
        <section className="relative h-screen w-full">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dttqah17o/image/upload/v1760667489/t-shine-hero_foq1ur.jpg')", // Thay link của bạn vào đây
                }}
            ></div>
              {/* Lớp phủ toàn bộ section */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#1e3a8a]/50 to-black/70 z-0"></div>
            

            {/* Nội dung */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <h1 className="text-6xl font-bold mb-4 title uppercase">T Shine Band</h1>
                <p className="max-w-xl text-lg text-gray-200 mb-8">
                    Chúng tôi là nhóm nhạc trẻ đầy nhiệt huyết, mang đến những giai điệu bùng nổ và cảm xúc chân thật.
                </p>

             <div className="flex flex-wrap justify-center items-center gap-4 w-full">
                <LiquidButtonLink text="Thư viện" to="/library" bgColor="bg-indigo-600" />
                <LiquidButtonLink text="Booking" to="/booking" bgColor="bg-teal-600" />
            </div>

            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <ViewMoreButton />
            </div>
        </section>
    );
};

export default HeroSection;
