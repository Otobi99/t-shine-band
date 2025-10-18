const videos = [
  {
    title: "Biểu diễn Nhạc Việt tại sự kiện",
    url: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Cover US/UK phong cách Acoustic",
    url: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Nhạc tình lãng mạn tại tiệc cưới",
    url: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
];

const BandVideoListSection = () => {
 return (
    <section>
      <h3 className="text-2xl font-bold text-blue-700 mb-4">Video biểu diễn</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="space-y-2">
            <iframe
              src={video.url}
              title={video.title}
              className="w-full aspect-video rounded-lg shadow-md"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-gray-700 font-medium">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BandVideoListSection