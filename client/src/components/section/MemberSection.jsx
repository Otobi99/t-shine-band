import { useEffect, useState } from "react";
import { members } from "../../constants/MemberSection";
import { getInstrumentIcon } from "../../utils/getInstrumentIcon";

export default function MemberSection() {
  const [activeId, setActiveId] = useState(1);
  const [vocalIndex, setVocalIndex] = useState(0);

  const activeMember = members.find((m) => m.id === activeId);
  const Icon = getInstrumentIcon(activeMember.role);

  useEffect(() => {
    setVocalIndex(0); // Reset khi đổi thành viên

    const interval = setInterval(() => {
      setVocalIndex((prev) => {
        const imageCount = activeMember.images.length;
        return (prev + 1) % imageCount;
      });
    }, 2000); // Chuyển ảnh mỗi 2s

    return () => clearInterval(interval);
  }, [activeMember]);

  return (
    <section className="relative overflow-hidden mt-10">
      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h2 className="text-5xl font-extrabold tracking-tight mb-4 title-font">
          Thành viên T Shine Band
        </h2>
        <p className="text-blue-600 max-w-2xl mx-auto text-lg">
          Mỗi người là một nốt nhạc, cùng nhau tạo nên bản hòa âm đầy cảm xúc. Hãy gặp gỡ những nghệ sĩ đứng sau âm nhạc của chúng tôi.
        </p>
      </div>

      {/* Main layout */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left: danh sách thành viên */}
        <aside className="bg-blue-800 rounded-xl p-4 space-y-3 shadow-lg md:col-span-3">
          {members.map((member) => (
            <button
              key={member.id}
              onClick={() => setActiveId(member.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition duration-300 ${
                activeId === member.id
                  ? "bg-white text-blue-800 shadow-md"
                  : "text-blue-100 hover:bg-blue-700 hover:text-white"
              }`}
            >
              <span className="text-sm opacity-70 mr-2">
                {String(member.id).padStart(2, "0")}.
              </span>
              {member.name}
            </button>
          ))}
        </aside>

        {/* Center: hình ảnh vocal */}
        <div className="relative flex items-center justify-center md:col-span-6 group">
          <div className="w-full h-[500px] overflow-hidden relative">
            <img
              src={activeMember.images[vocalIndex]}
              alt={activeMember.name}
              key={vocalIndex}
              className="w-full h-full object-cover opacity-0 scale-95 animate-fadeZoom rounded-sm"
            />
          </div>
        </div>

        {/* Right: nội dung giới thiệu + icon */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-xl border border-blue-100 relative overflow-hidden md:col-span-3">
          {/* Icon nhạc cụ neon bên phải */}
          <Icon className="absolute top-4 right-4 text-blue-500 text-[80px] opacity-30 animate-iconPulse rotate-[8deg] drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] pointer-events-none" />

          <h3 className="text-3xl font-bold mb-2">{activeMember.name}</h3>
          <p className="text-md text-blue-600 italic mb-2">{activeMember.role}</p>
          <p className="text-blue-700 mb-4 leading-relaxed">{activeMember.bio}</p>
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full shadow-md hover:shadow-xl transition flex items-center gap-2">
            <span>🎧</span> Xem chi tiết
          </button>
        </div>
      </div>
    </section>
  );
}
