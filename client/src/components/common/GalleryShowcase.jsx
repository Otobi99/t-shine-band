import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
const  allImages = [
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973535/hero-image-5_e0btdz.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973535/hero-image-5_e0btdz.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973535/hero-image-5_e0btdz.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973535/hero-image-5_e0btdz.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973535/hero-image-5_e0btdz.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973535/hero-image-5_e0btdz.jpg',
 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973535/hero-image-5_e0btdz.jpg',
];

export default function GalleryShowcase() {
    const [visibleCount, setVisibleCount] = useState(4);
  const [selectedImage, setSelectedImage] = useState(null);

  const visibleImages = allImages.slice(0, visibleCount);
  const hasMore = visibleCount < allImages.length;

  return (
    <div className="container mx-auto px-4 md:px-0">
      {/* Tiêu đề */}
      <h2 className="text-5xl text-blue-600 font-extrabold mb-12 uppercase tracking-wide">
        Thư viện
      </h2>

      {/* Gallery ảnh lớn */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {visibleImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Ảnh ${i + 1}`}
              className="w-full h-[500px] object-cover transition duration-500"
            />
            <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold opacity-0 hover:opacity-100">
                Xem chi tiết
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nút xem thêm */}
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
          >
            Xem thêm
          </button>
        </div>
      )}

      {/* Modal ảnh chi tiết */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Chi tiết"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
