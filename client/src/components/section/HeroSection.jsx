import { useEffect, useState } from "react";

const phrases = [
  "Chúng tôi là Acoustic Soul",
  "Âm nhạc là hơi thở",
  "Giai điệu chạm đến trái tim",
];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(phrases[index].substring(0, subIndex));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white text-center flex items-center justify-center px-4">
      {/* Neon gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 animate-gradientShift opacity-30 z-0"></div> */}

      {/* Liquic blobs */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-40 animate-blob1"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-purple-400 rounded-full blur-2xl opacity-30 animate-blob2"></div>
      <div className="absolute top-2/3 right-1/2 w-40 h-40 bg-pink-300 rounded-full blur-xl opacity-20 animate-blob3"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          {text}
          <span className="border-r-2 border-gray-900 animate-blink ml-1"></span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
          Band nhạc acoustic tại Tây Ninh – nơi âm nhạc kết nối cảm xúc.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg">
          Khám phá ngay
        </button>
      </div>
    </section>
  );
}
