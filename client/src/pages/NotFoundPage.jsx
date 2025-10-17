import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3f51b5] text-white overflow-hidden flex items-center justify-center">
      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#1e3a8a]/50 to-black/70 z-0"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 text-center animate-fade-in px-4">
        <h1 className="text-[10rem] font-extrabold tracking-widest leading-none">404</h1>
        <p className="text-3xl font-semibold mt-4">Trang không tồn tại</p>
        <p className="mt-2 text-base text-gray-200">
          Có thể bạn đã nhập sai địa chỉ hoặc trang đã bị xóa.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
