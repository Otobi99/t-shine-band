const Breadcrumb = ({ title = "Trang hiện tại", image }) => {
  return (
    <div
      className="w-full h-[30vh] relative flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay tối nhẹ để chữ nổi bật */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Tiêu đề nằm giữa */}
      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white uppercase tracking-wide text-center">
        {title}
      </h2>
    </div>
  );
};

export default Breadcrumb;
