const Title = ({
  text = "Tiêu đề",
  highlight = "",
  align = "center",      // 'left' | 'center' | 'right'
  size = "text-3xl",     // Tailwind size class: 'text-xl', 'text-4xl', etc.
  uppercase = false,     // true = chữ in hoa
}) => {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const casing = uppercase ? "uppercase" : "";

  return (
    <h2
      className={`${size} font-bold ${alignment[align]} ${casing}`}
    >
      <span className="text-white">{text} </span>
      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        {highlight}
      </span>
    </h2>
  );
};

export default Title;
