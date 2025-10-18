const categories = [
  "Nhạc Việt",
  "US / UK",
  "Nhạc tình",
  "Indie / Acoustic",
  "Nhạc quốc tế",
  "Ballad",
  "Nhạc sự kiện",
];

const MusicCategorySection = () => {
  return (
    <aside className="bg-white rounded-lg shadow-md p-4 sticky top-20">
      <h3 className="text-xl font-bold text-blue-700 mb-4">Thể loại âm nhạc</h3>
      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="text-gray-700 hover:text-blue-600 cursor-pointer transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MusicCategorySection