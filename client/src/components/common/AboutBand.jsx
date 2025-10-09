import Logo from "@/assets/t-shine-logo.png"
export default function AboutBand() {
    return (
        <div className="container mx-auto px-4 md:px-0 py-16">
            {/* Nội dung chính */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Logo với animation */}
                <div className="w-100 h-100 flex-shrink-0 flex items-center justify-center">
                    <img
                        src={Logo} // thay bằng logo thật của bạn
                        alt="Logo Band"
                        className="logo-animate w-full h-full object-contain"
                    />
                </div>

                {/* Phần giới thiệu */}
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">Chúng tôi là ai?</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Band của chúng tôi là sự kết hợp giữa đam mê, kỹ thuật và cảm xúc. Từ những giai điệu nhẹ nhàng đến những bản rock bùng nổ, chúng tôi mang đến trải nghiệm âm nhạc chân thật và đầy năng lượng. Mỗi thành viên là một màu sắc riêng, cùng nhau tạo nên một bức tranh âm nhạc sống động.
                    </p>
                </div>
            </div>
        </div>
    );
}
