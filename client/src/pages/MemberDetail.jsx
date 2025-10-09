import { FaMicrophoneAlt, FaGuitar, FaDrum, FaPlayCircle } from 'react-icons/fa';

const member = {
  name: "Nguyễn Văn Tùng",
  role: "Vocal chính",
  avatar: "/images/tung.jpg", // ảnh chân dung
  skills: ["Hát live", "Giao tiếp sân khấu", "Phối khí", "Sáng tác"],
  gallery: [
    "/images/tung-show1.jpg",
    "/images/tung-show2.jpg",
    "/images/tung-show3.jpg",
  ],
  videos: [
    {
      title: "Live tại Skyzone",
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
      title: "Acoustic tại Cafe",
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
  ],
};

const MemberDetail = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{member.name}</h1>
            <p className="text-indigo-600 font-semibold">{member.role}</p>
            <p className="mt-4 text-gray-600">
              Thành viên chủ lực của band với phong cách biểu diễn cuốn hút, giọng hát nội lực và khả năng làm chủ sân khấu tuyệt vời.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Kỹ năng nổi bật</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            {member.skills.map((skill, index) => (
              <li key={index} className="bg-gray-100 px-4 py-2 rounded-md shadow-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🖼️ Hình ảnh biểu diễn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {member.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaPlayCircle className="text-indigo-600" />
            🎬 Clip biểu diễn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {member.videos.map((video, index) => (
              <div key={index} className="space-y-2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDetail;
