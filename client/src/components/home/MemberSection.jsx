import Title from "../common/Title";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const members = [
    {
        name: "Thảo Nguyên",
        role: "Vocal Nữ",
        image: "https://res.cloudinary.com/dttqah17o/image/upload/v1759810697/vocal-thao-nguyen-1_ahilwb.jpg",
        facebook: "https://facebook.com/lan",
        instagram: "https://instagram.com/lan",
        detail: "/members/lan",
    },
    {
        name: "Khánh Huyền",
        role: "Vocal Nữ",
        image: "https://res.cloudinary.com/dttqah17o/image/upload/v1759810723/vocal-khanh-huyen-3_txxahx.jpg",
        facebook: "https://facebook.com/vy",
        instagram: "https://instagram.com/vy",
        detail: "/members/vy",
    },
    {
        name: "Dương Hiếu",
        role: "Vocal Nam",
        image: "https://res.cloudinary.com/dttqah17o/image/upload/v1759810770/vocal-thqnh-hieu-1_jh5ihx.jpg",
        facebook: "https://facebook.com/minh",
        instagram: "https://instagram.com/minh",
        detail: "/members/minh",
    },
    {
        name: "Thanh Tùng",
        role: "Drums",
        image: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/491927833_1202557891596697_9210273372839869143_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=F407-jjPTZEQ7kNvwHHd12o&_nc_oc=Adn4fOd_WJAPqHHaDFsTUXVQ22nx3H_a23vGoTnKoZfffqMCEL_Neqxj6Ky1rbnGzqg&_nc_zt=23&_nc_ht=scontent.fsgn3-1.fna&_nc_gid=FhEAEQWtlCpkK7kmzgRz9w&oh=00_Afd8TLbTpK6Dm3d1ev9vQwh1IX_2Izkgs4-SxsuwtXzhpg&oe=68F795AC",
        facebook: "https://facebook.com/huy",
        instagram: "https://instagram.com/huy",
        detail: "/members/huy",
    },
    {
        name: "Công toàn",
        role: "Keyboard",
        image: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t39.30808-6/506307214_4417770641783617_7692915844385772200_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=10z0BVNfACoQ7kNvwFahZnZ&_nc_oc=Adl2brMUe5QIHNwzoq2oe_ko7FhHbNKgwudHAILElV8rJUmXKn7hcB39i-UjGD450mA&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_gid=plO4INvgKzStI90xdOr3RA&oh=00_AfcGj28BLD9u_KoOVaz_EHMPWIOyaNQ_aGvrIK7Cb8PbqQ&oe=68F7AAAC",
        facebook: "https://facebook.com/tu",
        instagram: "https://instagram.com/tu",
        detail: "/members/tu",
    },
    {
        name: "Nghĩa Trần",
        role: "Guitar",
        image: "https://res.cloudinary.com/dttqah17o/image/upload/v1759810842/giutar-nghia-tran-1_fc3vt0.jpg",
        facebook: "https://facebook.com/dung",
        instagram: "https://instagram.com/dung",
        detail: "/members/dung",
    },
];


const MemberSection = () => {
  return (
    <section className="mt-20">
      <div className="relative z-10 container mx-auto px-4 md:px-0">
        {/* Tiêu đề */}
        <div className="mb-10" data-aos="fade-up">
          <Title
            text="Thành viên"
            highlight="T Shine Band"
            align="center"
            size="text-4xl"
            uppercase={true}
          />
          <p className="text-center text-white/80 mt-4 max-w-2xl mx-auto">
            Mỗi thành viên mang một màu sắc riêng biệt, cùng nhau tạo nên sự đa dạng và sáng tạo trong âm nhạc.
          </p>
        </div>

        {/* Danh sách thành viên */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Ảnh thành viên */}
              <div className="relative w-full h-48 sm:h-56 md:h-70 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                {/* Lớp mờ lan từ trung tâm */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="w-full h-full relative">
                    <div className="absolute left-1/2 top-1/2 w-0 h-0 bg-black/40 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[35] transition-transform duration-700 ease-out blur-[80px]"></div>
                  </div>
                </div>

                {/* Icon mạng xã hội */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hover:text-blue-400 transition" />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-400 transition" />
                  </a>
                  <Link to={member.detail}>
                    <FaGlobe className="hover:text-green-400 transition" />
                  </Link>
                </div>
              </div>

              {/* Tên và vị trí */}
              <div className="p-4 text-center">
                <p className="text-white font-semibold">{member.name}</p>
                <p className="text-white/70 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSection;