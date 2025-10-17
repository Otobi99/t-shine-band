import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="text-center animate-fade-in">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <p className="text-2xl mt-4">Trang không tồn tại</p>
        <p className="mt-2 text-sm text-gray-200">Có thể bạn đã nhập sai địa chỉ hoặc trang đã bị xóa.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-100 transition duration-300"
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
