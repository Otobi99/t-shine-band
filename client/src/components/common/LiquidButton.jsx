const LiquidButton = ({
  text = "Bấm vào",
  onClick,
  bgColor = "bg-blue-700",
  type = "submit", // mặc định là submit
}) => {
  const buttonType = type === "none" ? "button" : type;

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`relative group px-6 py-3 md:px-8 md:py-4 text-white font-semibold rounded-full overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md transition-all duration-300 ease-in-out`}
    >
      {/* Hiệu ứng nền lan rộng */}
      <span className="absolute inset-0 flex items-center justify-center z-0">
        <span
          className={`w-4 h-4 ${bgColor} rounded-full transform scale-0 group-hover:scale-[40] transition-transform duration-700 ease-out mix-blend-multiply`}
        ></span>
      </span>

      {/* Chấm tròn nhỏ luôn hiển thị phía sau chữ */}
      <span
        className={`absolute left-6 top-1/2 w-4 h-4 md:h-10 md:w-10 ${bgColor} rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0`}
      ></span>

      {/* Chữ nằm trên */}
      <span className="relative z-10 text-sm sm:text-base md:text-lg transition-transform duration-300 group-hover:scale-105">
        {text}
      </span>
    </button>
  );
};

export default LiquidButton;
