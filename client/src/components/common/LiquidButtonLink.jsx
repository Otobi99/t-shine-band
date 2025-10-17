import { useNavigate } from 'react-router-dom';

const LiquidButtonLink = ({
  text = 'Bấm vào',
  to = '/',
  bgColor = 'bg-blue-700', // Cho phép tùy chỉnh màu nền
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-white font-medium rounded-full overflow-hidden transition-all duration-500 ease-in-out"
    >
      {/* Chấm tròn nhỏ luôn hiển thị phía sau chữ */}
      <span
        className={`absolute left-1/3 top-1/2 w-5 h-5 ${bgColor} rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0`}
      ></span>

      {/* Hiệu ứng lan màu khi hover */}
      <span
        className={`absolute left-1/2 top-1/2 w-4 h-4 ${bgColor} rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[40] transition-transform duration-700 ease-out z-0`}
      ></span>

      {/* Chữ nằm trên */}
      <span className="relative z-10 text-base sm:text-lg md:text-xl">{text}</span>
    </button>
  );
};

export default LiquidButtonLink;
