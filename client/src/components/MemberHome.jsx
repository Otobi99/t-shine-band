import { Member } from "../constants/Member";
import { useState, useEffect } from "react";

const MemberHome = () => {
  const [selectedId, setSelectedId] = useState(1);
  const selectedMember = Member.find((m) => m.id === selectedId);

  // Nếu member có array images, dùng ảnh đầu tiên làm ảnh chính
  const [mainImage, setMainImage] = useState(
    selectedMember.images?.[0] || selectedMember.image
  );

  // Cập nhật ảnh chính khi đổi thành viên
  useEffect(() => {
    setMainImage(selectedMember.images?.[0] || selectedMember.image);
  }, [selectedMember]);

  return (
    <div className="container mx-auto text-center py-10 flex flex-col-reverse md:flex-col">
      {/* Nút chọn thành viên */}
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
        <div className="flex items-center gap-4 px-4 py-2 flex-nowrap min-w-max">
          {Member.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedId(m.id)}
              className={`whitespace-nowrap px-4 py-2 rounded font-semibold transition ${
                selectedId === m.id
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>
      {/* Giới thiệu thành viên */}
      <div className="relative w-full bg-gradient-to-br text-blue-600 py-16 px-4 md:px-0">
        
        {/* Nội dung chính */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Ảnh chính */}
          <div className="w-full h-[900px] rounded-xl overflow-hidden">
            <img
              src={mainImage}
              alt="Ảnh chính"
              className="w-full h-full object-cover transition duration-500"
            />
          </div>

          {/* Mô tả */}
          <div className="max-w-xl text-left">
            <div className="text-center mb-3">
              <h2 className="text-5xl font-extrabold tracking-tight mb-4 uppercase">
                {selectedMember.name}
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                {selectedMember.title}
              </p>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              {selectedMember.desc}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white  font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg">
              Xem Profile
            </button>
             <div className="flex justify-start gap-4 mt-10 flex-wrap">
              {selectedMember.images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
                    mainImage === img
                      ? "border-orange-500"
                      : "border-transparent hover:border-gray-400"
                  } transition`}
                >
                  <img
                    src={img}
                    alt={`Ảnh ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberHome;
