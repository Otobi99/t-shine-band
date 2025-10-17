import LiquidButton from "../../components/common/LiquidButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../../validate/ContactSchema";
import Title from "../../components/common/Title";
import SponsorSection from "../../components/common/Section/SponsorSection";
import Breadcrumb from "../../components/common/Breadcrumb";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = (data) => {
        console.log("Dữ liệu gửi đi:", data);
    };

    return (
        <section className="mb-10">
            <Breadcrumb
                title="Liên hệ"
                image="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/482083605_1166739868511833_4428161970871765883_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gD7ScVGwlaoQ7kNvwH9Pjyv&_nc_oc=Adk9HOaagl241BbRlyxkdj4e5l3bz29tYr0gXdiT56oOAoy3R-M-gc7m7BArv66Vrno&_nc_zt=23&_nc_ht=scontent.fsgn4-1.fna&_nc_gid=Aijk8k42baeUaSXJMTtVcA&oh=00_AfdaozQBG4SSi9fqWO-BvPMFCNfzGO2_344TKpVyPfd-lg&oe=68F7C94D"
            />
            <div className="container mx-auto px-4 md:px-0 mt-20">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Bên trái: giới thiệu */}
                    <div className="w-full md:w-1/2 space-y-6" data-aos="fade-right">
                        <Title
                            text=""
                            highlight="T Shine Band"
                            align="left"
                            size="text-4xl"
                            uppercase={true}
                        />
                        <div className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                            <p>
                                T Shine Band là nhóm nhạc trẻ đầy đam mê, mang trong mình năng lượng bùng nổ và tinh thần sáng tạo không ngừng.
                            </p>
                            <p>
                                Chúng tôi kết hợp giữa âm nhạc hiện đại và cảm xúc chân thật để tạo nên những giai điệu chạm đến trái tim người nghe.
                            </p>
                            <p>
                                Hành trình của chúng tôi là sự kết nối, truyền cảm hứng và lan tỏa tình yêu âm nhạc đến mọi người.
                            </p>
                        </div>
                        <SponsorSection />
                    </div>

                    {/* Bên phải: form liên hệ */}
                    <div className="w-full md:w-full bg-white/1 backdrop-blur-md shadow-md p-5" data-aos="fade-left">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
                            <div>
                                <label className="text-white block mb-1">Họ và tên</label>
                                <input {...register("name")} className="input rounded-md" placeholder="Nhập họ tên" />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="text-white block mb-1">Số điện thoại</label>
                                <input {...register("phone")} className="input rounded-md" placeholder="Nhập số điện thoại" />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            </div>

                            <div>
                                <label className="text-white block mb-1">Địa điểm biểu diễn</label>
                                <input {...register("location")} className="input rounded-md" placeholder="Nhập địa điểm" />
                                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                            </div>

                            <div>
                                <label className="text-white block mb-1">Thời gian</label>
                                <input type="datetime-local" {...register("time")} className="input rounded-md" />
                                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
                            </div>

                            <div>
                                <label className="text-white block mb-1">Dresscode (nếu có)</label>
                                <input {...register("dresscode")} className="input rounded-md" placeholder="Ví dụ: trắng - đen" />
                            </div>

                            <div>
                                <label className="text-white block mb-1">Lời nhắn cho band</label>
                                <textarea rows="3" {...register("message")} className="input rounded-md" placeholder="Thông điệp hoặc yêu cầu đặc biệt" />
                            </div>

                            <div>
                                <label className="text-white block mb-1">Số lượng người</label>
                                <input type="number" {...register("quantity", { valueAsNumber: true })} className="input rounded-md" placeholder="Từ 6 đến 10 người" />
                                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                            </div>
                            <div className="w-full max-w-xs mx-auto">
                                <LiquidButton text="Gửi liên hệ" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
