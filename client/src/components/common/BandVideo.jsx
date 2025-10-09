const videoList = [
  {
    title: "Skyzone Quận 3 TPHCM (Dọc)",
    url: "https://www.facebook.com/plugins/video.php?height=800&href=https%3A%2F%2Fwww.facebook.com%2Fthanhtung.hole.967%2Fvideos%2F598071079589163%2F&show_text=false&width=400&t=0",
    orientation: "vertical",
  },
  {
    title: "Sự kiện CocaCola (Ngang)",
    url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthanhtung.hole.967%2Fvideos%2F494274972943258%2F&show_text=false&width=560&t=0",
    orientation: "horizontal",
  },
  {
    title: "Show Acoustic tại Quán Cafe (Ngang)",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthanhtung.hole.967%2Fvideos%2F1318568886183212%2F&show_text=false&width=203&t=0",
  },
  {
    title: "Festival Tây Ninh – EDM Night (Dọc)",
    url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthanhtung.hole.967%2Fvideos%2F1557692878478582%2F&show_text=false&width=560&t=0",
  },
  {
    title: "Festival Tây Ninh – EDM Night (Dọc)",
    url:"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthanhtung.hole.967%2Fvideos%2F887238273226752%2F&show_text=false&width=560&t=0" 
  },
  {
    title: "Festival Tây Ninh – EDM Night (Dọc)",
    url:"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fnguyenphong180498%2Fvideos%2F434665999441640%2F&show_text=false&width=560&t=0" 
 },
  {
    title: "Festival Tây Ninh – EDM Night (Dọc)",
    url:"https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthanhtung.hole.967%2Fvideos%2F965535844565519%2F&show_text=false&width=267&t=0"
 },
]
const BandVideoGallery = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">🎥 Thư Viện Video Biểu Diễn</h2>
          <p className="text-gray-500 mt-2">Tổng hợp các clip dọc và ngang thể hiện sự chuyên nghiệp của band</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videoList.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div
                className={`w-full ${
                  video.orientation === "vertical" ? "h-[500px]" : "h-[300px]"
                }`}
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BandVideoGallery;
