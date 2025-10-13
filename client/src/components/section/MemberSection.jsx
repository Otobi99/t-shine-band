import { useEffect, useState } from "react";
import { members } from "../../constants/MemberSection";


export default function MemberSection() {
  const [activeId, setActiveId] = useState(1);
  const [vocalIndex, setVocalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVocalIndex((prev) => (prev + 1) % members[0].images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeMember = members.find((m) => m.id === activeId);

  return (
    <section className="relative w-full py-20 bg-white text-white overflow-hidden">
       {/* Liquic blobs */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-40 animate-blob1"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-purple-400 rounded-full blur-2xl opacity-30 animate-blob2"></div>
      <div className="absolute top-2/3 right-1/2 w-40 h-40 bg-pink-300 rounded-full blur-xl opacity-20 animate-blob3"></div>
      {/* Header content */}
      <div className="relative z-10 text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4">Thành viên T Shine Band</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Mỗi thành viên là một sắc màu riêng biệt, cùng nhau tạo nên bản hòa âm đầy cảm xúc. Khám phá những gương mặt đứng sau âm nhạc của chúng tôi.
        </p>
      </div>

      {/* Main layout */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left: danh sách thành viên */}
        <aside className="w-full md:flex-1  bg-blue-800 rounded-md">
          {members.map((member) => (
            <button
              key={member.id}
              onClick={() => setActiveId(member.id)}
              className={`block w-full text-left px-5 py-3 font-semibold transition ${
                activeId === member.id
                  ? "bg-white text-blue-800"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {String(member.id).padStart(2, "0")}. {member.name}
            </button>
          ))}
        </aside>

        {/* Center: hình ảnh vocal */}
        <div className="flex-1 h-full overflow-hidden border-4 border-white shadow-xl transition-all duration-1000 ease-in-out">
          <img
            src={
              activeMember.id === 1
                ? activeMember.images[vocalIndex]
                : activeMember.images[0]
            }
            alt={activeMember.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: nội dung giới thiệu */}
        <div className="flex-1 text-left max-w-xl">
          <h3 className="text-2xl font-bold mb-2">{activeMember.name}</h3>
          <p className="text-sm text-blue-200 italic mb-2">{activeMember.role}</p>
          <p className="text-gray-200 mb-4">{activeMember.bio}</p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white shadow-md">
            Xem chi tiết
          </button>
        </div>
      </div>
    </section>
  );
}
