const LiquidButton = ({
  text = "Bấm vào",
  onClick,
  bgColor = "bg-blue-700", // Cho phép tùy chỉnh màu
}) => {
  return (
    <button
      onClick={onClick}
      className="relative group px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 
      text-white font-medium rounded-full overflow-hidden 
      transition-all duration-300 ease-in-out w-full max-w-xs sm:max-w-sm md:max-w-md"
    >
      {/* Chấm tròn nhỏ luôn hiển thị phía sau chữ */}
      <span
        className={`absolute left-1/2 top-1/2 w-4 h-4 ${bgColor} rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0`}
      ></span>

      {/* Hiệu ứng lan màu khi hover */}
      <span
        className={`absolute left-1/2 top-1/2 w-4 h-4 ${bgColor} rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[40] transition-transform duration-700 ease-out z-0`}
      ></span>

      {/* Chữ nằm trên */}
      <span className="relative z-10 text-sm sm:text-base md:text-lg">{text}</span>
    </button>
  );
};

export default LiquidButton;
