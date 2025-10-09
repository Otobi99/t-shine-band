import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
const slides = [
    {
        bg: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/481914327_1166155768570243_3836290002193227729_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lDVViRrWCWYQ7kNvwHTNVld&_nc_oc=Adk0tu98zviwvk5cIeqlB-0aiyyeHkpO68FqnqxiJHba_2jgU5oCxsuiIFsD9n5IQkk&_nc_zt=23&_nc_ht=scontent.fsgn3-1.fna&_nc_gid=KEEZrKNo0bRoMurY-y2XgQ&oh=00_AfcKw87HbQvFpCoorDYpmOudlNoHt-msLZhQNAxFEBjVNw&oe=68ECE318',
        title: 'Giới thiệu Band',
        text: 'Chúng tôi là nhóm acoustic với đam mê âm nhạc mộc mạc.',
        button: 'Xem thêm',
    },
    {
        bg: 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
        title: 'T Shine Band',
        text: 'Sự kiện Cocacola',
        button: 'Xem ngay',
    },
    {
        bg: 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973535/hero-image-5_e0btdz.jpg',
        title: 'Chuyên cung cấp dịch vụ band nhạc',
        text: 'Chuyên nghiệp, chất lượng, ',
        button: 'Đặt vé',
    },
    {
        bg: "https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg",
        title: 'Lịch diễn',
        text: 'Tháng 10: Acoustic Cafe, Tây Ninh.',
        button: 'Đặt vé',
    },
    {
        bg: 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t39.30808-6/481821391_1166155548570265_5152250570843746469_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jIGC-NIP6jwQ7kNvwHg_eSo&_nc_oc=AdlkyL4xFyoTYADcTbagGikUXfqP-u4tCnCX_kzqLUOXng8Z14dFdkr-9gcUopTQtPo&_nc_zt=23&_nc_ht=scontent.fsgn13-1.fna&_nc_gid=a4YZ6SHHgC9mg0ZiBcIc2g&oh=00_Afdijy2XTt_nfm68iyS-KmVSWPX--TXOW1EXe4E6RI3kng&oe=68ECC8AA',
        title: 'Lịch diễn',
        text: 'Tháng 10: Acoustic Cafe, Tây Ninh.',
        button: 'Đặt vé',
    },
];

const Hero = () => {
    return (
        <div className="w-full h-[500px]">
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                navigation
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                autoplay={{
                    delay: 3000, // thời gian giữa các slide (ms)
                    disableOnInteraction: false, // vẫn tự động sau khi người dùng tương tác
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="
                            relative 
                            w-[300px] h-[500px] 
                            md:w-full md:h-[800px] 
                            bg-cover bg-center 
                            rounded-xl overflow-hidden
                        "
                        style={{
                            backgroundImage: `url(${slide.bg})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="
                                absolute inset-0 
                                flex flex-col justify-center items-center 
                                px-6 text-white
                                container mx-auto
                            ">
                            <h2 className="text-3xl md:text-[50px] font-bold mb-2 text-center">
                                {slide.title}
                            </h2>
                            <p className="mb-4 text-center">{slide.text}</p>
                                                    <button className="
                            bg-orange-500 
                            px-4 py-2 
                            rounded 
                            hover:bg-orange-600 
                            transition
                            ">
                                {slide.button}
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Hero